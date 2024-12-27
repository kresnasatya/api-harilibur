import path from 'path';
import fsPromises from 'fs/promises';

export async function onRequest(context) {
    try {
        let result = [];
        let year = (new Date()).getFullYear();
        let text = await fsPromises.readFile(path.join(process.cwd(), 'data', `${year}.json`), 'utf8');

        let month = context.request.url.searchParams.get('month');
        if (context.request.url.searchParams.get('year')) {
            year = context.request.url.searchParams.get('year');
            text = await fsPromises.readFile(path.join(process.cwd(), 'data', `${year}.json`), 'utf8');
        }
        let parseResult = JSON.parse(text);

        if (month && year) {
            result = parseResult.filter(item => {
                if ((new Date(item.holiday_date)).getMonth() + 1 == month) {
                    return item;
                }
            });
        } else if (year) {
            result = parseResult;
        }

        let response = new Response(JSON.stringify(result));

        response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
        response.headers.set('Content-Type', 'application/json');
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET');

        return response;
    } catch (error) {
        let response = new Response(JSON.stringify({ error: error.message }), {
            status: error.statusCode || 500
        });

        response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
        response.headers.set('Content-Type', 'application/json');
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET');
    }
}
// import path from 'path';
// import fsPromises from 'fs/promises';   

export async function onRequest(context) {
    try {
        // let result = [];

        let month = context.request.url.searchParams.get('month') || '';
        let year = context.request.url.searchParams.get('year') || '';
        let response = new Response(JSON.stringify({ year, month }));

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
import path from 'path';
import fsPromises from 'fs/promises';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=0, s-maxage=86400'
};

export const handler = async (event, context) => {
    try {
        let result = [];
        let year = (new Date()).getFullYear();
        let text = await fsPromises.readFile(path.join(process.cwd(), 'data', `${year}.json`), 'utf8');

        let month = event.queryStringParameters.month;
        if (event.queryStringParameters.year) {
            year = event.queryStringParameters.year;
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

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(result)
        };
    } catch (error) {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify([])
        }
    }
}
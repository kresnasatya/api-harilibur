import path from 'path';
import fsPromises from 'fs/promises';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=30');
    try {
        let result = [];
        let year = (new Date()).getFullYear();
        let text = await fsPromises.readFile(path.join(process.cwd(), 'data', `${year}.json`), 'utf8');

        let month = req.query.month;
        if (req.query.year) {
            year = req.query.year;
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

        res.status(200).send(result);
    } catch (error) {
        res.status(200).send([]);
    }
}
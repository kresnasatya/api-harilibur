import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getHTMLCalendar = (month, year) => {
    return new Promise((resolve, reject) => {
        fetch(`https://kalenderbali.com?bl=${month}&th=${year}`)
            .then(response => resolve(response.text()))
            .catch(error => reject(error));
    });
}

function zeroPad(num) {
    return (num.toString().length === 1) ? "0" + num : num;
}

let keywordFakultatif = ['Galungan', 'Kuningan', 'Siwa Ratri', 'Saraswati'];

async function getDaftarHariLibur(year) {
    try {
        let result = [];
        for (let x = 1; x <= 12; x ++) {
            console.log(`Mengambil daftar hari libur bulan ke - ${x} tahun ${year}...`);
            await getHTMLCalendar(x, year).then((data) => {
                const { document } = (new JSDOM(data)).window;
                let waraList = document.querySelectorAll('div.waralist');
                let daftarHariPenting = waraList[1];

                // Daftar hari libur
                let daftarHariLibur = daftarHariPenting.querySelectorAll('div[style="padding-bottom:7px; color:#FF0000"]');
                Array.from(daftarHariLibur).forEach(e => {
                    let textContent = e.textContent;
                    let splitTextContent = textContent.split(".");
                    let trimSplitTextContent = splitTextContent.map((s) => String.prototype.trim.apply(s));
                    let item = {
                        holiday_date: `${year}-${zeroPad(x)}-${trimSplitTextContent[0]}`,
                        formatted_holiday_date: new Date(`${year}-${zeroPad(x)}-${trimSplitTextContent[0]}`),
                        holiday_name: trimSplitTextContent[1],
                        is_national_holiday: true
                    };
                    result.push(item);
                });

                // Daftar hari lainnya
                let daftarHariLainnya = daftarHariPenting.querySelectorAll('div[style="padding-bottom:7px"]');
                Array.from(daftarHariLainnya).forEach(e => {
                    let textContent = e.textContent;
                    let splitTextContent = textContent.split(".");
                    let trimSplitTextContent = splitTextContent.map((s) => String.prototype.trim.apply(s));
                    for (let key of keywordFakultatif) {
                        if (trimSplitTextContent[1].includes(key)) {
                            let item = {
                                holiday_date: `${year}-${zeroPad(x)}-${trimSplitTextContent[0]}`,
                                formatted_holiday_date: new Date(`${year}-${zeroPad(x)}-${trimSplitTextContent[0]}`),
                                holiday_name: trimSplitTextContent[1],
                                is_national_holiday: false
                            };
                            result.push(item);
                        }
                    }                        
                });
            })
        }
        // See: https://flaviocopes.com/how-to-sort-array-by-date-javascript/
        const sortedResult = result.slice().sort((a, b) => b.formatted_holiday_date - a.formatted_holiday_date);
        for (const item of sortedResult) {
            delete item.formatted_holiday_date;
        }

        fs.writeFile(outputFile, JSON.stringify(sortedResult), err => {
            if (err) {
                console.log(err);
            }
            console.log(`Berhasil menyimpan data daftar hari libur di tahun ${year}`);
        });
    } catch (error) {
        console.log(error);
    }
};

let year = (new Date()).getFullYear() + 1;
let myArgs = process.argv.slice(2);
if (myArgs.length > 0) {
    year = parseInt(myArgs[0]);
    if (isNaN(year)) {
        console.log('Yang Anda inputkan adalah bukan tahun!');
    } else if (year < 1900 || year > 3000) {
        console.log('Tahun yang diinputkan tidak boleh kurang dari 1900 atau lebih dari 3000!');
    }
}

const outputFile = path.join(__dirname, '..', 'data', `${year}.json`);

(async () => await getDaftarHariLibur(year))();

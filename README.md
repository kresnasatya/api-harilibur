# API Hari Libur

API hari libur nasional di Indonesia dan hari libur daerah Bali.

> Tanggal merah di kalender mungkin bisa menyenangkan semua orang.

## Cara Menjalankan Kode Program

Untuk menjalankan kode program ini di mode development maka Anda harus:

- Memilki akun di tiga platform antara lain Cloudflare, Netlify, dan Vercel.
- Menginstal NodeJS dan PNPM (sejenis NPM package manager).
- Menginstal CLI untuk Netlify dan Vercel.

Berikutnya, arahkan terminal Anda ke kode program dan jalankan setiap baris perintah di bawah ini di setiap tab terminal.

```sh
# Tab terminal pertama (Cloudflare)
pnpm run pages:dev
# Tab terminal kedua
netlify dev
# Tab terminal ketiga
vercel dev
```

## Format respon

```json
{
  holiday_date: "2021-01-01",
  holiday_name: "Tahun Baru Masehi",
  is_national_holiday: true
}
```

## Cara Mengakses API

Silakan gunakan salah satu dari 3 domain di bawah ini untuk mengakses API hari libur.

- Cloudflare: https://api-harilibur.pages.dev
- Netlify: https://api-harilibur.netlify.app
- Vercel: https://api-harilibur.vercel.app

### Endpoint

- `/api` => Mendapatkan daftar hari libur tahun sekarang.
- `/api?year=2020` => Mendapatkan daftar hari libur di tahun 2020.
- `/api?month=8&year=2020` => Mendapatkan daftar hari libur di bulan 8 tahun 2020.
- `/api?month=8` => Mendapatkan daftar hari libur di bulan 8 tahun sekarang.

Jika mengakses API di luar cara tersebut maka tetap mengembalikan code status `200` dengan isian array kosong (`[]`)!

## Sumber Data

Terima kasih [kalenderbali.com](http://kalenderbali.com) telah menyediakan data hari libur. 🙏🏻

## Pertanyaan

Tahun yang saya cari tidak ada, bagaimana caranya?

API ini menggunakan fitur **schedule** dari GitHub Actions dan Workflows. Jadi, setiap tanggal 1 Januari repositori ini akan melakukan scraping hari libur untuk tahun mendatang. Misalnya, sekarang tanggal 1 Januari 2022 maka repositori ini akan melakukan scraping hari libur untuk tahun 2023. Jika tidak ada tahun yang Anda cari silakan [buat isu](https://github.com/kresnasatya/api-harilibur/issues) dan saya akan berusaha untuk menambahkan tahun yang dicari. 🙏🏻

## Apresiasi

Kalau API Hari Libur ini bermanfaat bagi kamu tolong apresiasi saya di [trakteer.id](https://trakteer.id/kresnasatya) ya!

## Pengakuan

Ide ini berasal dari rekan kerja saya, Nyoman Purnama. Beliau ingin memperoleh data hari-hari libur nasional dan daerah khususnya Bali untuk kebutuhan sistem internal di tempat kerja kami. Namun, saat itu belum ada API yang bisa memenuhi kebutuhan tersebut. Sehingga terciptalah proyek ini untuk menyelesaikan kebutuhan tersebut.

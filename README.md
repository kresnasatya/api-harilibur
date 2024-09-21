# API Hari Libur

API hari libur nasional di Indonesia dan hari libur daerah Bali.

> Tanggal merah di kalender mungkin bisa menyenangkan semua orang.

## Format respon

```
{
  holiday_date: "2021-05-13",
  holiday_name: "Hari Paskah",
  is_national_holiday: true or false
}
```

## Cara Mengakses API

### Vercel

`https://api-harilibur.vercel.app/api` => mendapatkan daftar hari libur tahun sekarang

`https://api-harilibur.vercel.app/api?year=2021` => mendapatkan daftar hari libur di tahun 2021

`https://api-harilibur.vercel.app/api?month=8&year=2021` => mendapatkan daftar hari libur di bulan 8 tahun 2021

`https://api-harilibur.vercel.app/api?month=8` => mendapatkan daftar hari libur di bulan 8 tahun sekarang

Jika mengakses API di luar cara tersebut maka tetap mengembalikan code status `200` dengan isian array kosong (`[]`)!

### Netlify

`https://api-harilibur.netlify.app/api` => mendapatkan daftar hari libur tahun sekarang

`https://api-harilibur.netlify.app/api?year=2021` => mendapatkan daftar hari libur di tahun 2021

`https://api-harilibur.netlify.app/api?month=8&year=2021` => mendapatkan daftar hari libur di bulan 8 tahun 2021

`https://api-harilibur.netlify.app/api?month=8` => mendapatkan daftar hari libur di bulan 8 tahun sekarang

Jika mengakses API di luar cara tersebut maka tetap mengembalikan code status `200` dengan isian array kosong (`[]`)!

## Sumber Data

Terima kasih [kalenderbali.com](http://kalenderbali.com) telah menyediakan data hari libur. 🙏🏻

## Pertanyaan

Tahun yang saya cari tidak ada, bagaimana caranya?

API ini menggunakan fitur **schedule** dari GitHub Actions dan Workflows. Jadi, setiap tanggal 1 Januari repositori ini akan melakukan scraping hari libur untuk tahun mendatang. Misalnya, sekarang tanggal 1 Januari 2022 maka repositori ini akan melakukan scraping hari libur untuk tahun 2023. Jika tidak ada tahun yang Anda cari silakan [buat isu](https://github.com/kresnasatya/api-harilibur/issues) dan saya akan berusaha untuk menambahkan tahun yang dicari. 🙏🏻

## Apresiasi

Kalau API Hari Libur ini bermanfaat bagi kamu tolong apresiasi saya di [saweria.co](https://saweria.co/kresnasatya) atau [trakteer.id](https://trakteer.id/kresnasatya) ya!

## Pengakuan

Ide ini berasal dari rekan kerja saya, Nyoman Purnama. Beliau ingin memperoleh data hari-hari libur nasional dan daerah khususnya Bali untuk kebutuhan sistem internal di tempat kerja kami. Namun, saat itu belum ada API yang bisa memenuhi kebutuhan tersebut. Sehingga terciptalah proyek ini untuk menyelesaikan kebutuhan tersebut.

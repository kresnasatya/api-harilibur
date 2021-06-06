# API Hari Libur

Tanggal merah di kalender bisa menyenangkan semua orang.

## Format respon

```
{
  holiday_date: "2021-05-13",
  holiday_name: "Hari Paskah",
  is_national_holiday: true or false
}
```

## Cara Mengakses API

`https://api-harilibur.vercel.app/api` => mendapatkan daftar hari libur tahun sekarang

`https://api-harilibur.vercel.app/api?year=2021` => mendapatkan daftar hari libur di tahun 2021

`https://api-harilibur.vercel.app/api?month=8&year=2021` => mendapatkan daftar hari libur di bulan 8 tahun 2021

`https://api-harilibur.vercel.app/api?month=8` => mendapatkan daftar hari libur di bulan 8 tahun sekarang

Jika mengakses API di luar cara tersebut maka tetap mengembalikan code status `200` dengan isian array kosong (`[]`)!

## Sumber Data

Terima kasih [kalenderbali.org](http://kalenderbali.org) telah menyediakan data hari libur. 🙏🏻

## Pertanyaan

- Tahun yang saya cari tidak ada. Bagaimana caranya? Saat pertama kali api ini dibuat, tahun-tahun yang tersedia adalah di tahun 1995, 2015 - 2022. Jika tidak ada, silakan [buat isu](https://github.com/satyakresna/api-harilibur/issues) dan saya akan berusaha untuk menambahkan tahun yang dicari. 🙏🏻

## Apresiasi

Kalau API Hari Libur ini bermanfaat bagi kamu tolong apresiasi saya di [saweria.co](https://saweria.co/satyakresna) atau [trakteer.id](https://trakteer.id/satyakresna) ya!
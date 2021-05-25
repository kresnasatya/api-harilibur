// Website: http://kalenderbali.org/klasik/
// Tujuan: ambil tanggal libur dan nama hari libur
// Ambil per tahun tanggal libur dan hari libur
// tgl, nama hari libur. Misal 2021-05-13 = Hari Paskah

```
{
  holiday_date: "2021-05-13",
  holiday_name: "Hari Paskah"
}
```

document.querySelectorAll('div.libur');
var waraList = document.querySelectorAll('div.waralist');
var daftarHariPenting = waraList[1];
var daftarHariLibur = daftarHariPenting.querySelectorAll('div[style="padding-bottom:7px; color:#FF0000"]');
Array.from(daftarHariLibur).forEach(e => console.log(e));

Array.from(daftarHariLibur).forEach(e => {
  var textContent = e.textContent;
    var splitTextContent = textContent.split(".");
    console.log(splitTextContent);
});

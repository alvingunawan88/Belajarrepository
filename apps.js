// var orang =
// {
//     Nama: 'Alvin',
//     Usia: '30',
//     Pekerjaan: 'Fund Manager',
//     namaFull: function()
//     {
//     return this. Nama + " " + "Gunawan";
//     }
// }

// console.log(orang.namaFull())

function orang2(nama, usia, job)
{
    this.namaDpn = nama;
    this.umur = usia;
    this.pekerjaan = job;
}

var Alvin = new orang2('Alvin', 30, 'Fund Manager');
console.log(Alvin.umur)

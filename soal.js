//soal no 1
function hari(angka) {
    const daftarHari = {
        1: "senin",
        2: "selasa",
        3: "rabu",
        4: "kamis",
        5: "jumat"
    }
    if(angka === 6 || angka === 7){
        return "hari libur";
    }else if(angka >= 1 && angka <= 5){
        return daftarHari[angka];
    }else{
        return "ga ada hari"
    }
};
//soal no 2

/* Buatlah banyak bintang yang membentuk persegi panjang lalu di cetak dengan cara berelasi. */
function bintang(y){
    let bintang = "";
    for (let i = 0; i < 2; i++){
        for (let j = 0; j < y; j++){
            bintang += "*";
        }
        bintang += "\n";
    }
    return bintang;
};
//soal no 3
function rapot(nilai){
    switch (nilai) {
        case 100 :
            return "Terbaik";
            
        case 90:
            return "Cukup Baik";
            
        case 80:
            return "Baik";
            
        case 60:
            return "Harus Semangat";
            
        case 50:
            return "Remed";
        
        default:
            return "Tidak Lulus";
            
    }
};

module.exports = {rapot, hari, bintang} ;
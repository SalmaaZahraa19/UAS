function cekJawaban() {
    let skor = 0;
    let totalSoal = 10; 

    for (let i = 1; i <= totalSoal; i++) {
        // ambil jawaban yang dipilih
        let jawaban = document.querySelector('input[name="q' + i + '"]:checked');

        if (jawaban) {
            // setiap jawaban benar = 10 poin
            skor += parseInt(jawaban.value) * 10;
        }
    }

    let hasil = document.getElementById("hasil");
    
    hasil.classList.remove("lulus", "tidak-lulus");

    // cek kelulusan orang yg nyoba
    if (skor >= 70) {
        hasil.innerHTML = "Skor: " + skor + " ✅ MANTAP BETULLLL, FIX! PASTI CALON PROFESOR🤩🥳😋";
        hasil.classList.add("lulus"); // warna hijau jika lulus
    } else {
        hasil.innerHTML = "Skor: " + skor + " ❌ Kasiann, AYO LEBIH SEMANGAT LAGI BUAT BELAJAR🙏🤗";
        hasil.classList.add("tidak-lulus"); // warna merah jika tidak lulus
    }
}

function ulang() {
    document.querySelector("form").reset(); // reset semua pilihan
    let hasil = document.getElementById("hasil");
    hasil.innerHTML = ""; // hapus hasil
    hasil.classList.remove("lulus", "tidak-lulus"); // reset warna
}

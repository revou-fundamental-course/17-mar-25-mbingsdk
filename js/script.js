function hitung() {
    let sisi = document.getElementById("sisi").value;
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    let pilihan = document.getElementById("pilihan").value;
    let hasil = "";
    let objek = document.getElementsByClassName("input-container")[0].id;

    if (objek === "persegi-panjang") {
        if (panjang === "" || panjang <= 0 || lebar === "" || lebar <= 0) {
            alert("Isi dulu bang!");
            return;
        }

        if (pilihan === "luas") {
            hasil = "Luas: " + (panjang * lebar);
        } else if (pilihan === "keliling") {
            hasil = "Keliling: " + (2 * (parseInt(panjang) + parseInt(lebar)));
        }
    } else if (objek === "persegi") {
        if (sisi === "" || sisi <= 0) {
            alert("Isi dulu bang!");
            return;
        }

        if (pilihan === "luas") {
            hasil = "Luas: " + (sisi * sisi);
        } else if (pilihan === "keliling") {
            hasil = "Keliling: " + (4 * sisi);
        }
    }

    document.getElementById("hasil").innerText = hasil;
}

function changeForm() {
    let inputContainer = document.getElementsByClassName("input-container")[0];
    if (inputContainer.id === "persegi") {
        document.getElementById("judul").innerText = "Kalkulator Persegi Panjang";
        inputContainer.id = "persegi-panjang";
        document.getElementById("sisi").style.display = "none";
        document.getElementById("panjang").style.display = "block";
        document.getElementById("lebar").style.display = "block";
        document.getElementById("gambar").src = "https://cdn-web-2.ruangguru.com/landing-pages/assets/87a4a4c2-8e10-4838-bfd5-89031a47b615.png";
    } else if (inputContainer.id === "persegi-panjang") {
        document.getElementById("judul").innerText = "Kalkulator Persegi";
        inputContainer.id = "persegi";
        document.getElementById("sisi").style.display = "block";
        document.getElementById("panjang").style.display = "none";
        document.getElementById("lebar").style.display = "none";
        document.getElementById("gambar").src = "https://cdn-web-2.ruangguru.com/landing-pages/assets/7fcc4f4d-3c25-4e01-8686-93a9091df291.png";
    }

}

function resetForm() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasil").innerText = "";
}

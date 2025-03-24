function hitung() {
    let sisi = document.getElementById("sisi").value;
    let pilihan = document.getElementById("pilihan").value;
    let hasil = "";

    if (sisi === "" || sisi <= 0) {
        alert("Isi dulu bang!");
        return;
    }

    if (pilihan === "luas") {
        hasil = "Luas: " + (sisi * sisi);
    } else if (pilihan === "keliling") {
        hasil = "Keliling: " + (4 * sisi);
    }

    document.getElementById("hasil").innerText = hasil;
}

function resetForm() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasil").innerText = "";
}

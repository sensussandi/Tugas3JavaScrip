function buatPilihan() {
  // Mengambil nilai dari input nama dan jumlah pilihan
  const nama = document.getElementById("nama").value;
  const jumlahPilihan = document.getElementById("jumlahPilihan").value;

  // Validasi apakah input nama dan jumlah pilihan telah diisi
  if (!nama || !jumlahPilihan) {
    alert("Silakan isi nama dan jumlah pilihan"); // Jika tidak diisi, tampilkan peringatan
    return; // Hentikan eksekusi jika salah satu tidak diisi
  }

  if (jumlahPilihan <= 0) {
    alert("Jumlah pilihan minimal 1"); // Jika jumlah pilihan kurang dari 1, tampilkan peringatan
    return; // Hentikan eksekusi jika jumlah pilihan
  }

  // Mengambil elemen container untuk menampilkan input pilihan
  const pilihContainer = document.getElementById("pilihContainer");



  // Membuat input untuk setiap pilihan berdasarkan jumlah yang diinput pengguna
  for (let i = 1; i <= jumlahPilihan; i++) {
    const div = document.createElement("div"); // Membuat elemen div baru
    div.innerHTML = `Pilihan ${i}: <input type="text" id="pilihan${i}" placeholder="Masukan pilihan ${i}">`;
    // Menambahkan input teks untuk setiap pilihan, dengan placeholder untuk pilihan
    pilihContainer.appendChild(div); // Menambahkan input teks untuk setiap pilihan
  }

  // Membuat tombol submit untuk menyimpan pilihan
  const submitButton = document.createElement("button");
  submitButton.innerText = "OKE"; // Label tombol
  submitButton.onclick = function () {
    // Menampilkan pilihan pengguna
    tampilkanPilihan(nama, jumlahPilihan);
  };
  pilihContainer.appendChild(submitButton);
}

function tampilkanPilihan(nama, jumlahPilihan) {
const div = document.createElement("div");
  // Mengambil elemen container untuk menampilkan hasil
  const pilihContainer = document.getElementById("pilihContainer");
  const hasilContainer = document.getElementById("hasilContainer");
  hasilContainer.innerHTML = ''; // Bersihkan hasil sebelumnya jika ada
  const pilihan = []; // Array untuk menyimpan pilihan yang dimasukkan

  // Mengambil nilai dari input pilihan
  for (let i = 1; i <= jumlahPilihan; i++) {
    const pilihanInput = document.getElementById(`pilihan${i}`).value; // Mengambil nilai tiap input
    if (!pilihanInput) {
      // Validasi, apakah input pilihan diisi
      alert(`pilihan ${i} belum diisi`); // Jika kosong, tampilkan peringatan
      return; // Hentikan eksekusi
    }
    pilihan.push(pilihanInput); // Tambahkan pilihan ke dalam array
  }

  // Mengganti isi container dengan pesan baru dan opsi pilihan
  pilihContainer.innerHTML = `<h3>Hallo, ${nama}, Pilih satu dari pilihan berikut:</h3>`;

  // Menampilkan pilihan dalam bentuk radio button
  for (let i = 1; i <= jumlahPilihan; i++) {
    const radioButton = document.createElement("input"); // Membuat input radio button
    radioButton.type = "radio"; // Menetapkan tipe radio
    radioButton.name = "pilihan"; // Radio button akan berkelompok dengan nama 'pilihan'
    radioButton.value = pilihan[i - 1]; // Menetapkan nilai pilihan

    const label = document.createElement("label"); // Membuat elemen label
    label.innerText = pilihan[i - 1]; // Menampilkan teks label sesuai pilihan

    pilihContainer.appendChild(radioButton); // Menambahkan radio button ke container
    pilihContainer.appendChild(label); // Menambahkan label ke container
    pilihContainer.appendChild(document.createElement("br")); // Tambahkan line break
    
  }

  // Menambahkan tombol untuk mengonfirmasi pilihan
  const confirmButton = document.createElement("button");
  confirmButton.innerText = "Konfirmasi Pilihan"; // Label tombol
  confirmButton.onclick = function () {
    konfirmasiPilihan(nama, pilihan); // Saat tombol diklik, panggil fungsi konfirmasiPilihan
  };
  pilihContainer.appendChild(confirmButton); // Menambahkan tombol ke container
}

function konfirmasiPilihan(nama, pilihan) {
  // Mengambil nilai dari radio button yang dipilih
  const selected = document.querySelector('input[name="pilihan"]:checked');
  if (!selected) {
    // Validasi apakah ada pilihan yang dipilih
    alert("Silakan pilih salah satu."); // Jika tidak, tampilkan peringatan
    return; // Hentikan eksekusi
  }

  const pilihContainer = document.getElementById('hasilContainer');
  pilihContainer.innerHTML = `<p>Hallo, nama saya ${nama}, saya mempunyai pilihan ${pilihan.join(', ')} dan saya memilih ${selected.value}.</p>`;

}

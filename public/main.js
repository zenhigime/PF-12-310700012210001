// Mengambil elemen HTML dengan id 'btnAdd' dan menyimpannya dalam variabel btnAdd
const btnAdd = document.querySelector("#btnAdd");

// Fungsi untuk menampilkan atau menyembunyikan elemen 'menu'
function addContact() {
  // Mengecek apakah elemen 'menu' memiliki class 'hidden'
  if (menu.classList.contains("hidden")) {
    // Jika ya, maka class 'hidden' dihapus agar menu terlihat
    menu.classList.remove("hidden");
  } else {
    // Jika tidak, maka class 'hidden' ditambahkan agar menu tersembunyi
    menu.classList.add("hidden");
  }
}

// Menambahkan event listener pada tombol 'btnAdd' agar menjalankan fungsi addContact saat diklik
btnAdd.addEventListener("click", addContact);

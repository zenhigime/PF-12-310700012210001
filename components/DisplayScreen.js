// Komponen DisplayScreen menerima props:
// - contacts: daftar kontak yang akan ditampilkan
// - delContact: fungsi untuk menghapus kontak berdasarkan ID
const DisplayScreen = ({ contacts, delContact }) => {
  // Menampilkan data kontak ke konsol (debugging)
  console.log(contacts);

  return (
    // Container utama dengan padding horizontal, latar abu-abu, dan lebar 2 kolom dalam grid responsif
    <div className="px-16 bg-gray-100 md:col-span-2 h-screen">
      {/* Judul section daftar kontak */}
      <h1 className="font-bold text-slate-800">All Contacts</h1>

      {/* Mapping setiap kontak menjadi card */}
      {contacts.map((contact) => (
        // Masing-masing kontak ditampilkan dalam card bergaya tailwind
        <div
          key={contact.id} // Gunakan id sebagai key unik untuk efisiensi React
          className="bg-white rounded-md overflow-hidden shadow p-3 my-3 grid grid-cols-3 gap-3"
        >
          {/* Kolom informasi kontak: nama dan email */}
          <div className="md:col-span-2">
            <h1>
              {contact.firstname} {contact.lastname}
            </h1>
            <span className="text-sm font-bold">{contact.email}</span>
          </div>

          {/* Kolom tombol hapus */}
          <div className="md:col-span-1">
            <button
              className="bg-red-500 text-white p-2 rounded-md hover:scale-125 hover:opacity-80"
              // Saat tombol diklik, jalankan fungsi delContact dengan ID kontak
              onClick={() => delContact(contact.id)}
            >
              Del
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayScreen;

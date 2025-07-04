// Mengimpor PrismaClient dari package @prisma/client
import { PrismaClient } from "@prisma/client"

// Membuat instance Prisma untuk menjalankan query ke database
const prisma = new PrismaClient();

// Mengekspor fungsi handler async sebagai endpoint API default
export default async function handler(req, res) {
    
    // Mengecek method request, hanya izinkan POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' }); // Jika bukan POST, kembalikan status 405
    }

    try {
        // Mengambil nilai 'id' dari body request (berisi ID kontak yang akan dihapus)
        const { id } = req.body; // Tidak perlu parse jika body sudah otomatis JSON

        // Menjalankan query delete dengan Prisma berdasarkan ID
        const delContact = await prisma.contact.delete({
            where: {
              id: id, // Menghapus kontak berdasarkan ID unik
            },
        });

        // Mengirim hasil penghapusan sebagai respon
        res.status(200).json(delContact);

    } catch (err) {
        // Menangani error saat penghapusan, misalnya ID tidak ditemukan
        console.log("from API error", err);
        res.status(400).json({ message: 'Could not delete contact' });
    }
}

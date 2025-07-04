// Mengimpor PrismaClient dari package @prisma/client
import { PrismaClient } from "@prisma/client";

// Membuat instance Prisma untuk melakukan query ke database
const prisma = new PrismaClient();

// Mengekspor fungsi handler async untuk menangani request API
export default async function handler(req, res) {
  // Mengecek apakah metode request adalah POST, jika tidak ditolak
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" }); // Status 405 = Method Not Allowed
  }

  try {
    // Mengambil data dari body request (berisi firstname, lastname, email)
    const contactData = req.body; // Jika Next.js sudah parsing otomatis, tidak perlu JSON.parse

    // Membuat entri baru di tabel "contact" dengan data dari request
    await prisma.contact.create({
      data: contactData,
    });

    // Mengembalikan data yang berhasil disimpan sebagai response JSON
    res.status(200).json(contactData);
  } catch (err) {
    // Menangani error dan menampilkan pesan error ke console
    console.log("from API error", err);

    // Mengirim respons error dengan status 400 jika gagal membuat kontak
    res.status(400).json({ message: "Something went wrong" });
  }
}

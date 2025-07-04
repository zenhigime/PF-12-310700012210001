// Mengimpor PrismaClient dari package @prisma/client
import { PrismaClient } from "@prisma/client";

// Membuat instance Prisma untuk digunakan dalam query ke database
const prisma = new PrismaClient();

// Mengekspor default handler async untuk menangani request API
export default async (req, res) => {
  // Mengambil data dari request body (tidak digunakan dalam kasus ini, tapi tetap diambil)
  const data = req.body;

  try {
    // Mengambil semua data dari tabel "contact" menggunakan Prisma
    const result = await prisma.contact.findMany();

    // Mengirimkan hasil sebagai response JSON dengan status 200 (OK)
    res.status(200).json(result);
  } catch (err) {
    // Menampilkan error di konsol jika terjadi kesalahan saat query
    console.log(err);

    // Mengirimkan respon error ke client dengan status 403 (Forbidden)
    res.status(403).json({ err: "Error occured." });
  }
};

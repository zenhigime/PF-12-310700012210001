// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Mengekspor fungsi default handler untuk menangani request API
export default function handler(req, res) {
  // Mengirim respon HTTP dengan status 200 (OK) dan data JSON { name: 'John Doe' }
  res.status(200).json({ name: 'John Doe' })
}


// Mengimpor file CSS global agar tersedia di semua halaman dan komponen
import '../styles/globals.css'

// Komponen MyApp adalah root-level component di Next.js
// Digunakan untuk menginisialisasi halaman (wrapping semua halaman dengan layout atau context tertentu)
function MyApp({ Component, pageProps }) {
  // Merender komponen halaman yang sedang aktif (Component) dengan props-nya (pageProps)
  return <Component {...pageProps} />
}

// Mengekspor MyApp sebagai komponen default
export default MyApp

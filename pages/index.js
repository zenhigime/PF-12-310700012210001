// Mengimpor PrismaClient untuk berkomunikasi dengan database
import { PrismaClient } from "@prisma/client";

// Mengimpor komponen Head dari Next.js untuk mengatur <head> HTML
import Head from "next/head";

// Mengimpor useState dari React untuk mengelola state
import { useState } from "react";

// Mengimpor komponen untuk menambah dan menampilkan kontak
import AddScreen from "../components/AddScreen";
import DisplayScreen from "../components/DisplayScreen";

// Membuat instance PrismaClient untuk menjalankan query database
const prisma = new PrismaClient();

// Fungsi server-side yang akan dijalankan sebelum halaman dirender
export const getServerSideProps = async () => {
  // Mengambil semua data kontak dari database
  const contacts = await prisma.contact.findMany();
  return {
    props: {
      // Menyediakan data awal kontak sebagai props ke komponen Home
      initialContacts: contacts,
    },
  };
};

// Komponen utama halaman (fungsi Home menerima props initialContacts dari server)
export default function Home({ initialContacts }) {
  // State lokal untuk menyimpan daftar kontak
  const [contacts, setContacts] = useState(initialContacts);

  // Fungsi untuk mengambil ulang data kontak dari endpoint API
  const getContacts = async () => {
    const resp = await fetch("/api/getAllContacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
    });
    const data = await resp.json();
    console.log(data); // Menampilkan data ke console (untuk debugging)
    setContacts(data); // Memperbarui state kontak
  };

  // Fungsi untuk menyimpan kontak baru melalui endpoint API
  const saveContact = async (contact) => {
    const response = await fetch("/api/contacts", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
    });

    if (!response.ok) {
      // Jika terjadi kesalahan saat menyimpan kontak
      throw new Error(response.statusText);
    }

    await getContacts(); // Mengambil data terbaru setelah menyimpan
    return await response.json();
  };

  // Fungsi untuk menghapus kontak berdasarkan ID
  const delContact = async (contactId) => {
    console.log("contact to delete: " + contactId); // Debug: menampilkan ID kontak yang akan dihapus
    if (window.confirm("Do you want to delete this food?")) {
      // Konfirmasi sebelum menghapus
      await fetch("/api/deleteContact", {
        method: "POST",
        body: JSON.stringify({ id: contactId }),
        headers: {
          "Content-Type": "application/json; charset=utf8",
        },
      });
    }

    await getContacts(); // Mengambil data terbaru setelah penghapusan
  };

  return (
    <div className="">
      {/* Bagian head halaman */}
      <Head>
        <title>Contact App</title>
        <meta name="description" content="Created by Connelblaze" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Layout utama dengan 3 kolom di layar besar */}
      <div className="grid md:grid-cols-3">
        {/* Komponen untuk menambahkan kontak baru */}
        <AddScreen
          contacts={contacts}
          AddContactFormProps={async (data, e) => {
            try {
              await saveContact(data); // Simpan kontak baru
              e.target.reset(); // Reset form setelah submit
            } catch (error) {
              console.log(error); // Menangani error saat submit
            }
          }}
        />

        {/* Komponen untuk menampilkan daftar kontak */}
        <DisplayScreen contacts={contacts} delContact={delContact} />
      </div>
    </div>
  );
}

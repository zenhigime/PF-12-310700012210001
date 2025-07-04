// Mengimpor hook useForm dari library react-hook-form untuk mempermudah validasi dan pengelolaan form
import { useForm } from "react-hook-form";

// Komponen kecil untuk menampilkan pesan error pada input form
const FormError = ({ errorMessage }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

// Komponen utama AddScreen menerima props:
// - contacts: daftar kontak yang sudah ada
// - AddContactFormProps: fungsi yang akan dijalankan saat form disubmit
const AddScreen = ({ contacts, AddContactFormProps }) => {
  // Menggunakan useForm untuk mendaftarkan input dan mengelola validasi form
  const { register, handleSubmit, errors } = useForm();

  console.log("The addCContact", AddContactFormProps); // Log props ke konsol untuk debugging

  return (
    // Membungkus seluruh form dengan handleSubmit dari react-hook-form
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(AddContactFormProps)}
    >
      {/* Container utama form */}
      <div className="md:col-span-1 md:flex md:justify-start flex-col bg-slate-900 h-screen text-white px-3">
        <h1 className="font-bold">Add a Contact</h1>

        {/* Input: Firstname */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="text"
            placeholder="firstname"
            name="firstname"
            {...register("firstname", { required: true })} // Register input dengan validasi "required"
          />
          {/* Error handling dinonaktifkan (komentar) */}
          {/* {errors.firstName && (
                        <FormError errorMessage="First Name is required" />
                    )} */}
        </div>

        {/* Input: Lastname */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="lastname"
            name="lastname"
            {...register("lastname", { required: true })} // Validasi wajib
          />
          {/* Error handling dinonaktifkan */}
          {/* {errors.lastName && (
                        <FormError errorMessage="Last Name is required" />
                    )} */}
        </div>

        {/* Input: Email */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="email"
            placeholder="email"
            name="email"
            {...register("email", { required: true })} // Validasi wajib
          />
          {/* Error handling dinonaktifkan */}
          {/* {errors.email && (
                        <FormError errorMessage="Email is required" />
                    )} */}
        </div>

        {/* Tombol submit */}
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            id="btnAdd"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
      {/* <Script src="/main.js" strategy='lazyOnload' /> */}
    </form>
  );
};

export default AddScreen;

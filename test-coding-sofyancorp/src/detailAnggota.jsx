import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function DetailAnggota() {
  const [anggota, setAnggota] = useState([]);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/anggota/" + id);
      console.log(result.data.anggota);
      setAnggota(result.data.anggota);
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Detail Anggota
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-2">
              <label htmlFor="name" className="">
                Nama
              </label>
              <input
                id="name"
                name="name"
                type="text"
                disabled
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={anggota.name}
              />
            </div>
            <div className="py-2">
              <label htmlFor="email-address" className="">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                disabled
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={anggota.email}
              />
            </div>
            <div className="py-2">
              <label htmlFor="phoneNumber" className="">
                No HP
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                disabled
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={anggota.phoneNumber}
              />
            </div>
            <div className="py-2">
              <label htmlFor="address" className="">
                Alamat
              </label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                disabled
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={anggota.address}
              />
            </div>
          </div>
          <div>
            <Link
              to={`/update/${anggota.id}`}
              type="submit"
              className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-gray-500 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-gray-500 mb-4"
            >
              Edit
            </Link>
            <Link
              to="/"
              type="submit"
              className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
            >
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailAnggota;

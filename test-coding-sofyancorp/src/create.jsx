import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: ""
  });

  // handle form field
  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  //function submit
  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://127.0.0.1:8000/api/anggota/create",
        userField
      );
      console.log(responce);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Tambah User
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-2">
              <label htmlFor="name" className="">
                Nama
              </label>
              <input onChange={e => changeUserFieldHandler(e)}
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nama"
              />
            </div>
            <div className="py-2">
              <label htmlFor="email-address" className="">
                Email address
              </label>
              <input onChange={e => changeUserFieldHandler(e)}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="py-2">
              <label htmlFor="phoneNumber" className="">
                No HP
              </label>
              <input onChange={e => changeUserFieldHandler(e)}
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nomor HP"
              />
            </div>
            <div className="py-2">
              <label htmlFor="address" className="">
                Alamat
              </label>
              <input onChange={e => changeUserFieldHandler(e)}
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Alamat Rumah"
              />
            </div>
          </div>
          <div>
            <button 
              type="submit"
              className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500" onClick={e => onSubmitChange(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;

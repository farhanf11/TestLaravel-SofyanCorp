import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Anggota() {
  const [anggotaData, setAnggotaData] = useState([]);
  // get data anggota
  useEffect(() => {
    axios
    .get(
        `http://127.0.0.1:8000/api/anggota`,
      {}
    )
    .then((response) => {
        setAnggotaData(response.data.result); 
        console.log(response.data.result);
    });
  }, []);

  // function delete 
  const handleDelete=async(id)=>{
    console.log(id);
    await axios.delete("http://127.0.0.1:8000/api/anggota/delete/"+id);
    const newAnggotaData=anggotaData.filter((item)=>{
        return(
            item.id !==id
        )
    })
    setAnggotaData(newAnggotaData);
  }
  return (
    <div>
      <div className="">
        {/* Table */}
        <div className="overflow-hidden border rounded-lg lg:px-80 md:px-20 content-center">
          <div className="card-header p-3 flex justify-between">
            <h3 className="text-gray-800">Anggota</h3>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
              <Link
                className="font-semibold text-white py-2 rounded-md bg-blue-500 p-5"
                to="/create"
              >
                Create
              </Link>
            </td>
          </div>
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        No HP
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Alamat
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* get array data */}
                    {anggotaData?.map((anggota, i) => {
                      return (
                        <tr key={i}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {i+1}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {anggota.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {anggota.email}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {anggota.phoneNumber}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {anggota.address}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <Link
                              className="text-green-500 hover:text-green-700"
                              to={`/anggota/${anggota.id}`}
                            >
                              Edit
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={()=>handleDelete(anggota.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Anggota;

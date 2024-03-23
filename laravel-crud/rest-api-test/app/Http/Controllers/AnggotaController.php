<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\anggota;
use App\Http\Requests\AnggotasStoreRequest;

class AnggotaController extends Controller
{
    public function index (){
        $anggotas = Anggota::all();

        return response()->json([
            'result' => $anggotas
        ],200);
    }

    public function store(AnggotasStoreRequest $request){
        try{
            //create
            Anggota::create([
                'name' => $request->name,
                'email' => $request->email,
                'phoneNumber' => $request->phoneNumber,
                'address' => $request->address,
            ]);
            return response()->json([
                'message' => "Anggota Telah Ditambahkan!"
            ], 200);
        } catch (\Exception $e){
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    public function show($id){
        //detail anggota
        $anggotas = Anggota::find($id);

        if (!$anggotas){
            return response()->json([
                'message'=>'User not found'
            ], 404);
        }

        return response()->json([
            'anggota' => $anggotas
        ],200);
    }

    public function update(AnggotasStoreRequest $request, $id)
    {
        try {
            // Find User
            $anggotas = Anggota::find($id);
            if(!$anggotas){
                return response()->json([
                  'message'=>'User Not Found.'
                ],404);
              }
       
            //echo "request : $request->image";
            $anggotas->name = $request->name;
            $anggotas->email = $request->email;
       
            // Update User
            $anggotas->save();
       
            // Return Json Response
            return response()->json([
                'message' => "User successfully updated."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }

    public function delete($id)
    {
        $anggotas = Anggota::find($id);
        if(!$anggotas){
          return response()->json([
             'message'=>'User Not Found.'
          ],404);
        }
         
        // Delete User
        $anggotas->delete();
       
        // Return Json Response
        return response()->json([
            'message' => "Berhasil menghapus anggota."
        ],200);
    }    
}
 
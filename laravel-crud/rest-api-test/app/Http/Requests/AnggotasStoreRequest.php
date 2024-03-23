<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AnggotasStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if(request()->isMethod('post')){
            return [
                'name' => 'required|string|max:258',
                'email' => 'required|string',
                'phoneNumber' => 'required|string',
                'address' => 'required|string|max:258',
            ];
        } else {
            return [
                'name' => 'required|string|max:258',
                'email' => 'required|string',
                'phoneNumber' => 'required|string',
                'address' => 'required|string|max:258',
            ];
        }
    }

    public function messages()
    {
        if(request()->isMethod('post')){
            return [
                'name.required' => 'Name is required!',
                'email.required' => 'Email is required!',
                'phoneNumber.required' => 'Phone number is required!',
                'address.required' => 'Address is required!',
            ];
        } else {
            return [
                'name.required' => 'Name is required!',
                'email.required' => 'Email is required!',
                'phoneNumber.required' => 'Phone number is required!',
                'address.required' => 'Address is required!',
            ];
        }
    }
}

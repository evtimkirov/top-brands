<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteBrandRequest;
use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use App\Models\Brand;
use App\Models\Country;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $countryCode = strtoupper($request->header('CF-IPCountry', 'DEFAULT'));

        return response()->json(Brand::getBrandsByCountryCode($countryCode));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreBrandRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreBrandRequest $request)
    {
        $jsonResponse = [
            'status' => 422,
            'message' => 'Something went wrong.',
        ];

        try {
            $brand = Brand::create($request->only('brand_name', 'brand_image', 'rating'));

            $jsonResponse['status'] = 200;
            $jsonResponse['message'] = 'Brand created successfully.';
            $jsonResponse['data'] = $brand;
        } catch (\Exception $exception) {
            $jsonResponse['message'] = 'An error appear when trying to create brand.';
        }

        return response()->json($jsonResponse, $jsonResponse['status']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(['data' => Brand::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBrandRequest $request, string $id)
    {
        $jsonResponse = [
            'status' => 422,
            'message' => 'Something went wrong.',
        ];
;
        try {
            $brandData = array_filter(
                $request->only('brand_name', 'brand_image', 'rating'),
                fn ($value) => !is_null($value)
            );

            $brand = Brand::find($id);
            $brand->fill($brandData);
            $brand->save();

            $jsonResponse['status'] = 200;
            $jsonResponse['message'] = 'Brand updated successfully';
            $jsonResponse['data'] = $brand->fresh();
        } catch (\Exception $exception) {
            $jsonResponse['message'] = 'There was an error while trying to make brand changes.';
        }

        return response()->json($jsonResponse, $jsonResponse['status']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteBrandRequest $request, string $id)
    {
        $jsonResponse = [
            'status' => 422,
            'message' => 'Something went wrong.',
        ];

        try {
            $brand = Brand::find($id);
            $brand->delete();

            $jsonResponse['status'] = 200;
            $jsonResponse['message'] = 'The brand has been successfully deleted.';
        } catch (\Exception $exception) {
            $jsonResponse['message'] = 'There was an error while trying to delete the brand.';
        }

        return response()->json($jsonResponse, $jsonResponse['status']);
    }
}

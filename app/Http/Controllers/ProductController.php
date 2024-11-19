<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('dashboard.products.edit')->with('product',Product::first());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.products.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                // Store each image in the 'public/uploads' directory
                $path = $image->store('uploads');
                $imagePaths[] = $path;
            }
        }
    
        // Create a new Product instance and save data
        $product = new Product();
        $product->main_title = $request->main_title;
        $product->secand_title = $request->secand_title;
        $product->descount_price = $request->descount_price;
        $product->price = $request->price;
        $product->stars = $request->stars;
        $product->rate = $request->rate;
        $product->review = $request->review;
        $product->description = $request->description;
        $product->images = json_encode($imagePaths);  // Save image paths as JSON
    
        $product->save();
    
        return back()->with('success', 'Product created successfully');        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return view('dashboard.products.edit')->with('product',Product::first());

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Find the product by ID
        $product = Product::findOrFail($id);
    
    
        // Update all fields
        $product->main_title = $request->main_title;
        $product->secand_title = $request->secand_title;
        $product->price = $request->price;
        $product->descount_price = $request->descount_price;
        $product->stars = $request->stars;
        $product->rate = $request->rate;
        $product->review = $request->review;
        $product->description = $request->description; // CKEditor content
        $product->features = $request->features; // CKEditor content
        $product->shipping = $request->shipping; // CKEditor content
        $product->trial = $request->trial; // CKEditor content

        // Handle multiple image uploads if new images are provided
        if ($request->hasFile('images')) {
            $imagePaths = [];
    
            // Remove old images if any
            if ($product->images) {
                foreach (json_decode($product->images) as $oldImage) {
                    Storage::disk('public')->delete($oldImage);
                }
            }
    
            // Upload new images
            foreach ($request->file('images') as $image) {
                $path = $image->store('product'); // Save each image in 'public/uploads'
                $imagePaths[] = $path;
            }
    
            // Save the new image paths as JSON in the 'images' column
            $product->images = json_encode($imagePaths);
        }
    
        // Save the product with updated information
        $product->save();
    
        // Redirect back with a success message
        return redirect()->route('products.index')->with('success', 'تم تحديث المنتج بنجاح');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}

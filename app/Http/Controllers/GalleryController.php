<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    // Display a listing of the resource
    public function index()
    {
        $galleries = Gallery::all();
        return view('dashboard.galleries.index', compact('galleries'));
    }

    // Show the form for creating a new resource
    public function create()
    {
        return view('dashboard.galleries.create');
    }

    // Store a newly created resource in storage
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'image' => 'required',
        ]);

        // Handle image upload
        $path = $request->file('image')->store('galleries');

        // Create gallery record
        Gallery::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $path,
        ]);

        return redirect()->route('galleries.index')->with('success', 'Gallery created successfully.');
    }

    // Show the form for editing the specified resource
    public function edit(Gallery $gallery)
    {
        return view('dashboard.galleries.edit', compact('gallery'));
    }

    // Update the specified resource in storage
    public function update(Request $request, Gallery $gallery)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
        ]);

        // Handle image upload if a new image is uploaded
        if ($request->hasFile('image')) {
            // Delete the old image
            Storage::disk('public')->delete($gallery->image);

            // Store the new image
            $path = $request->file('image')->store('galleries');
            $gallery->image = $path;
        }

        // Update the other fields
        $gallery->title = $request->title;
        $gallery->description = $request->description;
        $gallery->save();

        return redirect()->route('galleries.index')->with('success', 'Gallery updated successfully.');
    }

    // Remove the specified resource from storage
    public function destroy(Gallery $gallery)
    {
        // Delete the image from storage
        Storage::disk('public')->delete($gallery->image);

        // Delete the gallery record
        $gallery->delete();

        return redirect()->route('galleries.index')->with('success', 'Gallery deleted successfully.');
    }
}

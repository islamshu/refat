<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partner;
use Illuminate\Support\Facades\Storage;

class PartnerController extends Controller
{
    // Display a listing of the resource
    public function index()
    {
        $partners = Partner::all();
        return view('dashboard.partners.index', compact('partners'));
    }

    // Show the form for creating a new resource
    public function create()
    {
        return view('dashboard.partners.create');
    }

    // Store a newly created resource in storage
    public function store(Request $request)
    {
        $request->validate([
          
            'image' => 'required',
        ]);

        // Handle image upload
        $path = $request->file('image')->store('partners');

        // Create partner record
        Partner::create([
           
            'image' => $path,
        ]);

        return redirect()->route('partners.index')->with('success', 'Partner created successfully.');
    }

    // Show the form for editing the specified resource
    public function edit(Partner $partner)
    {
        return view('dashboard.partners.edit', compact('partner'));
    }

    // Update the specified resource in storage
    public function update(Request $request, Partner $partner)
    {
        

        // Handle image upload if a new image is uploaded
        if ($request->hasFile('image')) {
            // Delete the old image
            Storage::disk('public')->delete($partner->image);

            // Store the new image
            $path = $request->file('image')->store('partners');
            $partner->image = $path;
        }

        // Update the other fields
    
        $partner->save();

        return redirect()->route('partners.index')->with('success', 'Partner updated successfully.');
    }

    // Remove the specified resource from storage
    public function destroy(Partner $partner)
    {
        // Delete the image from storage
        Storage::disk('public')->delete($partner->image);

        // Delete the partner record
        $partner->delete();

        return redirect()->route('partners.index')->with('success', 'Partner deleted successfully.');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ReviewController extends Controller
{
    // Display a listing of the resource
    public function index()
    {
        $reviews = Review::all();
        return view('dashboard.review.index', compact('reviews'));
    }

    // Show the form for creating a new resource
    public function create()
    {
        return view('dashboard.review.create');
    }

    // Store a newly created resource in storage
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'date' => 'required|date',
            'star' => 'required|integer|min:1|max:5',
            'text' => 'required|string',
        ]);
        $data = $request->all();

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('reviews');
            $data['image'] = $imagePath;
        }
    
        Review::create($data);

        return redirect()->route('reviews.index')->with('success', 'تمت إضافة التقييم بنجاح.');
    }

    // Show the form for editing the specified resource
    public function edit(Review $review)
    {
        return view('dashboard.review.edit', compact('review'));
    }

    // Update the specified resource in storage
    public function update(Request $request, Review $review)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'date' => 'required|date',
            'star' => 'required|integer|min:1|max:5',
            'text' => 'required|string',

        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($review->image && \Storage::exists('public/' . $review->image)) {
                \Storage::delete('public/' . $review->image);
            }
    
            $imagePath = $request->file('image')->store('reviews');
            $data['image'] = $imagePath;
        }
    
        $review->update($data);
    
        return redirect()->route('reviews.index')->with('success', 'تم تعديل التقييم بنجاح.');
    }

    // Remove the specified resource from storage
    public function destroy(Review $review)
    {
        $review->delete();

        return redirect()->route('reviews.index')->with('success', 'تم حذف التقييم بنجاح.');
    }
}

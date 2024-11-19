<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

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

        Review::create($request->all());

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

        $review->update($request->all());

        return redirect()->route('reviews.index')->with('success', 'تم تعديل التقييم بنجاح.');
    }

    // Remove the specified resource from storage
    public function destroy(Review $review)
    {
        $review->delete();

        return redirect()->route('reviews.index')->with('success', 'تم حذف التقييم بنجاح.');
    }
}

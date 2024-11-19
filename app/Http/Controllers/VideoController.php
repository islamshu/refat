<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{
    // Display a listing of the resource
    public function index()
    {
        $videos = Video::all();
        return view('dashboard.videos.index', compact('videos'));
    }

    // Show the form for creating a new resource
    public function create()
    {
        return view('dashboard.videos.create');
    }

    // Store a newly created resource in storage
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'video' => 'required', // Limit video size to 20MB
        ]);

        // Handle video upload
        $path = $request->file('video')->store('videos');

        // Create video record
        Video::create([
            'title' => $request->title,
            'video' => $path,
        ]);

        return redirect()->route('videos.index')->with('success', 'تم إضافة الفيديو بنجاح.');
    }

    // Show the form for editing the specified resource
    public function edit(Video $video)
    {
        return view('dashboard.videos.edit', compact('video'));
    }

    // Update the specified resource in storage
    public function update(Request $request, Video $video)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'video' => 'nullable',
        ]);

        // Handle video upload if a new video is uploaded
        if ($request->hasFile('video')) {
            // Delete the old video
            Storage::disk('public')->delete($video->video);

            // Store the new video
            $path = $request->file('video')->store('videos', 'public');
            $video->video = $path;
        }

        // Update the title
        $video->title = $request->title;
        $video->save();

        return redirect()->route('videos.index')->with('success', 'تم تعديل الفيديو بنجاح.');
    }

    // Remove the specified resource from storage
    public function destroy(Video $video)
    {
        // Delete the video from storage
        Storage::disk('public')->delete($video->video);

        // Delete the video record
        $video->delete();

        return redirect()->route('videos.index')->with('success', 'تم حذف الفيديو بنجاح.');
    }
}

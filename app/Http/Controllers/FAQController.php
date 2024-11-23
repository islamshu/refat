<?php
namespace App\Http\Controllers;

use App\Models\FAQ;
use Illuminate\Http\Request;

class FAQController extends Controller
{
    public function index()
    {
        $faqs = FAQ::all();
        return view('dashboard.faqs.index', compact('faqs'));
    }

    public function create()
    {
        return view('dashboard.faqs.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
        ]);

        FAQ::create($request->all());

        return redirect()->route('faqs.index')->with('success', 'تمت إضافة السؤال بنجاح.');
    }

    public function edit(FAQ $faq)
    {
        return view('dashboard.faqs.edit', compact('faq'));
    }

    public function update(Request $request, FAQ $faq)
    {
        $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
        ]);

        $faq->update($request->all());

        return redirect()->route('faqs.index')->with('success', 'تم تحديث السؤال بنجاح.');
    }

    public function destroy(FAQ $faq)
    {
        $faq->delete();
        return redirect()->route('faqs.index')->with('success', 'تم حذف السؤال بنجاح.');
    }
}

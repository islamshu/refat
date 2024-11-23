@extends('layouts.master')

@section('content')
<div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-12 mb-2">
                <h3 class="content-header-title">{{ __('تعديل التقييم') }}</h3>
            </div>
        </div>
        <div class="content-body">
            <section>
                <div class="card">
                    <div class="card-body">
                        @include('dashboard.inc.alerts')

                        <form action="{{ route('reviews.update', $review->id) }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="form-group">
                                <label for="image">الصورة</label>
                                <input type="file" class="form-control" id="image" name="image" accept="image/*">
                                <img src="{{asset('uploads/'.$review->image)}}" width="60" height="60" alt="">
                            </div>
                            
                            <div class="form-group">
                                <label for="name">{{ __('الاسم') }}</label>
                                <input type="text" name="name" id="name" class="form-control" value="{{ $review->name }}" required>
                            </div>
                            <div class="form-group">
                                <label for="date">{{ __('التاريخ') }}</label>
                                <input type="date" name="date" id="date" class="form-control" value="{{ $review->date }}" required>
                            </div>
                            <div class="form-group">
                                <label for="star">{{ __('التقييم (نجوم)') }}</label>
                                <input type="number" name="star" id="star" class="form-control" value="{{ $review->star }}" min="1" max="5" required>
                            </div>
                            <div class="form-group">
                                <label for="text">{{ __('النص') }}</label>
                                <textarea name="text" id="text" class="form-control" rows="4" required>{{ $review->text }}</textarea>
                            </div>
                            <button type="submit" class="btn btn-success">{{ __('تحديث') }}</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
@endsection

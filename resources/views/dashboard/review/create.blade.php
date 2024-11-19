@extends('layouts.master')

@section('content')
<div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-12 mb-2">
                <h3 class="content-header-title">{{ __('إضافة تقييم جديد') }}</h3>
            </div>
        </div>
        <div class="content-body">
            <section>
                <div class="card">
                    <div class="card-body">
                        @include('dashboard.inc.alerts')

                        <form action="{{ route('reviews.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="name">{{ __('الاسم') }}</label>
                                <input type="text" name="name" id="name" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="date">{{ __('التاريخ') }}</label>
                                <input type="date" name="date" id="date" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="star">{{ __('التقييم (نجوم)') }}</label>
                                <input type="number" name="star" id="star" class="form-control" min="1" max="5" required>
                            </div>
                            <div class="form-group">
                                <label for="text">{{ __('النص') }}</label>
                                <textarea name="text" id="text" class="form-control" rows="4" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-success">{{ __('حفظ') }}</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
@endsection

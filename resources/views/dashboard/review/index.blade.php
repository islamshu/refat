@extends('layouts.master')

@section('content')
<div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-12 mb-2">
                <h3 class="content-header-title">{{ __('التقييمات') }}</h3>
            </div>
        </div>
        <div class="content-body">
            <section>
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{ __('قائمة التقييمات') }}</h4>
                        <a href="{{ route('reviews.create') }}" class="btn btn-primary">{{ __('إضافة تقييم جديد') }}</a>
                    </div>
                    <div class="card-body">
                        @include('dashboard.inc.alerts')

                        <table class="table">
                            <thead>
                                <tr>
                                    <th>{{ __('الاسم') }}</th>
                                    <th>{{ __('التاريخ') }}</th>
                                    <th>{{ __('التقييم (نجوم)') }}</th>
                                    <th>{{ __('النص') }}</th>
                                    <th>{{ __('الإجراءات') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($reviews as $review)
                                    <tr>
                                        <td>{{ $review->name }}</td>
                                        <td>{{ $review->date }}</td>
                                        <td>{{ $review->star }} / 5</td>
                                        <td>{{ $review->text }}</td>
                                        <td>
                                            <a href="{{ route('reviews.edit', $review->id) }}" class="btn btn-warning">{{ __('تعديل') }}</a>
                                            <form action="{{ route('reviews.destroy', $review->id) }}" method="POST" style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger" onclick="return confirm('{{ __('هل أنت متأكد؟') }}')">{{ __('حذف') }}</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
@endsection

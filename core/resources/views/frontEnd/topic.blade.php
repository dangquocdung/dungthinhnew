@extends('frontEnd.layout')

@section('content')

<div id="xem-pdf">
    <img src="{{ URL::to('uploads/topics/'.$Topic->photo_file) }}" />
</div>

@endsection

@extends('frontEnd.layout')

@section('content')
<div id="container"/>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").flipBook({
            pdfUrl:"/uploads/topics/{{ $Filename }}",
        });

    })
</script>

@endsection

@extends('frontEnd.layout-2')

@section('content')
<div id="container"/>

<script type="text/javascript">
    $(document).ready(function () {
        $("#container").flipBook({
            pdfUrl:"/uploads/topics/{{ $filename }}",
        });

    })
</script>

@endsection

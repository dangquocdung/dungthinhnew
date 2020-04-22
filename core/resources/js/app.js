// require('./flipbook/jquery.js');
// require('./flipbook/jquery-ui.min.js');
// require('./flipbook/flipbook.min.js');

$(document).ready(function() {
    $("#xem-pdf").flipBook({
        pdfUrl: "/uploads/topics/{{ $Topic->attach_file }}"
    });

})
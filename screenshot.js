/*

HTML to Canvas

*/

// document.getElementById('sort-table').onclick = function() {
//     html2canvas(this, {
//         onrendered: draw_content
//     });
// }

// function draw_content(canvas) {
//     var img = canvas.toDataURL('image/png', 1.0);
//     document.getElementById('can-img').src = img;
// }

document.getElementById('cap-data').onclick = function() {

    this.width = 1920 + 'px';
    this.height = 800 + 'px';
    this.style.background = 'white';
    this.style.paddingBottom = 30 + 'px';
    domtoimage.toPng(this)
        .then(function(dataUrl) {
            document.getElementById('can-img').src = dataUrl;
        })
        .catch(function(error) {
            console.error('oops, something went wrong!', error);
        });

}

jQuery(document).ready(function($) {

    $('#save-image').on('click', function() {

        var url = 'export.php';

        $.ajax({
            type: 'POST',
            url: url,
            data: {
                'image': document.getElementById('can-img').src,
            },
            success: function(response) {
                console.log(response + " Success !");
            },
        });

    });

});
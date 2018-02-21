function more() {
    $('.people').html(function(i, val) {
        if (val != 6) {
            return val * 1 + 1;
        }
    });
}

function less() {
    $('.people').html(function(i, val) {
        if (val != 2) {
            return val * 1 - 1;
        }
    });
}


$(document).ready(function() {
    $('#more').on('click', more);
    $('#less').on('click', less);
});

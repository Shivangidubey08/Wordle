$(function () {
    var $write = $('#write');

    $('#keyboard li').click(function () {
        var $this = $(this),
            character = $this.html();

        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();

            $write.html(html.substr(0, html.length - 1));
            return false;
        }
        if ($this.hasClass('return')) character = "\n";

        // Add the character
        $write.html($write.html() + character);
    });
});
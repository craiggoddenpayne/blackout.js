/*
Copyright (c) 2013 Craig Payne[The MIT License (MIT)]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function ($) {
    $.fn.blackout = function (colour, opacity) {
        var element = $(this);
        var blackoutId = element.attr("id") + "_blackout";
        element.append("<div id='" + blackoutId + "'></div>");

        $(window).resize(function () {
            var blackout = $("#" + blackoutId);
            blackout.css("position", "absolute");
            blackout.css("background-color", colour);
            blackout.css("top", element.position().top);
            blackout.css("left", element.position().left);
            blackout.css("height", element.height());
            blackout.css("width", function () { return element.width() });
        });

        var blackout = $("#" + blackoutId);
        blackout.css("position", "absolute");
        blackout.css("background-color", colour);
        blackout.css("top", element.position().top);
        blackout.css("left", element.position().left);
        blackout.css("height", element.height());
        blackout.css("width", function () { return element.width() });
        if (opacity > 1)
            opacity = opacity / 100;

        blackout.fadeTo(0, opacity);
    };

    $.fn.unblackout = function () {
        var element = $(this);
        var blackoutId = element.attr("id") + "_blackout";
        $("#" + blackoutId).remove();
    };
})(jQuery);
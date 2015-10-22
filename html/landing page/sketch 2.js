(function () {
    $(function () {
        var bg, dark, light;
        light = $('[href="#light"]');
        dark = $('[href="#dark"]');
        bg = $('body');
        light.mouseover(function (ev) {
            bg.css('background-color', '#fff');
            return ev.preventDefault();
        });
        return dark.mouseover(function (ev) {
            bg.css('background-color', '#000');
            return ev.preventDefault();
        });
    });
}.call(this));
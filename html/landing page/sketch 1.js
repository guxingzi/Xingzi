(function () {
    $(function () {
        var bg, dark, light;
        light = $('[href="#light"]');
        dark = $('[href="#dark"]');
        bg = $('body');
        light.mouseover(function (ev) {
            bg.css('background-color', '#FF2151');
            return ev.preventDefault();
        });
        return dark.mouseover(function (ev) {
            bg.css('background-color', '#FFC629');
            return ev.preventDefault();
        });
    });
}.call(this));
(function(window) {
    'use strict';

    if (!window.Prim.svg)
        return;

    function copyAttributes(el, attributes) {
        for (var key in attributes)
            if(attributes.hasOwnProperty(key))
                el.setAttribute(key, attributes[key]);
    }

    var svgCanvas = function(placeholder, width, height) {
        this.canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var attributes = { width: width, height: height, viewBox:'0 0 '+width+' '+height, xmlns:'http://www.w3.org/2000/svg', version:'1.2', baseProfile:'tiny' };
        copyAttributes(this.canvas, attributes);
        placeholder.appendChild(this.canvas);
    };

    svgCanvas.type = 'svg';

    svgCanvas.prototype.rect  = function (x, y, width, height, className) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        var attributes = { x: x, y: y, width: width, height: height, 'class': className };
        copyAttributes(el, attributes);
        this.canvas.appendChild(el);
        return el;
    };

    window.Prim = svgCanvas;
    window.Prim.svg = true; // Put it back
}(window));

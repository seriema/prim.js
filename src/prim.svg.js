(function(window) {
    'use strict';

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

    svgCanvas.prototype.rect  = function (x, y, w, h, fillColor, strokeWidth) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        var attributes = { x:x, y:y, width:w, height:h, fill:'none', stroke: fillColor || 'blue', 'stroke-width': strokeWidth || '2' };
        copyAttributes(el, attributes);
        this.canvas.appendChild(el);
        return el;
    };

    var old = window.Prim;
    window.Prim = svgCanvas;
    window.Prim.svg = svgCanvas;
    window.Prim.vml = old;
}(window));

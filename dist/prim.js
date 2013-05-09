/*! prim v0.1.0 2013-05-09
* Copyright (c) 2013 John-Philip Johansson (@seriemajp)
* https://github.com/seriema/prim.js
* Licensed MIT */
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

    svgCanvas.prototype.rect  = function (x, y, w, h, fillColor, strokeWidth) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        var attributes = { x:x, y:y, width:w, height:h, fill:'none', stroke: fillColor || 'blue', 'stroke-width': strokeWidth || '2' };
        copyAttributes(el, attributes);
        this.canvas.appendChild(el);
        return el;
    };

    window.Tinyvector = svgCanvas;
}(window));

(function(window) {
    'use strict';

    document.namespaces.add('v','urn:schemas-microsoft-com:vml');

    var vmlCanvas = function (placeholder) {
        this.canvas = placeholder;
        // TODO: add width
        // TODO: add height
    };

    vmlCanvas.prototype.rect  = function (x, y, w, h) {
        var frag = document.createDocumentFragment();
        var el = frag.appendChild(document.createElement('v:rect'));
        el.style.left=x;
        el.style.top=y;
        el.style.width=w;
        el.style.height=h;
        el.style.position='absolute';
        el.style.behavior='url(#default#VML)';
        el.style.display='inline-block';
        // TODO: add fillColor
        // TODO: add strokeWidth

        this.canvas.appendChild(frag);
        return el;
    };

    window.Tinyvector = vmlCanvas;
}(window));
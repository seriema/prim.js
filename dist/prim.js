/*! prim v0.1.0 2013-05-14
* Copyright (c) 2013 John-Philip Johansson (@seriemajp)
* https://github.com/seriema/prim.js
* Licensed MIT */
(function(window) {
    'use strict';

    var ns = 'http://www.w3.org/2000/svg';

    window.Prim = { svg: !!document.createElementNS && !!document.createElementNS(ns, 'svg').createSVGRect };
}(window));

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

(function(window, namespaces) {
    'use strict';

    if (window.Prim.svg)
        return;

    if (namespaces)
        namespaces.add('v','urn:schemas-microsoft-com:vml');

    var vmlCanvas = function (placeholder) {
        this.canvas = placeholder;
        // TODO: add width
        // TODO: add height
    };

    vmlCanvas.type = 'vml';

    vmlCanvas.prototype.rect  = function (x, y, width, height) {
        var frag = document.createDocumentFragment();
        var el = frag.appendChild(document.createElement('v:rect'));
        el.style.left = x;
        el.style.top = y;
        el.style.width = width;
        el.style.height = height;
        el.style.position = 'absolute';
        el.style.behavior = 'url(#default#VML)';
        el.style.display = 'inline-block';
        // TODO: add fillColor
        // TODO: add strokeWidth

        this.canvas.appendChild(frag);
        return el;
    };

    window.Prim = vmlCanvas;
    window.Prim.svg = false; // Put it back
}(window, document.namespaces));
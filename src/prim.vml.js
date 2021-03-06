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
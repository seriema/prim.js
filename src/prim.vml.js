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
        return frag;
    };

    window.Prim = vmlCanvas;
}(window));
(function(window) {
    'use strict';

    var ns = 'http://www.w3.org/2000/svg';

    window.Prim = { svg: !!document.createElementNS && !!document.createElementNS(ns, 'svg').createSVGRect };
}(window));

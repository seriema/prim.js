[![Build Status](https://travis-ci.org/seriema/prim.js.png?branch=master)](https://travis-ci.org/seriema/prim.js)

# prim.js

Microscopic-sized vector library for SVG and VML.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/seriema/prim.js/master/dist/prim.min.js
[max]: https://raw.github.com/seriema/prim.js/master/dist/prim.js

In your web page:

```html
<div id="canvas"></div>

<script src="../src/prim.svg.js"></script>
<script>
    var canvas = document.getElementById('canvas');
    var c = new Prim(canvas, 500, 500);
    c.rect(50,50, 200,200);
</script>
```

## Release History
v0.2.0 - 13 may 2013 - update to API
v0.1.0 - 9 may 2013 - first public release
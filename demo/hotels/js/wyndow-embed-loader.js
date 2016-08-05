window.wyndow = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    w = window.wyndow || {};
  if (d.getElementById(id)) return w;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://wyndow.com/embed.js';
  fjs.parentNode.insertBefore(js, fjs);
  w._e = [];
  w.ready = function(f) {
    w._e.push(f);
  };
  return w;
}(document, 'script', 'wyndow-wjs'));

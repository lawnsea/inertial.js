(function() {
  var body, motionTemplate, onMotion, print, printTemplate, r, t, tLastMotionEvent, v, x, y;
  x = 0;
  y = 0;
  r = 0;
  v = 0;
  t = Date.now();
  tLastMotionEvent = null;
  body = $('body');
  printTemplate = _.template('<span><%= s %></span>');
  print = function(s) {
    return body.append(printTemplate({
      s: s
    }));
  };
  motionTemplate = _.template('agx: <%= x %>, agy: <%= y %>, agz: <%= z %>');
  onMotion = function(e) {
    window.alert('Got motion...');
    return print(motionTemplate(e.accelerationIncludingGravity));
  };
  window.addEventListener('devicemotion', onMotion, false);
  window.alert('Starting');
}).call(this);

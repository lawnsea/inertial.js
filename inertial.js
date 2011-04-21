(function() {
  var INCHES_PER_METER, body, h, motionTemplate, onMotion, print, printTemplate, r, report, t, tLastMotionEvent, v, x, y;
  x = 0;
  y = 0;
  r = 0;
  v = {
    x: 0,
    y: 0,
    z: 0
  };
  t = Date.now();
  h = null;
  INCHES_PER_METER = 39.3700787;
  tLastMotionEvent = null;
  body = $('body');
  printTemplate = _.template('<span><%= s %></span>');
  print = function(s) {
    return body.append(printTemplate({
      s: s
    }));
  };
  report = function() {
    return print(motionTemplate({
      x: x * INCHES_PER_METER,
      y: y * INCHES_PER_METER,
      z: z * INCHES_PER_METER
    }));
  };
  motionTemplate = _.template('agx: <%= x %>, agy: <%= y %>, agz: <%= z %>');
  onMotion = function(e) {
    var a, dt, ti;
    dt = Date.now() - t;
    t += dt;
    ti = e.interval;
    a = e.acceleration;
    v.x += a.x * ti;
    v.y += a.y * ti;
    v.z += a.z * ti;
    x += v.x * dt;
    y += v.y * dt;
    z += v.z * dt;
    if (h != null) {
      clearTimeout(h);
    }
    return h = setTimeout(report);
  };
  window.addEventListener('devicemotion', onMotion, false);
  window.alert('Starting');
}).call(this);

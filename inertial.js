(function() {
  var INCHES_PER_METER, MOTION_REPORT_INTERVAL, body, h, motions, onMotion, positionTemplate, print, printTemplate, r, report, t, tLastMotionEvent, v, x, y;
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
  motions = 0;
  MOTION_REPORT_INTERVAL = 10;
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
    return print(positionTemplate({
      x: x * INCHES_PER_METER,
      y: y * INCHES_PER_METER,
      z: z * INCHES_PER_METER
    }));
  };
  positionTemplate = _.template('x: <%= x %>, y: <%= y %>, z: <%= z %>');
  onMotion = function(e) {
    var a, dt, ti;
    if (motions % MOTION_REPORT_INTERVAL === 0) {
      report(e.acceleration);
    }
    motions++;
    motions %= MOTION_REPORT_INTERVAL;
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
    return h = setTimeout(report, 100);
  };
  window.addEventListener('devicemotion', onMotion, false);
}).call(this);

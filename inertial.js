(function() {
  var INCHES_PER_METER, MOTION_REPORT_INTERVAL, body, h, motions, onMotion, positionTemplate, print, printTemplate, r, report, reportTimeout, tLastMotionEvent, v, x, y, z;
  x = 0;
  y = 0;
  z = 0;
  r = 0;
  v = {
    x: 0,
    y: 0,
    z: 0
  };
  h = null;
  motions = 0;
  MOTION_REPORT_INTERVAL = 10;
  INCHES_PER_METER = 39.3700787;
  tLastMotionEvent = null;
  body = $('body');
  printTemplate = _.template('<div><span><%= s %></span></div>');
  print = function(s) {
    return body.prepend(printTemplate({
      s: s
    }));
  };
  positionTemplate = _.template('x: <%= x %>, y: <%= y %>, z: <%= z %>');
  report = function() {
    return print(positionTemplate({
      x: (x * INCHES_PER_METER).toFixed(2),
      y: (y * INCHES_PER_METER).toFixed(2),
      z: (z * INCHES_PER_METER).toFixed(2)
    }));
  };
  reportTimeout = function() {
    print('Timed out waiting for motion');
    report();
    return h = null;
  };
  onMotion = function(e) {
    var a, dt;
    a = e.acceleration;
    dt = e.interval;
    v.x += a.x * dt;
    v.y += a.y * dt;
    v.z += a.z * dt;
    x += v.x * dt;
    y += v.y * dt;
    z += v.z * dt;
    if (!(h != null)) {
      return h = setTimeout(reportTimeout, 500);
    }
  };
  window.addEventListener('devicemotion', onMotion, false);
}).call(this);

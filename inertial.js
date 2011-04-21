(function() {
  var INCHES_PER_METER, MOTION_REPORT_INTERVAL, axEl, ayEl, azEl, body, h, log, motions, onMotion, positionTemplate, print, printTemplate, r, report, reportTimeout, tLastMotionEvent, v, vxEl, vyEl, vzEl, x, xEl, y, yEl, z, zEl;
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
  log = $('#log');
  print = function(s) {
    return log.prepend(printTemplate({
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
  axEl = $('#ax');
  ayEl = $('#ay');
  azEl = $('#az');
  vxEl = $('#vx');
  vyEl = $('#vy');
  vzEl = $('#vz');
  xEl = $('#x');
  yEl = $('#y');
  zEl = $('#z');
  onMotion = function(e) {
    var a, dt;
    a = e.acceleration;
    dt = e.interval;
    v.x += (a.x * dt) / 1000;
    v.y += (a.y * dt) / 1000;
    v.z += (a.z * dt) / 1000;
    x += v.x * dt;
    y += v.y * dt;
    z += v.z * dt;
    axEl.html(a.x);
    ayEl.html(a.y);
    azEl.html(a.z);
    vxEl.html(v.x);
    vyEl.html(v.y);
    vzEl.html(v.z);
    xEl.html(x);
    yEl.html(y);
    zEl.html(z);
    if (!(h != null)) {
      return h = setTimeout(reportTimeout, 500);
    }
  };
  window.addEventListener('devicemotion', onMotion, false);
}).call(this);

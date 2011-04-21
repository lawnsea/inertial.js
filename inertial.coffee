x = 0
y = 0
z = 0
r = 0
v =
    x: 0
    y: 0
    z: 0

h = null

motions = 0
MOTION_REPORT_INTERVAL = 10

INCHES_PER_METER = 39.3700787

tLastMotionEvent = null

body = $('body')
printTemplate = _.template '<div><span><%= s %></span></div>'
print = (s) ->
    body.append printTemplate s: s

positionTemplate = _.template 'x: <%= x %>, y: <%= y %>, z: <%= z %>'
report = -> print positionTemplate
        x: (x * INCHES_PER_METER).toFixed(2)
        y: (y * INCHES_PER_METER).toFixed(2)
        z: (z * INCHES_PER_METER).toFixed(2)

reportTimeout = ->
    print 'Timed out waiting for motion'
    report()
    h = null

onMotion = (e) ->
    a = e.acceleration

    ti = e.interval / 1000

    v.x += a.x * ti
    v.y += a.y * ti
    v.z += a.z * ti

    x += v.x * ti
    y += v.y * ti
    z += v.z * ti

    if not h?
        h = setTimeout reportTimeout, 500

window.addEventListener 'devicemotion', onMotion, false

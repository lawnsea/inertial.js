x = 0
y = 0
r = 0
v =
    x: 0
    y: 0
    z: 0

t = Date.now()
h = null

motions = 0
MOTION_REPORT_INTERVAL = 10

INCHES_PER_METER = 39.3700787

tLastMotionEvent = null

body = $('body')
printTemplate = _.template '<span><%= s %></span>'
print = (s) ->
    body.append printTemplate s: s

report = -> print positionTemplate
        x: x * INCHES_PER_METER
        y: y * INCHES_PER_METER
        z: z * INCHES_PER_METER

positionTemplate = _.template 'x: <%= x %>, y: <%= y %>, z: <%= z %>'
onMotion = (e) ->
    if motions % MOTION_REPORT_INTERVAL is 0
        report e.acceleration
    motions += 1
    motions %= MOTION_REPORT_INTERVAL

    dt = Date.now() - t
    t += dt
    ti = e.interval
    a = e.acceleration

    v.x += a.x * ti
    v.y += a.y * ti
    v.z += a.z * ti

    # XXX: this is wrong. weight previous and current v by dt - ti and ti, respectively
    x += v.x * dt
    y += v.y * dt
    z += v.z * dt

    if h?
        clearTimeout h
    h = setTimeout report, 100

window.addEventListener 'devicemotion', onMotion, false

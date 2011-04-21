x = 0
y = 0
r = 0
v =
    x: 0
    y: 0
    z: 0

t = Date.now()
h = null

INCHES_PER_METER = 39.3700787

tLastMotionEvent = null

body = $('body')
printTemplate = _.template '<span><%= s %></span>'
print = (s) ->
    body.append printTemplate s: s

report = -> print motionTemplate
        x: x * INCHES_PER_METER
        y: y * INCHES_PER_METER
        z: z * INCHES_PER_METER

motionTemplate = _.template 'agx: <%= x %>, agy: <%= y %>, agz: <%= z %>'
onMotion = (e) ->
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
    h = setTimeout report

window.addEventListener 'devicemotion', onMotion, false
window.alert 'Starting'

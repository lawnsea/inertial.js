x = 0
y = 0
z = 0
r = 0
v =
    x: 0
    y: 0
    z: 0

h = null

# acceleration threshold in mm/ms^2
A_THRESH = 1 / 1000

INCHES_PER_MM = 39.3700787 / 1000

tLastMotionEvent = null

body = $('body')
printTemplate = _.template '<div><span><%= s %></span></div>'
log = $('#log')
print = (s) ->
    log.prepend printTemplate s: s

positionTemplate = _.template 'x: <%= x %>, y: <%= y %>, z: <%= z %>'
report = -> print positionTemplate
        x: (x * INCHES_PER_MM).toFixed(2)
        y: (y * INCHES_PER_MM).toFixed(2)
        z: (z * INCHES_PER_MM).toFixed(2)

reportTimeout = ->
    print 'Timed out waiting for motion'
    report()
    h = null

axEl = $('#ax')
ayEl = $('#ay')
azEl = $('#az')
vxEl = $('#vx')
vyEl = $('#vy')
vzEl = $('#vz')
xEl = $('#x')
yEl = $('#y')
zEl = $('#z')
onMotion = (e) ->
    a = e.acceleration
    dt = e.interval

    # convert to mm/ms^2
    ax = a.x / 1000
    ay = a.y / 1000
    az = a.z / 1000

    ###
    if Math.abs(ax) < A_THRESH and Math.abs(ay) < A_THRESH
        return
    ###

    v.x += ax * dt
    v.y += ay * dt
    v.z += az * dt

    x += v.x * dt
    y += v.y * dt
    z += v.z * dt

    axEl.html(ax)
    ayEl.html(ay)
    azEl.html(az)
    vxEl.html(v.x)
    vyEl.html(v.y)
    vzEl.html(v.z)
    xEl.html(x.toFixed(3))
    yEl.html(y.toFixed(3))
    zEl.html(z.toFixed(3))

window.addEventListener 'devicemotion', onMotion, false

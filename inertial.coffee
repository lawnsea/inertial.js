x = 0
y = 0
r = 0
v = 0
t = Date.now()
tLastMotionEvent = null
body = $('body')

printTemplate = _.template '<span><%= s %></span>'
print = (s) ->
    body.append printTemplate s: s

motionTemplate = _.template 'agx: <%= x %>, agy: <%= y %>, agz: <%= z %>'
onMotion = (e) ->
    window.alert 'Got motion...'
    print motionTemplate e.accelerationIncludingGravity

#$().bind('devicemotion', onMotion)
window.addEventListener 'devicemotion', onMotion
window.alert 'Starting'

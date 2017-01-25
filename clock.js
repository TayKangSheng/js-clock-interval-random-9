var count = 0

function secondInterval () {
  return count++
}
setInterval(secondInterval, 1000)

setInterval(function secondRotation () {
  var degrees = ((count % 60) * 6)
  console.log(degrees)
  var secondHand = document.getElementById('second')
  secondHand.style.transform = 'rotate(' + degrees + 'deg)'
}, 1000)

setInterval(function minuteRotation () {
  var degrees = ((count / 3600) * 360) % 360
  var minuteHand = document.getElementById('minute')
  minuteHand.style.transform = 'rotate(' + degrees + 'deg)'
}, 1000)

setInterval(function hourRotation () {
  var degrees = ((count / 43200) * 360) % 360
  var hourHand = document.getElementById('hour')
  hourHand.style.transform = 'rotate(' + degrees + 'deg)'
}, 1000)

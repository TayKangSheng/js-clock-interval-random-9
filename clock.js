// document.addEventListener('DOMContentLoaded', function () {
//   var count = 0
//
//   function secondInterval () {
//     return count++
//   }
//   setInterval(secondInterval, 1000)
//
//   setInterval(function secondRotation () {
//     var degrees = ((count % 60) * 6)
//     console.log(degrees)
//     var secondHand = document.getElementById('second')
//     secondHand.style.transform = 'rotate(' + degrees + 'deg)'
//   }, 1000)
//
//   setInterval(function minuteRotation () {
//     var degrees = ((count / 3600) * 360) % 360
//     var minuteHand = document.getElementById('minute')
//     minuteHand.style.transform = 'rotate(' + degrees + 'deg)'
//   }, 1000)
//
//   setInterval(function hourRotation () {
//     var degrees = ((count / 43200) * 360) % 360
//     var hourHand = document.getElementById('hour')
//     hourHand.style.transform = 'rotate(' + degrees + 'deg)'
//   }, 1000)
// })

function clock2 () {
  var secondHand = document.getElementById('second')
  var minuteHand = document.getElementById('minute')
  var hourHand = document.getElementById('hour')

  // getting real time, /1000 because milliseconds, +8 to account for SG time
  var count = new Date().getTime() / 1000 + (8 * 60 * 60)

  function secondRotation (seconds) {
    return ((seconds % 60) * 6)
  }

  function minuteRotation (seconds) {
    return ((seconds / 3600) * 360) % 360
  }

  function hourRotation (seconds) {
    return ((seconds / 43200) * 360) % 360
  }

  function rotateAll () {
    secondHand.style.transform = 'rotate(' + secondRotation(count) + 'deg)'
    minuteHand.style.transform = 'rotate(' + minuteRotation(count) + 'deg)'
    hourHand.style.transform = 'rotate(' + hourRotation(count) + 'deg)'
    count++
  }
  return {
    secondRotation: secondRotation,
    minuteRotation: minuteRotation,
    hourRotation: hourRotation,
    rotateAll: rotateAll
  }
}

window.addEventListener('DOMContentLoaded', function () {
  var startClock = clock2()
  setInterval(startClock.rotateAll, 1000)
})

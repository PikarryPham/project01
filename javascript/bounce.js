var bounce = document.getElementById("bounce-mot"),
  x = 0,
  directionX = !0;
function bouncing(y) {
  var count = 650;
  if (y.matches) {
    count = 300;
  } else {
    count = 650;
  }
  directionX
    ? (count <= x && (directionX = !1), (x += 1))
    : directionX || (x <= -10 && (directionX = !0), (x -= 1)),
    (bounce.style.left = x + "px");
}
var setting = setInterval(function() {
  bouncing(y);
}, 70);

var y = window.matchMedia("(max-width: 500px)");
// Call listener function at run time
y.addListener(bouncing); // Attach listener function on state changes

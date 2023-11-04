const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function clock() {
  const now = new Date();
  const imageAngleOffset = -45;
  const twelveOClock = 90;

  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6 + twelveOClock;

  const minutes = now.getMinutes();
  const minutesDegrees = minutes * 6 + twelveOClock + imageAngleOffset;

  const hours = now.getHours();
  const hoursDegrees = hours * 30 + twelveOClock + imageAngleOffset;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(clock, 1000);

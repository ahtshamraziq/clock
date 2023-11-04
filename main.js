const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function clock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6;

  const minutes = now.getMinutes();
  const minutesDegrees = minutes * 6;

  const hours = now.getHours();
  const hoursDegrees = hours * 30;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(clock, 1000);

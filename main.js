let secondHandPosition = 0;
let minuteHandPosition = 0;
setInterval(() => {
  secondHandPosition = secondHandPosition + 6;
  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${secondHandPosition}deg)`;

  minuteHandPosition = (secondHandPosition / 360) * 6;
  document.querySelector(
    ".min-hand"
  ).style.transform = `rotate(${minuteHandPosition}deg)`;
}, 10);

// setInterval(() => {
//   minuteHandPosition = minuteHandPosition + 6;
//   document.querySelector(
//     ".minute-hand"
//   ).style.transform = `rotate(${minuteHandPosition}deg)`;
// }, 1000);

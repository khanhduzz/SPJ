var timerInterval;

function resetTiming() {
  clearInterval(timerInterval);
  setBackgroundColorAndMessage("#fff", "Press to start");
  insertTime(0, 0);
}

function startTiming() {
  setBackgroundColorAndMessage("#abd194", "Running");
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTiming() {
  setBackgroundColorAndMessage("#f0beaa", "Stop!!!");
  clearInterval(timerInterval);
}

function updateTimer() {
  const currentTime = document.querySelector(".time-display").textContent;
  const splitTime = currentTime.split(":");

  let minute = Number(splitTime[0]);
  let second = Number(splitTime[1]);

  console.log(minute + " " + second);

  if (second == 59) {
    if (minute == 59) minute = 0;
    else minute++;
    second = 0;
  } else second++;

  insertTime(minute, second);
}

function insertTime(minute, second) {
  let timer = document.querySelector(".time-display");
  timer.remove();

  let newTimer = document.createElement("div");
  newTimer.className = "time-display";
  newTimer.textContent = `${timeFormat(minute)}:${timeFormat(second)}`;

  let time = document.querySelector(".stopwatch-container");
  time.insertBefore(newTimer, time.firstChild);
}

function timeFormat(time) {
  return time < 10 ? `0${time}` : `${time}`;
}

function setBackgroundColorAndMessage(color, message) {
  document.querySelector("body").style.backgroundColor = color;

  let oldNotify = document.querySelector(".notification");
  if (oldNotify) {
    oldNotify.remove();
  }

  let notify = document.createElement("div");
  notify.style.color = "#000";
  notify.className = "notification";
  notify.textContent = message;

  let body = document.querySelector("body");
  body.appendChild(notify);
}

window.onload = resetTiming();

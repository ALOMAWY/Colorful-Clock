let time = document.getElementById("time");

function setCurrentTime() {
  let currentTime = new Date(Date.now());
  time.innerText = `${
    currentTime.getHours() < 10
      ? "0" + currentTime.getHours()
      : currentTime.getHours()
  }:${
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes()
  }:${
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds()
  }  ${currentTime.getHours() < 12 ? "AM" : "PM"}`;
}




setInterval(() => {
  setCurrentTime();
}, 1000);

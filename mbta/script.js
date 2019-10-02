document.addEventListener("DOMContentLoaded", () => {

  const timeElement = document.getElementById("current-time"),
    dateElement = document.getElementById("current-date"),
    twoMinuteSplit = document.getElementById("two-minute-split");

  const dateInstance = new Date(),
    month = dateInstance.getMonth() + 1,
    day = dateInstance.getDate(),
    year = dateInstance.getFullYear() - 2000;

  dateElement.innerHTML = ((month < 10) ? "0" : "") + month + "/" + ((day < 10) ? "0" : "") + day + "/" + year;

  let minute = dateInstance.getMinutes() - 2,
    hour = dateInstance.getHours(),
    amOrPm = "AM";

  if (minute < 0) {
    minute = minute + 60;
    hour = hour - 1;
  }

  if (hour >= 12) amOrPm = "PM";

  if (hour == -1) {
    hour = 11;
  } else if (hour == 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  } else {
  	hour = hour;
  }

  twoMinuteSplit.innerHTML = hour + ":" + ((minute < 10) ? "0" : "") + minute + " " + amOrPm;

  function liveTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let suffix = "AM";

    if (h >= 12) suffix = "PM";

    if (h == 0) {
      h = 12;
    } else if (h > 12) {
      h = h - 12;
    } else {
      h = h;
    }

    timeElement.innerHTML = ((h < 10) ? "0" : "") + h + ":" + ((m < 10) ? "0" : "") + m + ":" + ((s < 10) ? "0" : "") + s + " " + suffix;
  }

  liveTime();
  setInterval(liveTime, 1000);

});
function updateTimeAndDay() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getUTCDay()];

  document.getElementById("currentTimeUTC").textContent = utcTime;
  document.getElementById("currentDay").textContent = day;
}

document.addEventListener("DOMContentLoaded", (event) => {
  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
});

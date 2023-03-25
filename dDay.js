const dDayText = document.querySelector('.d-day-text');

const dayWeMet = new Date("2023-01-18");
const KOR_TIME_DIFF = 9 * 60 * 60 * 1000; // UTC + 9

function getDiffDay() {
  const now = new Date();
  const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
  const korTimeNow = new Date(utcNow + KOR_TIME_DIFF);
  
  const diffDay = Math.ceil((korTimeNow - dayWeMet) / 1000 / 60 / 60 / 24);

  return diffDay;
}

function setdDay() {
  dDayText.innerText = `+${getDiffDay()}`
}

setInterval(setdDay, 1000); // check dDay once in a second
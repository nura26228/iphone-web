

let data = new Date();

Month = data.getMonth();
Day = data.getDate();
Week = data.getDay();

switch (Month)
{
  case 0: fMonth=" January"; break;
  case 1: fMonth=" February"; break;
  case 2: fMonth=" March"; break;
  case 3: fMonth=" April"; break;
  case 4: fMonth=" May"; break;
  case 5: fMonth=" June"; break;
  case 6: fMonth=" July"; break;
  case 7: fMonth=" August"; break;
  case 8: fMonth=" September"; break;
  case 9: fMonth=" October"; break;
  case 10: fMonth=" November"; break;
  case 11: fMonth=" December"; break;
}

switch (Week)
{
  case 1: fWeek="Monday"; break;
  case 2: fWeek="Tuesday"; break;
  case 3: fWeek="Wednesday"; break;
  case 4: fWeek="Thursday"; break;
  case 5: fWeek="Friday"; break;
  case 6: fWeek="Saturday"; break;
  case 7: fWeek="Sunday"; break;
}

// Hour = data.getHours();
// Minute = data.getMinutes();
// Second = data.getSeconds();

// if (Minute < 10) Minute = '0' + Minute;

// document.getElementById('dataaa'). textContent = fWeek + ', ' + Day + fMonth;
// document.getElementById('time'). textContent = Hour + ":" + Minute + ':' + Second;

setInterval (( ) => {
let data = new Date();

Month = data.getMonth();
Day = data.getDate();
Week = data.getDay();
Hour = data.getHours();
Minute = data.getMinutes();
Second = data.getSeconds();

if(Hour<10) Hour = '0' + Hour


document.getElementById('dataaa'). textContent = fWeek + ', ' + Day + fMonth;

if(Minute <= 9)
  document.getElementById('time'). textContent = Hour + ":0" + Minute;
else
  document.getElementById('time'). textContent = Hour + ":" + Minute;
})



const yearsElement = document.querySelector('.years');
const monthsElement = document.querySelector('.months');
const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.min');

document.querySelector(".date").addEventListener('change', (oblicz) =>{ 
  const wybranyCzas = new Date(oblicz.target.value).getTime();
 const obecnyCzas = new Date().getTime();
    const roznica = wybranyCzas - obecnyCzas;

const years = Math.floor(roznica / (1000*60*60*24*365));
const months = Math.floor((roznica % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
const days = Math.floor((roznica % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
const hours = Math.floor((roznica % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((roznica % (1000 * 60 * 60)) / (1000 * 60));
    yearsElement.textContent = years;
    monthsElement.textContent = months;
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;

    if(roznica < 0){
      yearsElement.textContent = 0;
      monthsElement.textContent = 0;
      daysElement.textContent = 0;
      hoursElement.textContent = 0;
      minutesElement.textContent = 0;
    }

});
   

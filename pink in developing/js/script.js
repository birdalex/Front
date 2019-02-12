$(document).ready(function (){
  let slideIndex = 1,
    slides = document.getElementsByClassName('slider-item'),
    slides1 = document.getElementsByClassName('slider-item1'),
    prev = document.querySelector('.arrows-left'),
    prev1 = document.querySelector('.arrows-left1'),
    next = document.querySelector('.arrows-right'),
    next1 = document.querySelector('.arrows-right1'),
    dotsWrap = document.querySelector('.slider-dots'),
    dotsWrap1 = document.querySelector('.slider-dots1'),
    dots = document.getElementsByClassName('dot'),
    dots1 = document.getElementsByClassName('dot1');

  showSlides(slideIndex);
  showSlides1(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {   // если закончились слайды ставим на первую позию
      slideIndex = 1;
    };
    if (n < 1) {
      slideIndex = slides.length; // ставим в конец
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';

    };
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('dot-active');

    };
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  };
  function showSlides1(n) {
    if (n > slides1.length) { // если закончились слайды ставим на первую позию
      slideIndex = 1;
    };
    if (n < 1) {
      slideIndex = slides1.length; // ставим в конец
    }

    for (let i = 0; i < slides1.length; i++) {
      slides1[i].style.display = 'none';

    };
    for (let i = 0; i < dots1.length; i++) {
      dots1[i].classList.remove('dot1-active');
    };

    slides1[slideIndex - 1].style.display = 'block';
    dots1[slideIndex - 1].classList.add('dot1-active');
  };
 
  function plusSlides(n) {
    showSlides(slideIndex += n)
  }
  function plusSlides1(n) {
    showSlides1(slideIndex += n)
  }
  function currentSlide(n) {
    showSlides(slideIndex = n)
  };
  function currentSlide1(n) {
    showSlides1(slideIndex = n)
  };
  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  prev1.addEventListener('click', function () {
    plusSlides1(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  next1.addEventListener('click', function () {
    plusSlides1(1);
  });

  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
        // currentSlide1(i);
      }
    }
  });
  dotsWrap1.addEventListener('click', function (event) {
    for (let i = 0; i < dots1.length + 1; i++) {
      if (event.target.classList.contains('dot1') && event.target == dots1[i - 1]) {
        currentSlide1(i);
        // currentSlide1(i);
      }
    }
  });
  // Таймер
  
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24)-2;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function initializeClock( endtime) {
    // var clock = document.getElementById(id);
    var daysSpan = document.querySelector('.upperBlcok-timeSale-timetable-day'),
      hoursSpan = document.querySelector('.upperBlcok-timeSale-timetable-hours'),
      minutesSpan = document.querySelector('.upperBlcok-timeSale-timetable-minutes');
    //  secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
 
  var deadline = '2019-02-15';// изменение даты
  // initializeClock(deadline);
});
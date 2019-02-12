(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded',function(){

	let tab=require('../parts/tab.js');
	let calc=require('../parts/calc.js');
	let form=require('../parts/form.js');
	let modal=require('../parts/modal.js');
	let scroll=require('../parts/scroll.js');
	let slider=require('../parts/slider.js');
	let timer=require('../parts/timer.js');
	let tabModal=require('../parts/modalTabs.js');

	tab();
	calc();
	form();
	modal();
	scroll();
	slider();
	timer();
	tabModal();
 });
	
},{"../parts/calc.js":2,"../parts/form.js":3,"../parts/modal.js":4,"../parts/modalTabs.js":5,"../parts/scroll.js":6,"../parts/slider.js":7,"../parts/tab.js":8,"../parts/timer.js":9}],2:[function(require,module,exports){
function calc(){
	let persons=document.getElementsByClassName('counter-block-input')[0],
				 restDays=document.getElementsByClassName('counter-block-input')[1],
				 totalValue=document.getElementById('total'),
				 place=document.getElementById('select'),
				 personsSum=0,
				 daysSum=0,
				 total=0;
				 totalValue.innerHTML=0;
				 persons.value='';
				 restDays.value='';
				 
				 function isInteger(num) {				  	
					  return (num ^ 0) === num			
					};
				

				 persons.addEventListener('change',function(){

				 	personsSum=+this.value.replace(/^0+/, '');
				 	
				 	if(personsSum>0&&personsSum!=0&&isInteger(personsSum)&&isInteger(daysSum)&&daysSum!=0){
				 		total=(daysSum+personsSum)*4000;
					 	if(restDays.value==''){
					 		totalValue.innerHTML=0;
					 	} 
					 	
					 	else {
					 		let a =total;
				 			totalValue.innerHTML=a*place.options[place.selectedIndex].value;
					 		// totalValue.innerHTML=total;
					 	}
				 	}
				 	else if (personsSum=='') {
				 		totalValue.innerHTML=0;
				 	}

				 	else{
				 		totalValue.innerHTML='Пожалуйста введите корректные данные';
				 	}	

				 });	 	
				

				 restDays.addEventListener('change',function(){
				 	daysSum=+this.value.replace(/^0+/, '');
				 	// parseInt(daysSum);
					if(daysSum>0&&daysSum!=0&&isInteger(daysSum)&&isInteger(personsSum)&&personsSum!=0){
							total=(daysSum+personsSum)*4000;
					 		if(persons.value==''){
					 		totalValue.innerHTML=0;
					 	} else {
					 		let a =total;
				 			totalValue.innerHTML=a*place.options[place.selectedIndex].value;
					 		// totalValue.innerHTML=total;
					 	}
					}
					else if (daysSum=='') {
						totalValue.innerHTML=0;
					}
					else{
						totalValue.innerHTML='Пожалуйста введите корректные данные';
					}
				 	
				 	
				 });
				 
				 place.addEventListener('change',function(){
				 	if(restDays.value==''|| persons.value==''){
				 		totalValue.innerHTML=0;
				 	} else {
				 		let a =total;
				 		totalValue.innerHTML=a*this.options[this.selectedIndex].value;
				 		
				 	}
				 });
}
module.exports=calc;
},{}],3:[function(require,module,exports){
function form(){
	let message=new Object();
	message.loading="Загрузка...";
	message.success="Спасио! Скоро мы с Вами свяжемся";
	message.failure="Что-то пошло не так....";

	let form=document.getElementsByClassName('main-form')[0],
		input=form.getElementsByTagName('input'),
		// contactForm=document.getElementsByClassName('contact-form')[0],
		contactForm=document.getElementById('form'),
		inputContact=contactForm.getElementsByTagName('input'),
		statusMessage=document.createElement('div');
		statusMessage.classList.add('status');
		form.addEventListener('submit',(event)=>{
			event.preventDefault();
			form.appendChild(statusMessage);

			let request=new XMLHttpRequest();
			request.open("POST",'server.php');
			request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

			let formData=new FormData(form);
			request.send(formData);
			request.onreadystatechange=function(){
				if(request.readyState<4) {
					statusMessage.innerHTML=message.loading;
				} else if (request.readyState===4) {
					if(request.status==200 && request.status<300) {
						statusMessage.innerHTML=message.success
					}
					
				}	else {
					statusMessage.innerHTML=message.failure;
				}
			}
			for(let i=0;i<input.length;i++) {
				input[i].value='';
			}
		});
		contactForm.addEventListener('submit',function(event){
			event.preventDefault();
			contactForm.appendChild(statusMessage);

			let request=new XMLHttpRequest();
			request.open("POST",'server.php');
			request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

			let formData=new FormData(contactForm);
			request.send(formData);
			request.onreadystatechange=function(){
				if(request.readyState<4) {
					statusMessage.innerHTML=message.loading;
				} else if (request.readyState===4) {
					if(request.status==200 && request.status<300) {
						statusMessage.innerHTML='good'
					}
					
				}	else {
					statusMessage.innerHTML=message.failure;
				}
			}
			for(let i=0;i<inputContact.length;i++) {
				inputContact[i].value='';
			}
		});
}
module.exports=form;
},{}],4:[function(require,module,exports){
function modal(){
	let more =document.querySelector('.more'),
		overlay=document.querySelector('.overlay'),
		close=document.querySelector('.popup-close');
		
	more.addEventListener('click',
		function(){
			this.classList.add=('more-splah');
			overlay.style.display='block';
			document.body.style.overflow = 'hidden';
		});
	close.addEventListener('click',function(){
			overlay.style.display='none';
			more.classList.remove('more-splah');
			document.body.style.overflow = '';
	});
}
module.exports=modal;
},{}],5:[function(require,module,exports){
function tabModal(){
	let disbtn=document.querySelectorAll('.description-btn'),
		overlay=document.querySelector('.overlay');
	for(let i=0;i<disbtn.length;i++){
		let btnDis;
		btnDis=disbtn[i];
		btnDis.addEventListener('click',function(){
			this.classList.add=('more-splah');
			overlay.style.display='block';
			document.body.style.overflow = 'hidden';
		});
	}							
}
module.exports=tabModal;
},{}],6:[function(require,module,exports){
function scroll(){
	let menu=document.getElementsByTagName('nav')[0];
	function animate(draw,duration) {
		let start=performance.now();
		requestAnimationFrame(function animate(time) {
			let timePassed=time-start;
			if(timePassed>duration) {
				timePassed=duration;
			}

			draw(timePassed);

			if(timePassed<duration){
				requestAnimationFrame(animate);
			}
		});
	}
	menu.addEventListener('click',function(e) {
		e.preventDefault();
		animate(function(timePassed) {
			let target=e.target;
			let section=document.getElementById(target.getAttribute('href').slice(1));
			window.scrollBy(0,section.getBoundingClientRect().top/20-3);
		},1500);
	});
}
module.exports=scroll;
},{}],7:[function(require,module,exports){
function slider(){
	let slideIndex=1,
			slides=document.getElementsByClassName('slider-item'),
			prev=document.querySelector('.prev'),
			next=document.querySelector('.next'),
			dotsWrap=document.querySelector('.slider-dots'),
			dots=document.getElementsByClassName('dot');

			showSlides(slideIndex);

			function showSlides(n) {
				if(n>slides.length) {   // если закончились слайды ставим на первую позию
					slideIndex = 1;
				};
				if(n<1) {
					slideIndex=slides.length; // ставим в конец
				}
			

				for(let i=0;i<slides.length;i++) {
					slides[i].style.display='none';

				};
				for(let i=0;i<dots.length;i++) {
					dots[i].classList.remove('dot-active');

				};

				slides[slideIndex-1].style.display='block';
				dots[slideIndex-1].classList.add('dot-active');
			};
			function plusSlides(n) {
				showSlides(slideIndex+=n)
			}

			function currentSlide(n){
				showSlides(slideIndex=n)
			};

			prev.addEventListener('click',function(){
				plusSlides(-1);
			});

			next.addEventListener('click',function(){
				plusSlides(1);
			});

			dotsWrap.addEventListener('click',function(event){
				for(let i=0;i<dots.length+1;i++){
					if(event.target.classList.contains('dot')&& event.target==dots[i-1]) {
						currentSlide(i);
					}
				}
			});
}
module.exports=slider;
},{}],8:[function(require,module,exports){
function tab(){

	let tab=document.getElementsByClassName('info-header-tab'),
		tabContent=document.getElementsByClassName('info-tabcontent'),
		info=document.getElementsByClassName('info-header')[0];
		
	function hideContent(a) {
		for(let i=a;i<tabContent.length;i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		}
	}
	hideContent(1);
	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
			hideContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	info.addEventListener('click', function(event) {
		let target=event.target;
		if(target.className=='info-header-tab') {
			for(let i=0;i<tab.length;i++) {
				if(target==tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
}
module.exports=tab;
},{}],9:[function(require,module,exports){
function timer (){
	function timerLeft(year,month,day) {
		setInterval(function(){
		let hours=document.querySelector('.hours'),
			minutes=document.querySelector('.minutes'),
			seconds=document.querySelector('.seconds'),
			dateNow=Date.parse(new Date()),
			dateFinish=new Date(year,month,day),
			// dateFinish=Date.parse
			sec=Math.floor((dateFinish-dateNow)/1000),
			secToMinutes=sec%3600,
			hoursNum=Math.floor(sec/3600),
			minutesNum=Math.floor(secToMinutes/60),
			seconsNum=secToMinutes%60;
			hours.innerHTML=hoursNum;
			minutes.innerHTML=minutesNum;
			seconds.innerHTML=seconsNum;
			// console.log(dateFinish);
			},1000);
	}

	timerLeft(2018,07,06);
}
module.exports=timer;
},{}]},{},[1]);

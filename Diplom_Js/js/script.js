window.addEventListener('DOMContentLoaded',function(){
								// Modal
	let popupBtn=document.querySelector('.popup-btn'),
		overlay=document.querySelector('.overlay'),
		custom=document.querySelector('.custom'),
		main=document.querySelector('.main'),
		customInfo=document.querySelector('.custom-info'),
		customChar=document.querySelector('.custom-char'),
		customStyle=document.querySelector('.custom-style'),
		mainCardsItem=document.getElementsByClassName('main-cards-item');


	popupBtn.addEventListener('click', function(){
		mainCardsItem[2].style.display='block';
		overlay.classList.add('fadeOut');
		overlay.style.display='none';
		main.style.display='none';
		custom.style.display='flex';
		customInfo.classList.add('fadeInDown');
		customInfo.style.display='block';
		customChar.classList.add('fadeInUp');
		customChar.style.display='block';
		customStyle.classList.add('fadeInDown');
		customStyle.style.display='block';


	});


	let readyBtn=document.getElementById('ready');// btn готово
	let personName=document.getElementById('name'),	// input name
		personAge=document.getElementById('age'), // input age
		selectViews=document.getElementById('select'),// selectd>options
		views=document.getElementsByClassName('views')[2],// div взглядов нов.карточки
		personBio=document.getElementById('bio'),// textarea
		personSex=document.getElementsByName('sex'),// выбор пола
		bio=document.getElementsByClassName('bio')[2],//div биография нов. карточки
		person=document.querySelector('.person-easy'),//div с image 
		sex=document.getElementsByClassName('sex')[2];//div пол нов.карточка
		personName.value='';
		personAge.value='';
		personBio.value='';
		personSex[0].checked=true;
		selectViews.value='Либеральные';

		    

	let passName=false,
		passAge=false,
		passBio=false;
	let label=document.getElementsByTagName('label');

										// Проверка на пустые поля

	if(personBio.value.length<10){
		label[4].textContent='Введите Биографию не меньше 10 символов';
		label[4].style.color='#f95959';
		}
	if(personName.value==''){
		label[0].textContent='Введите Фамилия Имя Отчество';
		label[0].style.color='#f95959';
		
		}
	if(personAge.value==''){
		label[1].textContent='Введите возраст';
		label[1].style.color='#f95959';
		
		}

										// проверка биографии
	
		personBio.addEventListener('change',function(){
			if(personBio.value.length>=10){
				label[4].textContent='Биография';
				label[4].style.color='#04ff00';
				passBio=true;
			}
		});
				
	
										//input name
	personName.addEventListener('change',function(){
			let str=personName.value;
			str=/[^а-яА-Я -]/g.exec(this.value)
			if(str&&isNaN(personName.value)){
				label[0].textContent='Введите только кирилицу';
				label[0].style.color='red';
				passName=false;
			}
            
			else if((typeof(personName.value))==='string'&&personName.value!=''&&isNaN(personName.value)&&!str)
			{

				label[0].textContent='Фамилия Имя Отчество';
				label[0].style.color='#04ff00';
				passName=true;	
			}
			
		else {
				label[0].textContent='Повторите попытку';
				label[0].style.color='red';
		}

	});
								// input age
	personAge.addEventListener('change',function(){
		if(personAge.value!=''&&!isNaN(personAge.value)&&personAge.value>=35&&personAge.value<=80){
			textContent='Возраст,лет';
				label[1].style.color='#04ff00';
				passAge=true;
				// pass=true;
		}
		else{
			// pass=false;
				label[1].textContent='Введите возраст от 35-80';
				label[1].style.color='red';
		}
	});

		
							
	 									// выбор пол. взглядов
	selectViews.addEventListener('change',function(){
		views.textContent=this.options[this.selectedIndex].value;
	})



										//slider and выбор пола

	let next=document.querySelector('.next'),
		prev=document.querySelector('.prev'),
		preview=document.querySelector('.preview'),
		photo3=document.getElementsByClassName('photo-3')[0],
		count=0;


		if(personSex[0].checked){
			count=5;
			person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			preview.style.backgroundImage='url(img/construct-'+count+'.png)';
			photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			sex.textContent=personSex[0].value;
		}
		else if(personSex[1].checked) {
			count=1;
			person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			preview.style.backgroundImage='url(img/construct-'+count+'.png)';
			photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)'
			sex.textContent=personSex[1].value;
		}

		personSex[0].addEventListener('change',function(){
			count=5;
			person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			preview.style.backgroundImage='url(img/construct-'+count+'.png)';
			photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			sex.textContent=personSex[0].value;

		})
		personSex[1].addEventListener('change',function(){
			count=1;
			person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			preview.style.backgroundImage='url(img/construct-'+count+'.png)';
			photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			sex.textContent=personSex[1].value;
			
		})

	 
											//вперед
		next.addEventListener('click',()=>{
			count++;
			if(personSex[1].checked){
				if(count>4){
					count=1;
					preview.style.backgroundImage='url(img/construct-'+count+'.png)';
					person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
					photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
				}
			preview.style.backgroundImage ='url(img/construct-'+count+'.png)';
			person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			sex.textContent=personSex[1].value;
			}
			else if(personSex[0].checked){
					if(count>8){
					count=5;
					preview.style.backgroundImage='url(img/construct-'+count+'.png)';
					person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
					photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
				}
			preview.style.backgroundImage='url(img/construct-'+count+'.png)';
			person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			sex.textContent=personSex[0].value;
			}
		});
											//назад

		prev.addEventListener('click',()=>{
			count--;
			if(personSex[1].checked){
				if(count<1){
					count=5;
					count--;
					preview.style.backgroundImage='url(img/construct-'+count+'.png)';
					person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
					photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
				}
			preview.style.backgroundImage='url(img/construct-'+count+'.png)';
			person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			sex.textContent=personSex[1].value;
			}
			else if(personSex[0].checked){
					if(count<5){
					count=9;
					count--;
					preview.style.backgroundImage='url(img/construct-'+count+'.png)';
					person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
					photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
				}
			preview.style.backgroundImage='url(img/construct-'+count+'.png)';
			person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			sex.textContent=personSex[0].value;
			}
			
			
		});


										// сброс всех результатов
		let resultCount=document.querySelectorAll('.result-count'),
			progressBar=document.querySelectorAll('.progress-bar-2');

		for(let i=0;i<resultCount.length;i++){
			resultCount[i].textContent='0%';
			

		};
		for(let i=0;i<progressBar.length;i++){
				progressBar[i].style.height='0%';
			};

										// проведение честного голосования и вмешаться на выборы 

		let votingBtn=document.getElementById('voting'),
			crimeBtn=document.getElementById('crime');
			
			// console.log(result);
			
		votingBtn.addEventListener('click',()=>{	

			let res0=getRandomInt(1,100),
				res1=getRandomInt(1,100),
				res2=getRandomInt(1,100);
			let result=res0+res1+res2;

				while (result!=100) {
				res0=getRandomInt(1,100),
				res1=getRandomInt(1,100);
				res2=getRandomInt(1,100);
				result=res0+res1+res2;
			}
			
			progressBar[0].style.height=(res0+'%');
			resultCount[0].textContent=(res0+'%');
			progressBar[1].style.height=(res1+'%');
			resultCount[1].textContent=(res1+'%');
			progressBar[2].style.height=(res2+'%');
			resultCount[2].textContent=(res2+'%');

			if(res0>res1&&res0>res2){
				changeCardsActive1(0);
			}
			if(res1>res0&&res1>res2){
				changeCardsActive1(1)
			}
			if(res2>res0&&res2>res1){
				changeCardsActive1(2)
			}

		});

		crimeBtn.addEventListener('click',()=>{
			let res0=getRandomInt(1,100),
				res1=getRandomInt(1,100),
				res2=getRandomInt(1,100)+25;
			let result=res0+res1+res2;

				while (result!=100) {
				res0=getRandomInt(1,100),
				res1=getRandomInt(1,100);
				res2=getRandomInt(1,100)+25;
				result=res0+res1+res2;
			}
			

			progressBar[0].style.height=(res0+'%');
			resultCount[0].textContent=(res0+'%');
			progressBar[1].style.height=(res1+'%');
			resultCount[1].textContent=(res1+'%');
			progressBar[2].style.height=(res2+'%');
			resultCount[2].textContent=(res2+'%');
			if(res0>res1&&res0>res2){
				changeCardsActive1(0);
			}
			if(res1>res0&&res1>res2){
				changeCardsActive1(1)
			}
			if(res2>res0&&res2>res1){
				changeCardsActive1(2)
			}
				
		});
										// Выбор активной карточки 
		function changeCardsActive1(num){
				for(let i=0;i<mainCardsItem.length;i++) {
					if(mainCardsItem[i].classList.contains('main-cards-item-active')){
						mainCardsItem[i].classList.remove('main-cards-item-active');
					}
					mainCardsItem[num].classList.add('main-cards-item-active');
						
			    	}
		
		};
										//сброс активной карточки
		function changeCardsActive(){
			for(let i=0;i<mainCardsItem.length;i++) {
			    if(mainCardsItem[i].classList.contains('main-cards-item-active')){
					mainCardsItem[i].classList.remove('main-cards-item-active');
				}
			}	
		
		};

												//reset
		let resetBtn=document.getElementById('reset');

		resetBtn.addEventListener('click',function(){
			personName.value='';
			personAge.value='';
			personBio.value='';
			passName=false,
			passAge=false,
			passBio=false;
			res0=0;
			res1=0;
			res2=0;
			changeCardsActive();
			progressBar[0].style.height=(res0+'%');
			resultCount[0].textContent=(res0+'%');
			progressBar[1].style.height=(res1+'%');
			resultCount[1].textContent=(res1+'%');
			progressBar[2].style.height=(res2+'%');
			resultCount[2].textContent=(res2+'%');
			label[0].style.color='#f95959';
			label[1].style.color='#f95959';
			label[4].style.color='#f95959';
			personSex[0].checked=true;
			selectViews.value='Либеральные';
			count=5;
			person.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			preview.style.backgroundImage='url(img/construct-'+count+'.png)';
			photo3.style.backgroundImage = 'url(img/construct-'+count+'.png)';
			sex.textContent=personSex[0].value;
			views.textContent=selectViews.options[selectViews.selectedIndex].value;
			main.classList.add('fadeOut');
			main.classList.remove('fadeIn');
			main.style.display='none';
			custom.style.display='flex';
			customInfo.style.display='block';
			customChar.style.display='block';
			customStyle.style.display='block';

		});
										
										//btn Готово, если все true заполняем поля новой карточки

	readyBtn.addEventListener('click',function(){


		 if(passName==true&&passAge==true&&passBio==true){

			let name=document.getElementsByClassName('name')[2],
				age=document.getElementsByClassName('age')[2];
				name.textContent=personName.value;
				age.textContent=personAge.value;
				views.textContent=selectViews.options[selectViews.selectedIndex].value;
				bio.textContent=personBio.value;
				// mainCardsItem[1].style.display='block';
				mainCardsItem[2].style.display='block';
				main.classList.add('fadeIn');
				main.classList.remove('fadeOut');
				custom.style.display='none';
				main.style.display='block';
				personName.value='';


			}
		
			
	});
										//  Получаем целое случайное число
	function getRandomInt(min, max){	

	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}	
	
});

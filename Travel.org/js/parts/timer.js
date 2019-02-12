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

	timerLeft(0000,00,00);
}
module.exports=timer;
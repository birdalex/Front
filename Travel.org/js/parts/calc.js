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
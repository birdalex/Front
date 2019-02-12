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
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
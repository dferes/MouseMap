document.addEventListener('mousemove', function(e) {
	//console.log('X: ', e.pageX);
	//console.log(e.pageX*256 / window.innerWidth);
	const r = Math.floor(e.pageX*256 / window.innerWidth);
	const b = Math.floor(e.pageY*256 / window.innerWidth);
	//const g = Math.floor(Math.random() * 256);
	console.log(0, r, b);
	document.body.style.backgroundColor = `rgb(0, ${r}, ${b})`;

});


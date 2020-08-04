(function(){
	var calc = function(){
		var docElemetn = document.documentElement;
		var clientWidthValue = docElemetn.clientWidth > 750 ? 750 : docElemetn.clientWidth;
		docElemetn.style.fontSize  = 20*(clientWidthValue/375) + 'px';
	}
	calc()
	window.addEventListener('resize',calc);
})();
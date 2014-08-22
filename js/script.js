(function() {

	/* Lets initialise these elements */
	var bars = document.querySelectorAll('.progress'),
		progressObjects = [];

	for (var i = 0; i < bars.length; i++) {
		progressObjects.push(new Progress(bars[i], 0));
	};

	/* And bind to the button presses */
	var buttons = document.querySelectorAll('button.modifyItem');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', onButtonClick);
	};

	var selector = document.querySelector('select[name=item]');
	function onButtonClick(event) {
		var change = this.name,
			id = selector.value;

		for (var i = 0; i < progressObjects.length; i++) {
			if (progressObjects[i].elm.parent.id === id)
				progressObjects[i].add(change);
		};
	}

})();
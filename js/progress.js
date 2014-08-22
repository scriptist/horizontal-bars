function Progress(elm, percent) {
	this.elm = {
		parent: elm,
		text: elm.querySelector('.text'),
		bar: elm.querySelector('.bar')
	};
	this.percent = percent;

	this.render();
}
Progress.prototype.elm = null;
Progress.prototype.percent = 0;
Progress.prototype.render = function() {
	this.elm.bar.style.width = Math.min(this.percent, 100) + '%';
	if (this.percent > 100)
		this.elm.parent.className = 'progress over';
	else
		this.elm.parent.className = 'progress';

	this.elm.text.textContent = this.elm.text.innerText = Math.round(this.percent) + '%';
}
Progress.prototype.add = function(amount) {
	var amountInt = parseInt(amount);
	if (isNaN(amountInt))
		throw "Invalid value for Progress.add: " + amount;


	this.percent = Math.max(0, this.percent + amountInt);
	this.render();
}
Progress.prototype.subtract = function(amount) {
	this.add(-amount);
}
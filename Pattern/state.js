const PageState = function() {
	let currentState = undefined;
	
	this.init = function() {
		this.change(new HomeState());
	};
	
	this.change = function(state) {
		this.currentState = state;
	}
	
	this.getCurrentState = function() {
		return this.currentState;
	}
};

// State
const HomeState = function() {
	document.body.innerHTML = 'This is homepage';
};

const AboutState = function() {
	console.log('This is about us');
};

const ContactState = function() {
	console.log('This is how to contact us');
};


const page = new PageState();
page.init();
page.change(new ContactState());
console.log(page.getCurrentState());
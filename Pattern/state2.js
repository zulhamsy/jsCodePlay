const Document = function(name) {
	this.name = name;
	this.currentUser = 'admin';
	this.currentState = undefined;
	
	this.init = function() {
		this.currentState = new Draft();
	}
	
	this.setUser = function(user) {
		this.currentUser = user;
	};
	
	this.getUser = function() {
		return this.currentUser;
	};
	
	this.getCurrentState = function() {
		return this.currentState;
	}
	
	this.changeState = function() {
		this.currentState.publish(this);
	}
	
	this.publish = function(state) {
		this.currentState = state;
	};
};

// States
const Draft = function() {
	this.state = 'Drafted';
	this.publish = function(current) {
		if(current.getUser() == 'admin') {
			current.publish(new Moderated());
		} else {
			console.log('Only Admin can do that');
		}
	};
};

const Moderated = function() {
	this.state = 'Moderated';
	this.publish = function(current) {
		if(current.getUser() == 'admin' || current.getUser == 'user') {
			current.publish(new Published());
		} else {
			console.log('What user are you using?');
		}
	};
};

const Published = function() {
	this.state = 'Published';
	this.publish = function(current) {
		if(current.getUser() == 'admin') {
			console.log('Welcome back admin');
		}
	};
};

// testing
let bookOne = new Document('Harry Potter');
bookOne.init();
bookOne.changeState();
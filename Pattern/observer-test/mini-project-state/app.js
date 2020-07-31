const $ = (e) => document.querySelector(e);

const TrafficLight = function() {
  let currentState = undefined,
    prevState = undefined;

  this.init = function() {
    this.currentState = new Red();
  };

  this.getState = function() {
    return this.currentState;
  };

  this.getPrevState = function() {
    return this.prevState;
  }

  this.changeState = function(state) {
    this.prevState = this.currentState;
    this.currentState = state;
  };

  this.next = function() {
    this.currentState.nextState(this);
  };
};

const Red = function() {
  $('#red').classList.add('red');
  this.nextState = function(context) {
    context.changeState(new Yellow());
    this.redToYellow();
  };

  this.redToYellow = function() {
    $('#red').classList.remove('red');
    $('#action-btn').classList.remove('btn-warning');
    $('#action-btn').classList.add('btn-success');
    $('#action-btn').textContent = 'go';
  };
};

const Yellow = function() {
  $('#yellow').classList.add('yellow');
  this.nextState = function(context) {
    if (context.getPrevState() instanceof Red) {
      context.changeState(new Green());
      this.yellowToGreen();
    } else {
      context.changeState(new Red());
      this.yellowToRed();
    }
  };

  this.yellowToGreen = function() {
    $('#yellow').classList.remove('yellow');
    $('#action-btn').classList.remove('btn-success');
    $('#action-btn').classList.add('btn-warning');
    $('#action-btn').textContent = 'prepare to stop';
  };

  this.yellowToRed = function() {
    $('#yellow').classList.remove('yellow');
    $('#action-btn').classList.remove('btn-danger')
    $('#action-btn').classList.add('btn-warning');
    $('#action-btn').textContent = 'prepare to go';
  };
};

const Green = function() {
  $('#green').classList.add('green');
  this.nextState = function(context) {
    context.changeState(new Yellow());
		this.greenToYellow();
  };

  this.greenToYellow = function() {
    $('#green').classList.remove('green');
    $('#action-btn').classList.remove('btn-warning')
    $('#action-btn').classList.add('btn-danger');
    $('#action-btn').textContent = 'stop';
  }
};

let traffic = new TrafficLight();
traffic.init();

$('#action-btn').addEventListener('click', e => {
  traffic.next();
  e.preventDefault();
})
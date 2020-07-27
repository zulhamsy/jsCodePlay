const Subject = (function() {
  let observer = [];

  function subscribe(fn) {
    observer.push(fn);
  }

  function unsubscribe(fnRemove) {
    observer = observer.filter(fn => {
			if(fn != fnRemove) return fn;
    });
  }
  
  function notify(param) {
  	observer.forEach(fn => {
  		fn(param);
  	})
  }
  
  return {
  	subs: subscribe,
  	unsub: unsubscribe,
  	notify
  }
})();

const lengthUpdate = function(target) {
	document.querySelector('#comm-length').textContent = `${target.length}/100`;
};

const validation = function(target) {
	if(target.length > 100) {
		document.querySelector('#input').classList.add('is-invalid');
	} else {
		document.querySelector('#input').classList.remove('is-invalid');
	}
};

Subject.subs(lengthUpdate);
Subject.subs(validation);

document.querySelector('#input').addEventListener('keyup', e => {
	Subject.notify(e.target.value);
	e.preventDefault();
})
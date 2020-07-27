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

const $ = function(query) {
	return document.querySelector(query);
};

const lengthUpdate = function(target) {
	$('#comm-length').textContent = `${target.length}/100`;
};

const buttonValid = function(bool) {
	if(bool) {
		$('button').disabled = false;
	} else {
		$('button').disabled = true;
	}
};

const validation = function(target) {
	if(target.length > 100) {
		$('#input').classList.add('is-invalid');
		$('#comm-length').classList.replace('text-muted', 'text-danger');
	} else {
		$('#input').classList.remove('is-invalid');
		$('#comm-length').classList.replace('text-danger', 'text-muted');
	}
};

const wordValid = function(target) {
	const re = /(bodoh|goblok|tolol|dungu|bego)/gi;
	if(re.exec(target)) {
		$('#input').classList.add('is-invalid');
		$('#invalid').textContent = 'Your tweet contains bad word(s)';
		buttonValid(false);
	} else {
		$('#invalid').textContent = '';
		buttonValid(true);
	}
};

Subject.subs(lengthUpdate);
Subject.subs(validation);
Subject.subs(wordValid);

$('#input').addEventListener('keyup', e => {
	Subject.notify(e.target.value);
	e.preventDefault();
});
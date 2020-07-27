class Subject {
  constructor() {
    this.observer = [];
  }

  subscribe(fn) {
    this.observer.push(fn);
  }

  unsubscribe(fnRemove) {
    this.observer = this.observer.filter(
      fn => {
        if (fn != fnRemove) return fn;
      });
  }

  notify() {
    this.observer.forEach(fn => {
      fn();
    });
  }
}

const subs1 = function() {
    console.log('First subs');
  },
  subs2 = function() {
    console.log('Second subs');
  };


const subject = new Subject();
subject.subscribe(subs1);
subject.subscribe(subs2);
subject.unsubscribe(subs1);
subject.notify();
// Revealing Module Pattern
const UIController = (function() {
  let data = [];
  
  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }
  
  function getItem(id) {
    return data.find((item) => {
      return item.id == id;
    });
  }
  
  return {
    // return private method ke public
    // return as object literal
    add: add,
    get: getItem
  }
})();

UIController.add({id: 1, name: 'John'});
console.log(UIController.get(1));
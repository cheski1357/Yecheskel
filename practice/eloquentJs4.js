const object = {
    one: 'a',
    two: 'b'
}
console.log(object)

Object.assign(object, {three:'c', four:'d'});
console.log(object)

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry('working',true);

console.log(journal)

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
remember('make appointment', 'get kids', 'give the plank');
//getTask();
//rememberUrgently('go to dentist');
console.log(todoList)

const thisArray = ['making money','checking the market'];
console.log(getTask()+" here")



thisArray.forEach(element => {
    console.log(element)

});


console.log(thisArray)
console.log(thisArray.indexOf('checking the Market'))

const thisOneArray = [1,2,3];
console.log('ehHeleo'.slice(3,2))

let string = JSON.stringify({squirrel: false,
    events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
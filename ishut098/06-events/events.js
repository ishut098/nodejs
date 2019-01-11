const EventEmitter = require('events')

/**
 * 
 */


class Stopwatch extends EventEmitter{

}

const stopwatch = new Stopwatch();
console.log( stopwatch.__proto__.__proto__ );

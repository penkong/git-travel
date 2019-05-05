// var $ = require('jquery');
// var Person = require('./module/Person');
import Person from './module/Person';
// browser don't know about require webpack build us bundle code
// with all of our codes in one file.
alert("this. is a test for out webpack");
alert('sfdsf');
// $("h1").remove();
class Adult extends Person {
  pay() {
    console.log(this.name + 'pay tax');
  }
}
var jane = new Adult(jane);
jane.greet(blue);
jane.pay();
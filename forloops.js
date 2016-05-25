


for (var num i = 0; i <= 3;  i ++)  {
  debugger
	console.log (i)
}

for (var num i = 10; i >=0;  i --)  {
	console.log (i)
}


var students = ['damon', 'phillip', 'winston', 'amanda', 'caleb', 'geoff', 'gabe', 'logan', 'riggan', 'david']

for (var i = 10; i < students.length; i++) {
  console.log(students[i] + " is awesome!!!");
}


var name = prompt('user enter your name');
var gender = prompt('are you male or female?');
// if person is a female then offer one shoe. if male offer another shoe. and a case if neither

if(gender === 'female') {
  // do female things
  console.log('YOUSAID YOU ARE FEMALE');
} else if (gender === 'male') {
  // do male things
  console.log('YOU SAID YOU ARE MALE');
  var shoesPlease = confirm('are you interested in buying shoes?');
  if (shoesPlease) {
    // they want shoes
    var userShoes = prompt('Do you want 1). Nikes, 2). Cole Haans, 3). Chacos, 4). Sketches, 5). Crocs?');
    switch (userShoes.toLowerCase()) {
      case '1' || 'nikes':
      console.log('GREAT CHOICE!!')
      break;
      case '2' || 'cole haans':
      console.log('interesting')
      break;
      case '3' || 'chacos':
      console.log('you amazing hippie');
      break;
      default:
      console.log('looks like we are getting you new balances')
      break
    }
  } else {
    // they do not want shoes
    var keepCustomer = confirm('Are you sure you do not want any shoes?');
    while (keepCustomer === true) {
      prompt('I cannot allow you to leave I have to stay here forever');
      // makes in infite loop and stuck on page
    }
  }
} else {
  // we do not judge
  console.log ('WE DO NOT JUDGE')
}

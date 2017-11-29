<<<<<<< HEAD
function maybeTrue() {
  return Math.random() >= 0.5;
}

=======
>>>>>>> 11160d1a0a265e46fb13980a30b53307aeb52ce3
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.');
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
<<<<<<< HEAD
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number--);
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    array.shift();
  } while (array.length > 0 && maybeTrue());
  return array;
=======
>>>>>>> 11160d1a0a265e46fb13980a30b53307aeb52ce3
}
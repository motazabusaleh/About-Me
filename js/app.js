'use strict';

var userName = prompt('What is your name?');
// console.log('Welcome' + greeting);
alert('Welcome ' + userName);

var first = prompt('Are you ready to know more about Me through playing this game? \n[please answer by typing: (Yes/No) or (Y/N)]');

if (first.toLowerCase() === 'yes' || first.toLowerCase() === 'y') {
	// console.log('Welcome, My Name is Mohammad Nour Rezek');
	alert('Welcome, My Name is Mohammad Nour Rezek');
} else {
	// console.log('I am sorry for you');
	alert('I am sorry for you');
}

var second = prompt('Are you think i have a BA degree? \n[please answer by typing: (Yes/No) or (Y/N)]');

if (second.toLowerCase() === 'yes' || second.toLowerCase() === 'y') {
	// console.log('Right, i have a BA of Science in Software Engineering');
	alert('Right, i have a BA of Science in Software Engineering');
} else {
	// console.log('Wrong, i have a BA of Science in Software Engineering');
	alert('Wrong, i have a BA of Science in Software Engineering');
}

var third = prompt('Are you think that i have knowledge of programmin? \n[please answer by typing: (Yes/No) or (Y/N)]');

if (third.toLowerCase() === 'yes' || third.toLowerCase() === 'y') {
	// console.log('That\'s right, i know python, js and c#');
	alert('That\'s right, i know python, js and c#');
} else {
	// console.log('Wrong, i know python, js and c#');
	alert('Wrong, i know python, js and c#');
}

var forth = prompt('Are you think that i have experience before? \n[please answer by typing: (Yes/No) or (Y/N)]');

if (forth.toLowerCase() === 'yes' || forth.toLowerCase() === 'y') {
	// console.log('Right, i have a total of three years of experience.');
	alert('Right, i have a total of three years of experience.');
} else {
	// console.log('Wrong, i have a total of three years of experience.');
	alert('Wrong, i have a total of three years of experience.');
}

var fifth = prompt('Are you think that i have repositories on github? \n[please answer by typing: (Yes/No) or (Y/N)]');

if (fifth.toLowerCase() === 'yes' || fifth.toLowerCase() === 'y') {
	// console.log('Right, you can see them here: <a href="https://github.com/Mohammad-Nour-Rezek?tab=repositories">GitHub</a>');
	alert('Right, you can see them here: \n https://github.com/Mohammad-Nour-Rezek?tab=repositories');
} else {
	// console.log('Wrong, you can see them here: <a href="https://github.com/Mohammad-Nour-Rezek?tab=repositories">GitHub</a>');
	alert('Wrong, you can see them here: \n https://github.com/Mohammad-Nour-Rezek?tab=repositories');
}

let j = 0;

for (let i = 0; i < 4; i++) {
	var guess = prompt('Please guess a number between 0 and 10 \n you have 4 times to try \n now you have ' + (4 - i) + ' left.');

	if (parseFloat(guess) >= 0 || parseFloat(guess) <= 10) {
		switch (parseFloat(guess)) {
			case 1:
				j++;
				break;
			case 3:
				j++;
				break;
			case 5:
				j++;
				break;
			case 8:
				j++;
				break;		
		}
	} else if (parseFloat(guess) < 0) {
		alert('Too Low!');
	} else {
		alert('Too High!');
	}
}
alert('You have ' + j + ' correct answers! \n The correct answers is: 1, 3, 5, 8');

// console.log('Thank you, See you again ' + userName);
alert('Thank you, See you again ' + userName);
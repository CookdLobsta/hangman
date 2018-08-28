//Create array of words
//choose word randomly
//Create underscores based on length of words
//get users guess
//check if guess is right
//if right push to right array
//if right push to wrong array


//array of words
const phrases = ["Early bird gets the worm", "Read between the lines", "I can eat a horse", "Twenty-four seven", "Cat got your tounge", "One in one million", "I beg to differ", "Easier said than done", "Add insult to injury", "Don't cry over spilled milk", "Curiosity killed the cat", "Two peas in a pod", "That's the last straw", "Piece of cake", "Speak of the devil", "Go the whole nine yards", "An eye for an eye", "Hit the hay", "Stab someone in the back", "Quit cold turkey", "Cut to the chase", "Best of both worlds", "Kill two birds with one stone", "Break a leg", "Hit the nail on the head", "Kick the bucket"];

//choose word randomly
let randWord = Math.floor(Math.random() * phrases.length);
let chosenWord = phrases[randWord];
let rightWord = [];
let wrongWord = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName('underscores');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
//underscores based on length of word
let generateUnderscore = () => {
		for(let i = 0; i < chosenWord.length; i++) {
			underScore.push('_');
		}
		return underScore;
}

//get user guess
document.addEventListener('keypress', (event) => {
		let keyword = String.fromCharCode(event.keyCode);
//if user guess is right
		if(chosenWord.indexOf(keyword)>-1) {
		//add to right words array
		rightWord.push(keyword);
		//replace underscore with right letter
		underScore[chosenWord.indexOf(keyword)]=keyword;
		docUnderScore[0].innerHTML = underScore.join(' ');
		docRightGuess[0].innerHTML = rightWord;
		//checks to see match
		if(underScore.join('')==chosenWord){
			alert('You Win');
			}
		}
		else {
			wrongWord.push(keyword);
			docWrongGuess[0].innerHTML = wrongWord;
		}
});


docUnderScore[0].innerHTML = generateUnderscore().join(' ');;
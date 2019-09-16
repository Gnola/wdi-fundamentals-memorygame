console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"]
var cardOne = cards[0]
var cardTwo = cards[2]
var cardsInPlay = []

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);


if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert ("You've found a match!");
}
else { (cardsInPlay[0] !== cardsInPlay[1])
	alert ("Sorry, try again!");
}
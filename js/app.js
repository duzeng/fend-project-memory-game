var app=function(){ 

var symbols=new Set(["anchor","bicycle","bolt","bomb","cube","diamond","leaf","paper-plane-o"]);

/**
 * Card class
 * @param {*  card's symbol} symb 
 */
var Card=function(symb){
    this.symbol=symb;
    this.show=false;
    this.matched=false;
}

/**
 * display the card
 */
Card.prototype.display=function(){
    this.show=true;
}

/**
 * hide the card
 */
Card.prototype.hide=function(){
    this.show=false;
}

/**
 * card is matched.
 */
Card.prototype.match=function(){
    this.matched=true;
}

/*
 * Create a list that holds all of your cards
 */ 
var cards=[], cardsOpened=[], moveCounter=0;

symbols.forEach(item=>{
    cards.push(new Card(item))
    cards.push(new Card(item))
}); 

function addCardToOpenList(card){
    cardsOpened.push(card);
}

function resetOpenList(){
    for (var index = cardsOpened.length-1; index >=0; index--) {
        cardsOpened[index].hide();
        cardsOpened.splice(i,1); 
    }
}

function isAllMatched(){
    return cards.reduce( (x,y)=> x.matched && y.matched,true);
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
function cardsClickEventHandler(index){
    var card=cards[index];
    card.display();
    addCardToOpenList(card);
    if (cardsOpened.length===2){
        if (cardsOpened[0].symbol===cardsOpened[1].symbols){
            cardsOpened[0].match();
            cardsOpened[1].match();
        } else {
            resetOpenList();
        }
    }
    moveCounter++;

    if (isAllMatched()){
        // TODO done
    }
}

function getCards(){
    return cards;
}
function restart(){
    moveCounter=0;
    cards=shuffle(cards);
}

    return {
        getCards: getCards,
        restart: restart
    } 
}();

;var app=function(){ 

const SYMBOLS=new Set(['anchor','bicycle','bolt','bomb','cube','diamond','leaf','paper-plane-o']);
const GRADES=3;
/*
 * Create a list that holds all of your cards
 */ 
function App(){
    this.moveCounter=0;
    this.cards=[];
    this.cardsOpened=[]; 
    this.win=false;
    this.grade=3;
    this._init();
}

App.prototype._init=function(){
    this.moveCounter=0;
    this.cards=[];
    this.grade=3;
    SYMBOLS.forEach(item=>{
        this.cards.push(new Card(item))
        this.cards.push(new Card(item))
    }); 
    this.cards=shuffle(this.cards);
}


App.prototype.addCardToOpenList=function(card){
    this.cardsOpened.push(card);
}

App.prototype.resetOpenList=function(){
    for (let index = this.cardsOpened.length-1; index >=0; index--) { 
        this.cardsOpened.splice(index,1); 
    }
}

App.prototype.isAllMatched=function(){ 
    this.win=this.cards.map(x=>x.matched).reduce((x,y)=> x && y);
}

App.prototype.increaseMoveCounter=function(){
   this.moveCounter++;
   if (this.grade<=0 || this.moveCounter<=16+2) return;
   if (this.moveCounter>16+2 && this.moveCounter<=16+8){
        if (this.grade<=2) return; 
   } else if (this.moveCounter>16+8 && this.moveCounter<=16+16){
        if (this.grade<=1) return; 
   }
   this.grade--; 
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

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
App.prototype.cardsClickEventHandler=function(index){
    const card=this.cards[index];
    if (card.matched) return;

    card.display();
    this.addCardToOpenList(card);
    const length=this.cardsOpened.length;
    if (length>=2){
        
        if (this.cardsOpened[length-2].symbol===this.cardsOpened[length-1].symbol){
            this.cardsOpened[length-2].match();
            this.cardsOpened[length-1].match();
        } else {
            this.cardsOpened[length-2].hide();
            this.cardsOpened[length-1].hide();
        }

        this.resetOpenList();
        
    }
    this.increaseMoveCounter();  
    this.isAllMatched(); 
}

App.prototype.getCards=function(){
    return this.cards;
}

App.prototype.restart=function(){
    this._init();
}

    return {
        App
    } 
}();

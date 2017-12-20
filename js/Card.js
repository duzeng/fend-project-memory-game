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
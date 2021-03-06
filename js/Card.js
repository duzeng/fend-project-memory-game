/**
 * class Card
 * @param {*  card's symbol} symb 
 */
var Card=function(symb){ 
  this.symbol=symb;
  // show state
  this.show=false;
  // matched state
  this.matched=false;
}

/**
* Display the card
*/
Card.prototype.display=function(){
  this.show=true;
}

/**
* Hide the card
*/
Card.prototype.hide=function(){
  this.show=false;
}

/**
 * delay the hide action after mismatch
 * @param {* delay time} time 
 */
Card.prototype.hideAfterMismatch=function(time=1500){
  this.matched=false;
  setTimeout(() => {
    this.hide();
  }, time); 
}

/**
* A successful match.
*/
Card.prototype.match=function(){
  this.matched=true;
}
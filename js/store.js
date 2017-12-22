;var store=(function(){
  const KEY="RANKING-LIST";

  function getRank(){
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  }

  function setRank(rank={}){
    localStorage.setItem(KEY,JSON.stringify(rank));
  }

  function clearRank(){
    localStorage.removeItem(KEY);
  }

  return {
    getRank,
    setRank,
    clearRank
  }
})(); 
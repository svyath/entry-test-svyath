export const getLastWordLength = str => {
  const THE_LAST = str.trim().split(" ");

  if(THE_LAST.length > 0){
    return THE_LAST[THE_LAST.length - 1].length
  }
  else{
    return 0
  }
};

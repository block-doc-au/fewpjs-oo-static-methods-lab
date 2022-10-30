
class Formatter {
  //add static methods here

  static capitalize(phrase){
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
  };

  static sanitize(phrase){
    return phrase.replace(/[^A-Za-z0-9-'' ']+/g, '');
  }

  static titleize(phrase){
    let modPhraseArray = []; 
    var intPhraseArray = phrase.match(/("[^"]+"|[^"\s]+)/g); 
    intPhraseArray.forEach(element => {
    switch (element){
      case "but":
      case "the":
      case "a":
      case "an":
      case "of":
      case "and":
      case "for":
      case "at":
      case "by":
      case "from":
        modPhraseArray.push(element);
        break;

      default:
        // let newElement = element.charAt(0).toUpperCase() + element.slice(1);
      let newElement  = this.capitalize(element);
        modPhraseArray.push(newElement);
        break;
    }
  });
var finalPhrase = "";
  for (let i = 0; i < modPhraseArray.length; i++) {
  finalPhrase += ((modPhraseArray[i]) + " ");
};
  console.log(`finalPhrase is: ${finalPhrase}`);
   let intPhrase = this.capitalize(finalPhrase);
    return (intPhrase.slice(0,-1));
  }
}

// const testVar = Formatter.capitalize('this is a test');
// console.log(`The testVar is : ${testVar}.`);
// const secondTestVar = Formatter.titleize('how and but why are you all doing?');
// console.log(`The secondTestVar (array) is : ${secondTestVar}`);


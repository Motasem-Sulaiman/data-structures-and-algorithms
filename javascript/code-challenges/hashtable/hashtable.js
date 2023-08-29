class Hashtable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  set(key, value) {
    const hash = this.hash(key);
    this.map[hash] = { [key]: value };
  }

  hash(key) {
    const asciiCode = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt();
    }, 0);
    const prime = asciiCode * 599;
    const index = prime % this.size;
    return index;
  }
  get(key) {
    const hash = this.hash(key);
    const index = this.map[hash];

    return index[key];
  }
  has(key) {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i] && this.map[i].hasOwnProperty(key)) {
        console.log(this.map[i]);
        return true;
      }
    }
    return false;
  }
  keys() {
    const keysArr = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        keysArr.push(Object.keys(this.map[i])[0]);
      }
    }

    return keysArr;
  }
  //////////////////////////////////////////////////////// challenge 31
  repeatedWord(string) {
    const words = string.toLowerCase().split(/\W+/);
    const wordMap = new Hashtable(words.length);
    for (const word of words) {
      if (word) {
        if (wordMap.has(word)) {
          return word;
        }
        wordMap.set(word, true);
      }
    }
    return "No repeated";
  }
}
module.exports = Hashtable;


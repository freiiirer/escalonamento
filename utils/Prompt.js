const prompt = require('prompt-sync')({sigint:true});

class Prompt {
  getNumber(text) {
    return Number(this.getText(text))
  }

  getText(text) {
    return prompt(text)
  }
}

module.exports = new Prompt();
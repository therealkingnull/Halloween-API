//Jokes
const halloweenJoke = require('./halloween/index.json');

const randomHalloweenJoke = () => {
  return halloweenJoke[Math.floor(Math.random() * halloweenJoke.length)];
}


//Facts
const facts = require('./halloween/facts.json');

const randomHalloweenFact = () => {
  return facts[Math.floor(Math.random() * facts.length)];
}


//Images
const image = require('./halloween/images.json');

const randomHalloweenImage = () => {
  return image[Math.floor(Math.random() * image.length)];
}


//Export
module.exports = { halloweenJoke, randomHalloweenJoke, randomHalloweenFact, randomHalloweenImage };

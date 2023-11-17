/* 
Create a Factory Function & Add Properties
Factory Function Pattern for Pets
*/

const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
console.log(statusButton, pets); //LOG
// createPet function
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    // sleep function
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    // play  function
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

console.log(sora, clover, baxter, cleo, francine);

clover.sleep();
baxter.play();

console.log(clover, baxter);

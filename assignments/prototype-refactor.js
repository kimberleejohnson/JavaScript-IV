/* Below I've copied in my code from the Javascript-III assignment. I've then refactored to ES6 classes. 

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/


// Refactored GameObject 
class GameObject {
    constructor(attributes){
        this.createdAt = attributes.createdAt; 
        this.name = attributes.name; 
        this.dimensions = attributes.dimensions; 
    }
    // Methods 
    destroy() {
        return `${this.name} was removed from the game.`; 
    }
} // GameObject 


// Deprecated: Prototype GameObject construction 
// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt; 
//     this.name = attributes.name; 
//     this.dimensions = attributes.dimensions; 
//   }
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`; 
//   }
  
// GameObject tests  
//     const kimee = new GameObject ({
//       createdAt: new Date(), 
//       name: 'kimee',
//      dimensions: {
//         length: 3, 
//        width: 3, 
//         height: 3
//      }
//    }); 
  
//    console.log(kimee); 
  
 // testing my GameObject method 
//   console.log(kimee.destroy()); 
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
// Refactored CharacterStats 

// Extends links up the _proto_ so super knows where to point to  
class CharacterStats extends GameObject {
    constructor(characterAttributes) {
        // super allows the use of attributes and methods from GameObject 
        super(characterAttributes); 
        this.healthPoints = characterAttributes.healthPoints;
    }
    // Unique CharacterStats methods 
    takeDamage(){
        return `${this.name} took damage.`; 
      } 
} // CharacterStats ends 

  // Deprecated: prototype construction of CharacterStats
//    function CharacterStats(characterAttributes){
//      GameObject.call(this, characterAttributes); 
//      this.healthPoints = characterAttributes.healthPoints; 
//    }
  
//    // Setting up CharacterStats to inherit GameObject's prototype, including the function 
//    CharacterStats.prototype = Object.create(GameObject.prototype); 
  
//    CharacterStats.prototype.takeDamage = function() {
//      return `${this.name} took damage.`; 
//    }
  
   // Testing Character Stats constructor function 
    //  const kimee = new CharacterStats ({
    //      createdAt: new Date(), 
    //      name: 'kimee',
    //      dimensions: {
    //        length: 3, 
    //        width: 3, 
    //        height: 3
    //      },
    //      healthPoints: 10  
    //    }); 
  
    //  console.log(kimee); 
  
    // // Testing both functions
    //    console.log(kimee.destroy()); 
    //    console.log(kimee.takeDamage()); 
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting 
    * in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
// Refactored Humanoid
// Extends links up the _proto_ so super knows where to point to  
class Humanoid extends CharacterStats {
    constructor(humanoidAttributes) {
        // super allows the use of attributes and methods from GameObject 
        super(humanoidAttributes); 
        this.team = humanoidAttributes.team; 
        this.weapons = humanoidAttributes.weapons; 
        this.language = humanoidAttributes.language; 
    }
    // Unique Humanoid methods 
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`; 
      } 
} // Humanoid ends 


//   // Deprecated: prototype construction of Humanoid 
//   function Humanoid(humanoidAttributes){
//     CharacterStats.call(this, humanoidAttributes); 
//     this.team = humanoidAttributes.team; 
//     this.weapons = humanoidAttributes.weapons; 
//     this.language = humanoidAttributes.language; 
//   }
  
//   // Setting up Humanoid to inherit GameObject's prototype, including the function 
//   Humanoid.prototype = Object.create(GameObject.prototype); 
  
//   // Setting up Humanoid to inherit CharacterStat's prototype, including the function 
//   Humanoid.prototype = Object.create(CharacterStats.prototype); 
  
//   // Creating new greet protoype method 
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`; 
//   }
  
  /*
    === Villain (This is my bad guy constructor function) ===
    * Inherits from the Humanoid constructor function.  
    * Method called shoot that removes health points from objects which could result in destruction if health gets to 0 or drops below 0
//   */
  
class Villain extends Humanoid {
    constructor(villainAttributes) {
        // super allows the use of attributes and methods from GameObject 
        super(villainAttributes); 
        this.catchPhrase = villainAttributes.catchPhrase;
    }
    // Unique Villain methods 
        shoot (victim) {
       let victimHP = victim.healthPoints - 15; 
        
       if (victimHP <= 0) {
           return `${this.name} slashes ${victim.name} for ${victimHP} damage. ${victim.name} is out of the game.`; 
        } else {
            return `${this.name} slashes ${victim.name} for ${victimHP} damage`; 
             } 
       } 
} // Villain ends 


// Deprecated: protoype Villain construction
//   function Villain(villainAttributes){
//     Humanoid.call(this, villainAttributes); 
//     this.catchPhrase = villainAttributes.catchPhrase; 
//   }
  
//   // Setting up Villain to inherit Humanoids prototype, including the function
//   Villain.prototype = Object.create(Humanoid.prototype);  
  
//   // Method to remove health points 
//   Villain.prototype.shoot = function(victim) {
//     let victimHP = victim.healthPoints - 15; 
  
//     if (victimHP <= 0) {
//       return `${this.name} slashes ${victim.name} for ${victimHP} damage. ${victim.name} is out of the game.`; 
//     } else {
//       return `${this.name} slashes ${victim.name} for ${victimHP} damage`; 
//     } 
//   }
  
//   /*
//     === Hero (This is my good guy constructor function) ===
//     * Inherits from the Humanoid constructor function.  
//     * Method called shoot that removes health points from objects which could result in destruction if health gets to 0 or drops below 0
//   */

class Hero extends Humanoid {
    constructor(heroAttributes) {
        // super allows the use of attributes and methods from GameObject 
        super(heroAttributes); 
        this.superPower = heroAttributes.superPower; 
    }
    // Unique Hero methods 
    fightBack(victim) {
        let victimHP = victim.healthPoints - 10; 
        victim.healthPoints = victimHP; 
        // Beginning code for the loop 
        if (victimHP <= 0) {
        return `${this.name} slashes ${victim.name} for ${victimHP} damage. ${victim.name} is out of the game.`; 
        } else {
        return `${this.name} slashes ${victim.name} for ${victimHP} damage`; 
        } 
      } 
} // Hero ends 

// Deprecated: Prototype Hero construction 
  
//   function Hero(heroAttributes){
//     Humanoid.call(this, heroAttributes); 
//     this.superPower = heroAttributes.superPower;   
//   }
  
//   // Setting up Hero to inherit Humanoids prototype, including the function
//   Hero.prototype = Object.create(Humanoid.prototype);  
  
//   // Function to remove health points 
//   Hero.prototype.fightBack = function(victim) {
//     let victimHP = victim.healthPoints - 10; 
//     victim.healthPoints = victimHP; 
//     // Beginning code for the loop 
//     if (victimHP <= 0) {
//       return `${this.name} slashes ${victim.name} for ${victimHP} damage. ${victim.name} is out of the game.`; 
//     } else {
//       return `${this.name} slashes ${victim.name} for ${victimHP} damage`; 
//     } 
//   }
  
  // Uncommenting all my tests 
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });

    const SassyPants = new Villain ({
        createdAt: new Date(),
         dimensions: {
           length: 5,
           width: 10,
           height: 10,
         },
         healthPoints: 100,
         name: 'SassyPants',
          team: 'Sassy House',
          weapons: [
            'Sharp tongue',
          ],
          language: 'Common Tongue',
          catchPhrase: "That's the way the cookie crumbles!"
      }); 
  
 const SuperSucculent = new Hero ({
    createdAt: new Date(),
      dimensions: {
        length: 100,
        width: 100,
       height: 100,
      },
     healthPoints: 1000,
       name: 'Super Succulent',
     team: 'Spikey Plants',
     weapons: [
       'Spikey spikes',
      ],
       language: 'Common Tongue',
      superPower: "Endurance"
   }); 

     console.log(mage.createdAt); // Today's date
     console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
     console.log(swordsman.healthPoints); // 15
     console.log(mage.name); // Bruce
     console.log(swordsman.team); // The Round Table
     console.log(mage.weapons); // Staff of Shamalama
     console.log(archer.language); // Elvish
     console.log(archer.greet()); // Lilith offers a greeting in Elvish.
     console.log(mage.takeDamage()); // Bruce took damage.
     console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
     console.log(SassyPants.shoot(mage)); // Test for my Villain constructor function 
     console.log(SuperSucculent.fightBack(mage)); // Test for my Hero constructor function 

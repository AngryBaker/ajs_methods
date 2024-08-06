export default class Character {
    constructor(name, type){
      if (typeof name === "string" && name.length > 1 && name.length < 11) {
          this.name = name; 
          this.health = 100;
          this.level = 1;
      } else {
          throw new Error("Некорректные данные")
      }
  
      if (typeof type === "string" && (type === "Bowerman" || type === "Swordsman" || type === "Magician" || type === "Daemon" || type === "Undead" || type === "Zombie")) {
          this.type = type;
      } else {
        throw new Error("Некорректные данные")
      }

    } 

    levelUp() {
        if (this.health !== 0){
            this.level += 1;
            this.health = 100;
            this.attack *= 1.2;
            this.defence *= 1.2;
        } else {
            throw new Error("нельзя повысить левел умершего");
        }
    }

    damage(points) {
        if(this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
            if (this.health < 0) {
                this.health = 0;
            }
        }
    }


    
  }
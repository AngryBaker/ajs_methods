// TODO: write your code here
import Character from './Character';

const hero = new Character("Bain", "Undead");

hero.damage(35);
console.log(hero.health);
hero.levelUp();
console.log(hero.health, hero.level);

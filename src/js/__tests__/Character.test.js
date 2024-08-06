import Character from '../Character';

const hero = new Character("Bain", "Undead");
hero.attack = 25;
hero.defence = 25;

test('should damage', () => {
  hero.damage(50);
  const result = hero.health;

  expect(result).toBe(62.5);
});

test('should lvlup', () => {
  hero.levelUp();
  const result = hero.level;

  expect(result).toBe(2);
});

test('should error for name', () => {
  expect(() => new Character(55, "Undead") ).toThrow("Некорректные данные");
});

test('should error for type', () => {
  expect(() => new Character("Bob", 55) ).toThrow("Некорректные данные");
});

test('should error for died lvlup', () => {
  hero.health = 0;
  expect(() => hero.levelUp() ).toThrow("нельзя повысить левел умершего");
});

test('shouldnt be negativ', () => {
  hero.damage(500);
  expect(hero.health).toBe(0);
});



const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const mageFunction = () => {
    if (mage.mana <= 15) {
        return {
            damage: 'Não possui mana suficiente',
            mana: 0,
        }
    }

    return {
        damage: Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
        mana: 15,
    }
}
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined
};

const warriorDamage = () => Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
  
const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined
};

const dragonDamage = () => Math.round(Math.random() * (dragon.strength - 15) + 15);
  
const battleMembers = { mage, warrior, dragon };

console.log(dragonDamage());

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

const gameActions = {
    // 1ª HOF
    warrior: (warriorDamage) => {
        const warriorInfo = warriorDamage();
        battleMembers.dragon.healthPoints -= warriorInfo;
        battleMembers.warrior.damage = warriorInfo;
    },
    mage: (mageFunction) => {
        const mageInfo = mageFunction();
        dragon.healthPoints -= mageInfo.damage;
        mage.damage = mageInfo.damage;
        mage.mana -= mageInfo.mana;
    },
    dragon: (dragonDamage) => {
        const dragonInfo = dragonDamage();
        mage.healthPoints -= dragonInfo;
        warrior.healthPoints -= dragonInfo;
        dragon.damage = dragonInfo;
    },
    result: () => {
        return battleMembers;
    }
  };

console.log(gameActions.result());
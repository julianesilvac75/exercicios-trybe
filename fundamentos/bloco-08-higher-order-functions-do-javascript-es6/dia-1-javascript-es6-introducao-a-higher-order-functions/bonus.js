const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
const mageFunction = () => {
    if (mage.mana < 15) {
        return {
            damage: 'Não possui mana suficiente',
            spentMana: 0,
        }
    }

    return {
        damage: Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
        spentMana: 15,
    }
}

//2 - Crie uma função que retorna o dano causado pelo warrior .
const warriorDamage = () => Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);

// 1 - Crie uma função que retorna o dano do dragão.
const dragonDamage = () => Math.round(Math.random() * (dragon.strength - 15) + 15);
  
const battleMembers = { mage, warrior, dragon };

// PARTE II
const gameActions = {
    warrior: (warriorDamage) => {
        const warriorInfo = warriorDamage();
        battleMembers.dragon.healthPoints -= warriorInfo;
        battleMembers.warrior.damage = warriorInfo;
    },
    mage: (mageFunction) => {
        const mageInfo = mageFunction();
        battleMembers.dragon.healthPoints -= mageInfo.damage;
        battleMembers.mage.damage = mageInfo.damage;
        battleMembers.mage.mana -= mageInfo.spentMana;
    },
    dragon: (dragonDamage) => {
        const dragonInfo = dragonDamage();
        battleMembers.mage.healthPoints -= dragonInfo;
        battleMembers.warrior.healthPoints -= dragonInfo;
        battleMembers.dragon.damage = dragonInfo;
    },
    result: () => {
        gameActions.warrior(warriorDamage);
        gameActions.mage(mageFunction);
        gameActions.dragon(dragonDamage);

        return battleMembers;
    }
  };

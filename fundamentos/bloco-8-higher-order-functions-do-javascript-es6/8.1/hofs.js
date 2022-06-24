const emailGenerator= (name) => {
    const splittedName = name.toLowerCase().split(' ').join('_');
    return {name, email: `${splittedName}@trybe.com`};
}


const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond '), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

//console.log(newEmployees(emailGenerator)); 

const sortedNumber = () => parseInt(Math.random(0)*5+1,0)
const sorted = (number) => number === sortedNumber() ? 'Parabéns!' : 'Tente novamente';


//console.log(sorted(3))

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const test = (a,b) => {
  return b.reduce((r,d,i) => d !== 'N.A' ? d === a[i] ? r + 1 : r - 0.5 : r,0)
}

//console.log(test(RIGHT_ANSWERS,STUDENT_ANSWERS))


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
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


const damageDragon = (dragon) => (Math.random() * (dragon.strength -14)+15);
const damageWarrior = (warrior) => {
  const min = warrior.strength;
  const max = (warrior.strength) * (warrior.weaponDmg);
  return (Math.random() * (max - min )+(min));
}

const damageMage = (mage) => {
  const min = mage.intelligence;
  const max = mage.intelligence * 2;
  const dano = Math.floor(Math.random() * (max- min) + min);
  mage.mana = mage.mana - 15;
  if (mage.mana >=15){
    mage.mana = mage.mana - 15
    return {
      damage :dano , 
      manaSpent :15
    };
  }else {
    console.log("Não possui mana suficiente");
    return {
      damage :dano , 
      manaSpent :0
    }
  }
};

const gameActions = {
  turnWarrior: (damageWarrior) => {
    const dano = Math.floor(damageWarrior(warrior))
    dragon.healthPoints -= dano;
    warrior.damage = dano;
    },
  turnMage: (damageMage) => {
    const dano = damageMage(mage).damage;
    dragon.healthPoints -= dano;
    mage.damage = dano;
  },
  turnDragon: (damageDragon) => {
    const dano = Math.floor(damageDragon(dragon));
    warrior.healthPoints -= dano;
    mage.healthPoints -= dano;
    dragon.damage = dano;
  },
  turnResults: () => battleMembers,
};

gameActions.turnWarrior(damageWarrior);
gameActions.turnMage(damageMage);
gameActions.turnDragon(damageDragon);
//console.log(gameActions.turnResults());
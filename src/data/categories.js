// third-party
//import { add, sub } from 'date-fns';
import { Chance } from 'chance';

const chance = new Chance();

export const categories = [
  {
    id: 1,
    pid: null,
    name: 'Foods',
    idname: 'foods',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 2,
    pid: null,
    name: 'Drinks and Smoke',
    idname: 'drinkssmoke',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 3,
    pid: null,
    name: 'Restaurant',
    idname: 'restaurant',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 4,
    pid: null,
    name: 'Clothes',
    idname: 'clothes',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 5,
    pid: null,
    name: 'Transportation',
    idname: 'transportation',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 6,
    pid: null,
    name: 'Medicine',
    idname: 'medicine',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 7,
    pid: null,
    name: 'Accormadation',
    idname: 'accormadation',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 8,
    pid: 1,
    name: 'Rice',
    idname: 'rice',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 9,
    pid: 1,
    name: 'Ingredient',
    idname: 'ingredient',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 10,
    pid: 1,
    name: 'Meat',
    idname: 'meat',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 11,
    pid: 1,
    name: 'Seafood',
    idname: 'seafood',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 12,
    pid: 1,
    name: 'Fruit',
    idname: 'fruit',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 13,
    pid: 1,
    name: 'Vegetable',
    idname: 'vegetable',
    description: 'Data related to food ',
    date: chance.natural(),
    isActive: true,
    new: 45
  }
];

// Items list
export const items = [
  {
    id: 1,
    cid: 8,
    name: 'Mlis-Rice',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 2,
    cid: 8,
    name: 'Sticky-Rice',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 3,
    cid: 9,
    name: 'Oil',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 4,
    cid: 10,
    name: 'Beef',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 5,
    cid: 11,
    name: 'Fish',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 6,
    cid: 12,
    name: 'Apple',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 7,
    cid: 13,
    name: 'Banana',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 8,
    cid: 2,
    name: 'Water',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 9,
    cid: 3,
    name: 'Kuy Teav',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 10,
    cid: 4,
    name: 'Men Clothes',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 11,
    cid: 5,
    name: 'Bycycle',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 12,
    cid: 6,
    name: 'Para',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  },
  {
    id: 13,
    cid: 7,
    name: 'Rental-Fee',
    description: 'Rice Mlis ',
    date: chance.natural(),
    isActive: true,
    new: 45
  }
];

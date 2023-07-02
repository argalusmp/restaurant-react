import images from './images';

const foods = [
  {
    title: 'French Pork Rillettes',
    price: '40.000',
    tags: 'IDR | 300 gr',
  },
  {
    title: 'Maryland Crab Cakes',
    price: '75.000',
    tags: 'IDR | Plate',
  },
  {
    title: 'Fried Oysters',
    price: '50.000',
    tags: 'IDR | 300 gr',
  },
  {
    title: 'Shrimp Ceviche',
    price: '60.000',
    tags: 'IDR | Plate',
  },
  {
    title: 'Shrimp Ceviche  ',
    price: '50.000',
    tags: 'IDR | Plate',
  },
];

const mocktails = [
  {
    title: 'Strawba Sprtiz',
    price: '20.000',
    tags: 'Strawberry | Yogurt | banana | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '35.000',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '30.000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '30.000',
    tags: 'Cerry | Orange | Soda | Syrup',
  },
  {
    title: 'Negroni',
    price: '34.000',
    tags: 'Guava | Sweet Vermouth | lime | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { foods, mocktails, awards };

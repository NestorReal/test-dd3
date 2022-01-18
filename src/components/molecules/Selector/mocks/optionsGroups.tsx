export const categoriesOptions = [
  {
    name: 'Zona',
    options: [
      {
        id: 1,
        name: 'Norte',
      },
      {
        id: 2,
        name: 'Sur',
      },
      {
        id: 5,
        name: 'Centro',
      },
    ],
  },
  {
    name: 'Clase',
    options: [
      {
        id: 3,
        name: 'Clase A++',
      },
      {
        id: 4,
        name: 'Clase B++',
      },
    ],
  },
  {
    name: 'Estado',
    options: [
      {
        id: 6,
        name: 'Ciudad de México',
      },
    ],
  },
  {
    name: 'Tamaño',
    options: [
      {
        id: 7,
        name: 'Grande',
      },
      {
        id: 8,
        name: 'Pequeña',
      },
    ],
  },
];

export const storesOptions = [
  {
    name: 'Locaciones',
    options: [
      {
        id: 9,
        name: 'Monterrey1',
        categories: [1],
      },
      {
        id: 10,
        name: 'Tijuana',
        categories: [1],
      },
      {
        id: 12,
        name: 'Monterrey Aeropuerto',
        categories: [1],
      },
      {
        id: 13,
        name: 'Tijuana Aeropuerto',
        categories: [1],
      },
      {
        id: 5,
        name: 'Steren Centro',
        categories: [6],
      },
      {
        id: 6,
        name: 'Steren Bosques',
        categories: [6],
      },
      {
        id: 7,
        name: 'Steren Palmas',
        categories: [6],
      },
      {
        id: 11,
        name: 'Guadalajara 1',
        categories: [5],
      },
      {
        id: 8,
        name: 'Mi tiendita',
        categories: [3, 6, 7],
      },
      {
        id: 1,
        name: 'Tienda de prueba',
        categories: [2],
      },
    ],
  },
];

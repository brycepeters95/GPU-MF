export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: '2060',
    price: 299.99,
    description: 'Nvida 2060',
    image: 'http://localhost:8080/2060.jpg',
    longDescription:
      '2060',
  },
  {
    id: 2,
    name: '2070super',
    price: 399.99,
    description: 'Nvida 2070 super',
    image: 'http://localhost:8080/2070super.jpg',
    longDescription:
      '2070super',
  },
  {
    id: 3,
    name: '3060',
    price: 499.99,
    description: 'Nvdia 3060',
    image: 'http://localhost:8080/3060.jpg',
    longDescription:
      '3060',
  },
  {
    id: 4,
    name: '3070',
    price: 599.99,
    description: 'Nvidia 3070.',
    image: 'http://localhost:8080/3070.jpg',
    longDescription:
      '3070',
  },
  {
    id: 5,
    name: '5700xt',
    price: 249.99,
    description: 'amd radeon 5700xt',
    image: 'http://localhost:8080/5700xt.jpg',
    longDescription:
      '5700xt',
  },
  {
    id: 6,
    name: '6900xt',
    price: 449.99,
    description: 'amd radeon 6900xt',
    image: 'http://localhost:8080/6900xt.jpg',
    longDescription:
      '6900xt',
  }
];

export default products;

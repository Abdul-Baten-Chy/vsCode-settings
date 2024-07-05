import cat-1 from '../assets/cat_1.jpg',
import cat-2 from '../assets/cat_2.jpg'
import cat-3 from '../assets/cat_3.jpg'
import cat-4 from '../assets/cat_4.jpg'
import cat-5 from '../assets/cat_5.jpg'
import cat-6 from '../assets/cat_6.jpg'

const categoryData = [
  {
    id: crypto.randomUUID(),
    name: "Toy Car",
    img: cat-1,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Gun",
    img: cat-2,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Dolls",
    img: "cat-3.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Toy helicopter",
    img: "cat-4.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Robot",
    img: "cat-5.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Game",
    img: "cat-6.jpg",
  },
];

export default categoryData;

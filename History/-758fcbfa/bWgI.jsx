import img2 from "../assets/cat-2.jpg";
import img3 from "../assets/cat-3.jpg";
import img4 from "../assets/cat-4.jpg";
import img5 from "../assets/cat-5.jpg";
import img6 from "../assets/cat-6.jpg";
import img1 from "../assets/cat_1.jpg";

const categoryData = [
  {
    id: crypto.randomUUID(),
    name: "Toy Car",
    category: "car",
    img: img1,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Gun",
    category: "gun",
    img: img2,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Dolls",
    category: "dolls",
    img: img3,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy helicopter",
    category: "helicopter",
    img: img4,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Robot",
    category: "robot",
    img: img5,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Game",
    category: "game",
    img: img6,
  },
];

export default categoryData;

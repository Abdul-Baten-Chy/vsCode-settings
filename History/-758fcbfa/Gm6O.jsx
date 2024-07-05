import img1 from "../assets/cat_1.jpg";
import img2 from "../assets/cat_2.jpg";
import img3 from "../assets/cat_3.jpg";
import img4 from "../assets/cat_4.jpg";
import img5 from "../assets/cat_5.jpg";
import img6 from "../assets/cat_6.jpg";

const categoryData = [
  {
    id: crypto.randomUUID(),
    name: "Toy Car",
    img: img1,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Gun",
    img: img2,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Dolls",
    img: img3,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy helicopter",
    img: img4,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Robot",
    img: img5,
  },
  {
    id: crypto.randomUUID(),
    name: "Toy Game",
    img: img6,
  },
];

export default categoryData;

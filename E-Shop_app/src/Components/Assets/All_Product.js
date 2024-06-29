import boy01 from '../Assets/kids/boys_clothes.jpg'
import boy02 from '../Assets/kids/boys_clothes02.jpg'
import boy03 from '../Assets/kids/boys_clothes03.jpg'
import boy04 from '../Assets/kids/boys_clothes04.jpg'
import boy05 from '../Assets/kids/boys_clothes05.jpg'
import boy06 from '../Assets/kids/boys_clothes06.jpg'
import boy07 from '../Assets/kids/boys_clothes07.jpg'
import boy08 from '../Assets/kids/boys_clothes08.jpg'
import girl01 from '../Assets/kids/girls_clothes.jpg'
import girl02 from '../Assets/kids/girls_clothes02.jpg'
import girl03 from '../Assets/kids/girls_clothes03.jpg'
import girl04 from '../Assets/kids/girls_clothes04.jpg'
import girl05 from '../Assets/kids/girls_clothes05.jpg'
import girl06 from '../Assets/kids/girls_clothes06.jpg'
import girl07 from '../Assets/kids/girls_clothes07.jpg'
import girl08 from '../Assets/kids/girls_clothes08.jpg'
import man01 from '../Assets/mans_fashion/mans_clothes04.jpg'
import man02 from '../Assets/mans_fashion/mans_clothes05.jpg'
import man03 from '../Assets/mans_fashion/mans_clothes06.jpg'
import man04 from '../Assets/mans_fashion/mans_clothes07.jpg'
import man05 from '../Assets/mans_fashion/mans_clothes08.jpg'
import man06 from '../Assets/mans_fashion/mans_clothes09.jpg'
import man07 from '../Assets/mans_fashion/mans_clothes10.jpg'
import man08 from '../Assets/mans_fashion/mans_clothes11.jpg'
import woman01 from '../Assets/woman_fashion/womans_clothes04.jpg'
import woman02 from '../Assets/woman_fashion/womans_clothes05.jpg'
import woman03 from '../Assets/woman_fashion/womans_clothes06.jpg'
import woman04 from '../Assets/woman_fashion/womans_clothes07.jpg'
import woman05 from '../Assets/woman_fashion/womans_clothes08.jpg'
import woman06 from '../Assets/woman_fashion/womans_clothes09.jpg'
import woman07 from '../Assets/woman_fashion/womans_clothes10.jpg'
import woman08 from '../Assets/woman_fashion/womans_clothes11.jpg'

const all_product = [
  {
    id: 1,
    name: "Kids' Striped T-Shirt",
    image: boy01, // Replace with actual path or URL
    category: "kid",
    new_price: 15.99,
    old_price: 25.99
  },
  {
    id: 2,
    name: "Girls' Floral Print Dress",
    image: girl01, // Replace with actual path or URL
    category: "kid",
    new_price: 29.99,
    old_price: 39.99
  },
  {
    id: 3,
    name: "Boys' Denim Jeans",
    image: boy03, // Replace with actual path or URL
    category: "kid",
    new_price: 19.99,
    old_price: 29.99
  },
  {
    id: 4,
    name: "Kids' Hooded Sweatshirt",
    image: boy02, // Replace with actual path or URL
    category: "kid",
    new_price: 24.99,
    old_price: 34.99
  },
  {
    id: 5,
    name: "Girls' Ruffled Skirt",
    image: girl02, // Replace with actual path or URL
    category: "kid",
    new_price: 17.99,
    old_price: 27.99
  },
  {
    id: 6,
    name: "Boys' Graphic Tee",
    image: boy04, // Replace with actual path or URL
    category: "kid",
    new_price: 12.99,
    old_price: 22.99
  },
  {
    id: 7,
    name: "Kids' Puffer Jacket",
    image: boy05, // Replace with actual path or URL
    category: "kid",
    new_price: 39.99,
    old_price: 49.99
  },
  {
    id: 8,
    name: "Girls' Leggings",
    image: girl03, // Replace with actual path or URL
    category: "kid",
    new_price: 9.99,
    old_price: 19.99
  },
  {
    id: 9,
    name: "Boys' Cargo Shorts",
    image: boy06, // Replace with actual path or URL
    category: "kid",
    new_price: 14.99,
    old_price: 24.99
  },
  {
    id: 10,
    name: "Kids' Button-Up Shirt",
    image: boy07, // Replace with actual path or URL
    category: "kid",
    new_price: 19.99,
    old_price: 29.99
  },
  {
    id: 11,
    name: "Girls' Denim Jacket",
    image: boy08, // Replace with actual path or URL
    category: "kid",
    new_price: 29.99,
    old_price: 39.99
  },
  {
    id: 12,
    name: "Boys' Sports Jersey",
    image: girl04, // Replace with actual path or URL
    new_price: 16.99,
    old_price: 26.99
  },
  {
    id: 13,
    name: "Kids' Printed Hoodie",
    image: girl08, // Replace with actual path or URL
    category: "kid",
    new_price: 21.99,
    old_price: 31.99
  },
  {
    id: 14,
    name: "Girls' Pajama Set",
    image: girl05, // Replace with actual path or URL
    category: "kid",
    new_price: 19.99,
    old_price: 29.99
  },
  {
    id: 15,
    name: "Boys' Fleece Jacket",
    image: girl06, // Replace with actual path or URL
    category: "kid",
    new_price: 24.99,
    old_price: 34.99
  },
  {
    id: 16,
    name: "Kids' Rainbow Sweatshirt",
    image: girl07, // Replace with actual path or URL
    category: "kid",
    new_price: 18.99,
    old_price: 28.99
  },
  {
    id: 17,
    name: "Men's Casual T-Shirt",
    image: man01,
    category: "man",
    new_price: 19.99,
    old_price: 29.99
  },
  {
    id: 18,
    name: "Women's Summer Dress",
    image: woman01,
    category: "woman",
    new_price: 34.99,
    old_price: 44.99
  },
  {
    id: 19,
    name: "Men's Formal Shirt",
    image: man02,
    category: "man",
    new_price: 29.99,
    old_price: 39.99
  },
  {
    id: 20,
    name: "Women's Blouse",
    image: woman02,
    category: "woman",
    new_price: 24.99,
    old_price: 34.99
  },
  {
    id: 21,
    name: "Men's Denim Jacket",
    image: man03,
    category: "man",
    new_price: 49.99,
    old_price: 59.99
  },
  {
    id: 22,
    name: "Women's Skinny Jeans",
    image: woman03,
    category: "woman",
    new_price: 29.99,
    old_price: 39.99
  },
  {
    id: 23,
    name: "Men's Chinos",
    image: man04,
    category: "man",
    new_price: 34.99,
    old_price: 44.99
  },
  {
    id: 24,
    name: "Women's Cardigan",
    image: woman04,
    category: "woman",
    new_price: 27.99,
    old_price: 37.99
  },
  {
    id: 25,
    name: "Men's Hoodie",
    image: man05,
    category: "man",
    new_price: 39.99,
    old_price: 49.99
  },
  {
    id: 26,
    name: "Women's Sportswear",
    image: woman05,
    category: "woman",
    new_price: 24.99,
    old_price: 34.99
  },
  {
    id: 27,
    name: "Men's Sweatpants",
    image: man06,
    category: "man",
    new_price: 29.99,
    old_price: 39.99
  },
  {
    id: 28,
    name: "Women's Maxi Skirt",
    image: woman06,
    category: "woman",
    new_price: 22.99,
    old_price: 32.99
  },
  {
    id: 29,
    name: "Men's Leather Jacket",
    image: man07,
    category: "man",
    new_price: 69.99,
    old_price: 79.99
  },
  {
    id: 30,
    name: "Women's Trench Coat",
    image: woman07,
    category: "woman",
    new_price: 59.99,
    old_price: 69.99
  },
  {
    id: 31,
    name: "Men's Polo Shirt",
    image: man08,
    category: "man",
    new_price: 24.99,
    old_price: 34.99
  },
  {
    id: 32,
    name: "Women's Evening Gown",
    image: woman08,
    category: "woman",
    new_price: 99.99,
    old_price: 129.99
  },
];

export default all_product;

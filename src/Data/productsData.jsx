import {
  bookshelf,
  bookshelfThum1,
  bookshelfThum2,
  bookshelfThum3,
  canonCamera,
  canonCameraThum1,
  canonCameraThum2,
  canonCameraThum3,
  comfortChair,
  comfortChairThum1,
  comfortChairThum2,
  comfortChairThum3,
  cpuCooler,
  cpuCoolerThum1,
  cpuCoolerThum2,
  cpuCoolerThum3,
  curology,
  curologyThum1,
  curologyThum2,
  curologyThum4,
  dogFood,
  dogFoodThum1,
  dogFoodThum2,
  dogFoodThum3,
  gamingLaptop,
  gamingLaptopThum1,
  gamingLaptopThum2,
  gamingLaptopThum3,
  gamingMonitor,
  gamingMonitorThum1,
  gamingMonitorThum2,
  gamingMonitorThum3,
  gucciBag,
  gucciBagThum2,
  gucciBagThum3,
  gucciBagThum4,
  kidsCar,
  kidsCarThum1,
  kidsCarThum2,
  kidsCarThum3,
  northCoat,
  northCoatThum1,
  northCoatThum2,
  northCoatThum3,
  ps5Gamepad,
  ps5GamepadThum1,
  ps5GamepadThum2,
  ps5GamepadThum3,
  satinJacket,
  satinJacketThum1,
  satinJacketThum2,
  satinJacketThum3,
  soccerCleats,
  soccerCleatsThum1,
  soccerCleatsThum2,
  soccerCleatsThum3,
  usbGamepad,
  usbGamepadThum1,
  usbGamepadThum2,
  usbGamepadThum3,
  wiredKeyboard,
  wiredKeyboardThum1,
  wiredKeyboardThum2,
  wiredKeyboardThum3,
} from "src/Assets/Products/ProductImgs";
import { setAfterDiscountKey, setFormattedPrice } from "src/Functions/helper";
import { v4 as uuid } from "uuid";

export const productsData = [
  {
    shortName: "PS5 Gamepad",
    name: "PS5 Gamepad",
    category: "gaming",
    price: 69.99,
    discount: 40,
    description: `
    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
    for easy bubble free install & mess free removal Pressure sensitive.`,
    addedDate: "2024/2/2",
    img: ps5Gamepad,
    otherImages: [
      ps5Gamepad,
      ps5GamepadThum1,
      ps5GamepadThum2,
      ps5GamepadThum3,
    ],
    colors: [
      {
        name: "ice blue",
        color: "#dcdfea",
      },
      {
        name: "black",
        color: "#27292d",
      },
    ],
    rate: 5,
    votes: 88,
    quantity: 1,
    sold: 105,
    id: uuid(),
  },

  {
    shortName: "AK-9000 Keyboard",
    name: "AK-900 Wired Keyboard",
    category: "gaming",
    price: 8.66,
    discount: 35,
    description: `
    Elevate your gaming experience with the AK-900 Wired Keyboard. Designed for
    precision and durability, this keyboard boasts high responsiveness and tactile
    feedback. Its sleek design and customizable RGB lighting make it a stylish
    addition to any gaming setup. Whether you're gaming competitively or typing
    up reports, the AK-900 ensures peak performance with every keystroke.`,
    addedDate: "2024/2/7",
    img: wiredKeyboard,
    otherImages: [
      wiredKeyboard,
      wiredKeyboardThum1,
      wiredKeyboardThum2,
      wiredKeyboardThum3,
    ],
    colors: [
      {
        name: "black",
        color: "#03040f",
      },
    ],
    rate: 4,
    votes: 75,
    quantity: 1,
    sold: 210,
    id: uuid(),
  },

  {
    shortName: "LCD Monitor",
    name: "IPS LCD Gaming Monitor",
    category: "gaming",
    price: 244.8,
    discount: 30,
    description: `
    Immerse yourself in the world of gaming with the IPS LCD Gaming Monitor. Featuring
    stunning visuals and ultra-smooth gameplay, this monitor delivers an unparalleled
    gaming experience. With its high refresh rate and low input lag, you'll never miss
    a frame. Whether you're battling foes or exploring vast worlds, the IPS LCD Gaming
    Monitor brings every detail to life with vibrant colors and crisp clarity.`,
    addedDate: "2024/3/15",
    img: gamingMonitor,
    otherImages: [
      gamingMonitor,
      gamingMonitorThum1,
      gamingMonitorThum2,
      gamingMonitorThum3,
    ],
    colors: [
      {
        name: "black",
        color: "#151515",
      },
    ],
    rate: 5,
    quantity: 1,
    votes: 99,
    sold: 463,
    id: uuid(),
  },

  {
    shortName: "S-Series Chair",
    name: "S-Series Comfort Chair",
    category: "furniture",
    price: 39.99,
    discount: 25,
    description: `
    Experience comfort like never before with the S-Series Comfort Chair. Crafted with plush
    padding and ergonomic design, this chair provides exceptional support during long gaming
    sessions or work hours. Its sleek and modern aesthetic adds a touch of sophistication to any
    space. Say goodbye to discomfort and hello to relaxation with the S-Series Comfort Chair.`,
    addedDate: "2024/1/1",
    img: comfortChair,
    otherImages: [
      comfortChair,
      comfortChairThum1,
      comfortChairThum2,
      comfortChairThum3,
    ],
    colors: [
      {
        name: "ice blue",
        color: "#d3d7dc",
      },
      {
        name: "gray",
        color: "#858080",
      },
      {
        name: "brown",
        color: "#433636",
      },
      {
        name: "custom",
        color: "#b4a9a8",
      },
    ],
    rate: 4.5,
    votes: 99,
    quantity: 1,
    sold: 211,
    id: uuid(),
  },

  {
    shortName: "North Coat",
    name: "The north coat",
    category: "clothes",
    price: 89.99,
    discount: 40,
    description: `
    Stay warm and stylish with The North Coat. Made from premium materials and expert craftsmanship,
    this coat is designed to withstand the elements while keeping you cozy. Its timeless design
    and versatile color make it a wardrobe essential for any season. Whether you're braving the
    outdoors or running errands in the city, The North Coat is sure to turn heads wherever you go.`,
    addedDate: "2024/3/7",
    img: northCoat,
    otherImages: [northCoat, northCoatThum1, northCoatThum2, northCoatThum3],
    colors: [
      {
        name: "pink",
        color: "#fa6a96",
      },
      {
        name: "light pink",
        color: "#ffb0ab",
      },
      {
        name: "dark blue",
        color: "#29518a",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    rate: 5,
    votes: 65,
    quantity: 1,
    sold: 1405,
    id: uuid(),
  },

  {
    shortName: "Gucci Bag",
    name: "Gucci duffle bag",
    category: "backpack",
    price: 2980,
    discount: 10,
    description: `
    Make a statement with the Gucci Duffle Bag. Crafted from luxurious materials and adorned with iconic
    branding, this bag exudes sophistication and style. With its spacious interior and multiple
    compartments, it's perfect for storing all your essentials in organized fashion. Whether you're
    traveling in first-class or hitting the gym, the Gucci Duffle Bag is the epitome of luxury and functionality.`,
    addedDate: "2022/9/15",
    img: gucciBag,
    otherImages: [gucciBag, gucciBagThum2, gucciBagThum3, gucciBagThum4],
    colors: [
      {
        name: "Tan",
        color: "#ae9c89",
      },
      {
        name: "light grayish",
        color: "#c1bab1",
      },
      {
        name: "brown",
        color: "#987553",
      },
    ],
    sizes: ["S", "M"],
    rate: 3.5,
    votes: 159,
    quantity: 1,
    sold: 1533,
    id: uuid(),
  },

  {
    shortName: "CPU Cooler",
    name: "RGB liquid CPU Cooler",
    category: "gaming",
    price: 139,
    discount: 30,
    description: `
    Keep your CPU running cool and quiet with the RGB Liquid CPU Cooler. Featuring advanced cooling
    technology and customizable RGB lighting, this cooler not only keeps temperatures low but also adds
    a touch of flair to your build. Its sleek design and high-performance capabilities make it
    a must-have for any gaming rig or workstation. Say goodbye to overheating and hello to
    peak performance with the RGB Liquid CPU Cooler.`,
    addedDate: "2024/3/7",
    img: cpuCooler,
    otherImages: [cpuCooler, cpuCoolerThum1, cpuCoolerThum2, cpuCoolerThum3],
    colors: [
      {
        name: "gray",
        color: "#8e8e8e",
      },
      {
        name: "black",
        color: "#0e0e0e",
      },
    ],
    rate: 4.5,
    votes: 190,
    quantity: 1,
    sold: 2522,
    id: uuid(),
  },

  {
    shortName: "BookShelf",
    name: "Small BookShelf",
    category: "furniture",
    price: 45.99,
    discount: 15,
    description: `
    Organize your library in style with the Small Bookshelf. Crafted from durable materials and featuring
    a compact design, this bookshelf maximizes storage space without sacrificing aesthetics. Whether you're
    displaying your favorite novels or showcasing decorative items, its minimalist design seamlessly blends
    with any décor. Say goodbye to clutter and hello to sophistication with the Small Bookshelf.`,
    addedDate: "2023/12/22",
    img: bookshelf,
    otherImages: [bookshelf, bookshelfThum1, bookshelfThum2, bookshelfThum3],
    colors: [
      {
        name: "tan",
        color: "#c08e56",
      },
      {
        name: "light yellow",
        color: "#ffdd9e",
      },
    ],
    rate: 5,
    votes: 201,
    quantity: 1,
    sold: 1602,
    id: uuid(),
  },

  {
    shortName: "Dog Food",
    name: "Breed Dry Dog Food",
    category: "animal",
    price: 17.99,
    discount: 0,
    description: `
    Treat your furry friend to the best with Breed Dry Dog Food. Formulated with premium ingredients and essential
    nutrients, this dog food provides complete and balanced nutrition for dogs of all ages and breeds. Its delicious
    flavor and crunchy texture will have your dog begging for more. Say goodbye to mealtime struggles and hello to
    happy, healthy dogs with Breed Dry Dog Food.`,
    addedDate: "2024/3/7",
    img: dogFood,
    otherImages: [dogFood, dogFoodThum1, dogFoodThum2, dogFoodThum3],
    colors: [
      {
        name: "purple",
        color: "#c212ad",
      },
      {
        name: "yellow",
        color: "#f59501",
      },
      {
        name: "red",
        color: "#d61421",
      },
    ],
    sizes: ["S", "M", "L"],
    rate: 3,
    votes: 35,
    quantity: 1,
    sold: 59,
    id: uuid(),
  },

  {
    shortName: "Cannon Camera",
    name: "CANON EOS DSLR Camera",
    category: "camera",
    price: 6499,
    discount: 0,
    description: `
    Capture life's precious moments with the CANON EOS DSLR Camera. Whether you're a professional photographer or an
    amateur enthusiast, this camera delivers stunning image quality and performance. With its advanced features and
    intuitive controls, you can unleash your creativity and take your photography to the next level. Say goodbye to
    blurry shots and hello to crystal-clear images with the CANON EOS DSLR Camera.`,
    addedDate: "2024/3/7",
    img: canonCamera,
    otherImages: [
      canonCamera,
      canonCameraThum1,
      canonCameraThum2,
      canonCameraThum3,
    ],
    colors: [
      {
        name: "black",
        color: "#000201",
      },
    ],
    rate: 4,
    votes: 94,
    quantity: 1,
    sold: 83,
    id: uuid(),
  },

  {
    shortName: "FHD Laptop",
    name: "ASUS FHD Gaming Laptop",
    category: "computers",
    price: 767.99,
    discount: 5,
    description: `
    Experience unparalleled gaming performance with the ASUS FHD Gaming Laptop. Powered by cutting-edge hardware and
    featuring a stunning Full HD display, this laptop is built to handle even the most demanding games with ease.
    Its sleek design and lightweight construction make it the perfect companion for gaming on the go. Say goodbye
    to lag and hello to smooth gameplay with the ASUS FHD Gaming Laptop.`,
    addedDate: "2024/3/7",
    img: gamingLaptop,
    otherImages: [
      gamingLaptop,
      gamingLaptopThum1,
      gamingLaptopThum2,
      gamingLaptopThum3,
    ],
    colors: [
      {
        name: "black",
        color: "#0c0c0c",
      },
    ],
    rate: 4.5,
    votes: 1049,
    quantity: 1,
    sold: 1792,
    id: uuid(),
  },

  {
    shortName: "Curology",
    name: "Curology Product Set",
    category: "makeup",
    price: 24.99,
    discount: 0,
    description: `
    Transform your skincare routine with the Curology Product Set. Formulated by dermatologists and tailored to
    your unique skin needs, this set includes everything you need to achieve clear, radiant skin. From cleansers
    to serums, each product is designed to target specific concerns and deliver visible results. Say goodbye to
    dull, uneven skin and hello to a complexion that glows with health and vitality with the Curology Product Set.`,
    addedDate: "2024/3/7",
    img: curology,
    otherImages: [curology, curologyThum1, curologyThum2, curologyThum4],
    colors: [
      {
        name: "dark blue",
        color: "#000a2d",
      },
      {
        name: "white",
        color: "#def1f8",
      },
    ],
    rate: 5,
    votes: 325,
    quantity: 1,
    sold: 100,
    id: uuid(),
  },

  {
    shortName: "Electric Car",
    name: "Kids Electric Car",
    category: "gaming",
    price: 399.99,
    discount: 0,
    description: `
    Spark your child's imagination with the Kids Electric Car. Designed for fun and excitement, this car features
    realistic details and effortless controls that make every ride an adventure. Whether they're cruising around
    the neighborhood or exploring the backyard, the Kids Electric Car provides hours of entertainment for children
    of all ages. Say goodbye to boredom and hello to endless fun with the Kids Electric Car.`,
    addedDate: "2024/3/7",
    img: kidsCar,
    otherImages: [kidsCar, kidsCarThum1, kidsCarThum2, kidsCarThum3],
    colors: [
      {
        name: "red",
        color: "#ff6066",
      },
      {
        name: "black",
        color: "#000201",
      },
      {
        name: "white",
        color: "#dcdcdc",
      },
    ],
    rate: 3,
    votes: 22,
    quantity: 1,
    sold: 100,
    id: uuid(),
  },

  {
    shortName: "Soccer Cleats",
    name: "Jr. Zoom Soccer Cleats",
    category: "clothes",
    price: 44.99,
    discount: 0,
    description: `
    Take your game to the next level with Jr. Zoom Soccer Cleats. Engineered for speed and agility, these cleats
    deliver exceptional traction and stability on the field. With their lightweight design and responsive cushioning,
    you'll feel unstoppable from kickoff to the final whistle. Say goodbye to slips and slides and hello to peak
    performance with Jr. Zoom Soccer Cleats.`,
    addedDate: "2024/3/7",
    img: soccerCleats,
    otherImages: [
      soccerCleats,
      soccerCleatsThum1,
      soccerCleatsThum2,
      soccerCleatsThum3,
    ],
    colors: [
      {
        name: "yellow",
        color: "#edfe7c",
      },
      {
        name: "black",
        color: "#131615",
      },
    ],
    rate: 4,
    votes: 145,
    quantity: 1,
    sold: 100,
    id: uuid(),
  },

  {
    shortName: "GP11 Gamepad",
    name: "GP11 Shooter USB Gamepad",
    category: "gaming",
    price: 13.86,
    discount: 0,
    description: `
    Dominate the competition with the GP11 Shooter USB Gamepad. Designed for precision and comfort, this gamepad
    delivers an immersive gaming experience with every press and swipe. Whether you're battling enemies or racing
    against the clock, its ergonomic design and responsive controls give you the competitive edge you need to come
    out on top. Say goodbye to laggy inputs and hello to smooth, seamless gameplay with the GP11 Shooter USB Gamepad.`,
    addedDate: "2024/3/7",
    img: usbGamepad,
    otherImages: [
      usbGamepad,
      usbGamepadThum1,
      usbGamepadThum2,
      usbGamepadThum3,
    ],
    colors: [
      {
        name: "black",
        color: "#242424",
      },
    ],
    rate: 5,
    votes: 64,
    quantity: 1,
    sold: 100,
    id: uuid(),
  },

  {
    shortName: "Satin Jacket",
    name: "Quilted Satin Jacket",
    category: "clothes",
    price: 105,
    discount: 0,
    description: `
    Elevate your outerwear collection with the Quilted Satin Jacket. Crafted from premium satin fabric and featuring a
    quilted design, this jacket combines style and functionality with ease. Whether you're braving the elements or
    hitting the town, its luxurious texture and sleek silhouette make it a versatile addition to any wardrobe. Say
    goodbye to boring outerwear and hello to effortless style with the Quilted Satin Jacket.`,
    addedDate: "2024/3/7",
    img: satinJacket,
    otherImages: [
      satinJacket,
      satinJacketThum1,
      satinJacketThum2,
      satinJacketThum3,
    ],
    colors: [
      {
        name: "blue gray",
        color: "#4a5274",
      },
      {
        name: "black",
        color: "#272429",
      },
      {
        name: "brown",
        color: "#6b6957",
      },
      {
        name: "dark green",
        color: "#203734",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rate: 4.5,
    votes: 55,
    quantity: 1,
    sold: 100,
    id: uuid(),
  },
];

productsData.forEach((product) => {
  setAfterDiscountKey(product);
  setFormattedPrice(product);
});

export interface Painting {
  id: number;
  title: string;
  artist: string;
  year: string;
  period: string;
  imageUrl: string;
  featured?: boolean;
  description: string;
}

export interface Collection {
  id: string;
  name: string;
  count: number;
  period: string;
  description: string;
  paintings: number[];
}

export const paintings: Painting[] = [
  {
    id: 1,
    title: "The Garden of Earthly Delights",
    artist: "Hieronymus Bosch",
    year: "c. 1490–1510",
    period: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution_2.jpg/3840px-The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution_2.jpg",
    featured: true,
    description: "A triptych depicting the Garden of Eden, the earthly world filled with nude figures and fantastical elements, and Hell.",
  },
  {
    id: 2,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    period: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Girl_with_a_Pearl_Earring.jpg",
    featured: false,
    description: "An intimate portrait capturing a fleeting moment, featuring exquisite use of light and the iconic pearl earring.",
  },
  {
    id: 3,
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "c. 1485",
    period: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Birth_of_Venus_Botticelli.jpg/1280px-Birth_of_Venus_Botticelli.jpg",
    featured: false,
    description: "The goddess Venus emerges from the sea on a shell, symbolizing divine beauty and the revival of classical antiquity.",
  },
  {
    id: 4,
    title: "Water Lilies",
    artist: "Claude Monet",
    year: "1914–1926",
    period: "Impressionism",
    imageUrl: "https://muralsyourway.vtexassets.com/arquivos/ids/231943-2000-auto?width=2000&height=auto&aspect=true",
    featured: false,
    description: "Part of Monet's extensive water lily series, capturing the interplay of light, water, and nature.",
  },
  {
    id: 5,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    period: "Post-Impressionism",
    imageUrl: "https://cdn.pixabay.com/photo/2015/12/15/05/43/starry-night-1093721_1280.jpg",
    featured: false,
    description: "A swirling night sky over a village, painted from memory and imagination during van Gogh's stay at an asylum.",
  },
  {
    id: 6,
    title: "The Creation of Adam",
    artist: "Michelangelo",
    year: "c. 1512",
    period: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Creaci%C3%B3n_de_Ad%C3%A1n.jpg/1280px-Creaci%C3%B3n_de_Ad%C3%A1n.jpg",
    featured: false,
    description: "The iconic Sistine Chapel fresco depicting God giving life to Adam with an outstretched finger.",
  },
  {
    id: 7,
    title: "The Night Watch",
    artist: "Rembrandt van Rijn",
    year: "1642",
    period: "Dutch Golden Age",
    imageUrl: "https://www.cnet.com/a/img/resize/e8d756831bea5e9ef3e0b2e989edf0c25bc88888/hub/2020/05/13/d442149f-78bc-496c-a86a-bc215d42bf5f/nightwatch.jpg?auto=webp&fit=crop&height=675&width=1200",
    featured: false,
    description: "A dramatic group portrait of a civic guard company, masterfully using light and shadow.",
  },
  {
    id: 8,
    title: "The Calling of Saint Matthew",
    artist: "Caravaggio",
    year: "1599–1600",
    period: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Caravaggio%2C_Michelangelo_Merisi_da_-_The_Calling_of_Saint_Matthew_-_1599-1600_%28hi_res%29.jpg",
    featured: false,
    description: "A powerful religious scene featuring Caravaggio's revolutionary use of dramatic lighting (chiaroscuro).",
  },
  {
    id: 9,
    title: "Les Demoiselles d'Avignon",
    artist: "Pablo Picasso",
    year: "1907",
    period: "Modern Art",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/3840px-Les_Demoiselles_d%27Avignon.jpg",
    featured: false,
    description: "A groundbreaking proto-Cubist work that revolutionized modern art with its fragmented forms and African influences.",
  },
];

export const collections: Collection[] = [
  {
    id: "northern-renaissance",
    name: "Northern Renaissance",
    count: 3,
    period: "1400–1600",
    description: "Detailed realism and complex symbolism from the Low Countries and Germany",
    paintings: [1],
  },
  {
    id: "italian-masters",
    name: "Italian Masters",
    count: 2,
    period: "1400–1600",
    description: "The pinnacle of Renaissance art from Florence, Rome, and Venice",
    paintings: [3, 6],
  },
  {
    id: "baroque",
    name: "Baroque Era",
    count: 1,
    period: "1600–1750",
    description: "Dramatic, emotional intensity with bold use of light and shadow",
    paintings: [8],
  },
  {
    id: "dutch-golden-age",
    name: "Dutch Golden Age",
    count: 2,
    period: "1600–1700",
    description: "Masterful technique and intimate portraits from the Netherlands",
    paintings: [2, 7],
  },
  {
    id: "impressionism",
    name: "Impressionism",
    count: 1,
    period: "1860–1900",
    description: "Capturing light and fleeting moments with visible brushstrokes",
    paintings: [4],
  },
  {
    id: "post-impressionism",
    name: "Post-Impressionism",
    count: 1,
    period: "1880–1910",
    description: "Bold colors and emotional expression beyond impressionist boundaries",
    paintings: [5],
  },
  {
    id: "modern-art",
    name: "Modern Art",
    count: 1,
    period: "1900–1950",
    description: "Revolutionary approaches breaking traditional artistic conventions",
    paintings: [9],
  },
];

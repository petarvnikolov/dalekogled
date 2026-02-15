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
    imageUrl: "https://images.unsplash.com/photo-1742145415317-170c91dc7006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBwYWludGluZyUyMHJlbmFpc3NhbmNlJTIwYXJ0JTIwbXVzZXVtfGVufDF8fHx8MTc3MDc5NDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true,
    description: "A triptych depicting the Garden of Eden, the earthly world filled with nude figures and fantastical elements, and Hell.",
  },
  {
    id: 2,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    period: "Dutch Golden Age",
    imageUrl: "https://images.unsplash.com/photo-1655129282988-f198f61c50c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYXJ0JTIwcGFpbnRpbmclMjB2ZXJtZWVyfGVufDF8fHx8MTc3MTE3NzcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    description: "An intimate portrait capturing a fleeting moment, featuring exquisite use of light and the iconic pearl earring.",
  },
  {
    id: 3,
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "c. 1485",
    period: "Italian Renaissance",
    imageUrl: "https://images.unsplash.com/photo-1764214918507-3938f17df7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5haXNzYW5jZSUyMHBhaW50aW5nJTIwYXJ0JTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzExNzc3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    description: "The goddess Venus emerges from the sea on a shell, symbolizing divine beauty and the revival of classical antiquity.",
  },
  {
    id: 4,
    title: "Water Lilies",
    artist: "Claude Monet",
    year: "1914–1926",
    period: "Impressionism",
    imageUrl: "https://images.unsplash.com/photo-1763491905762-66f2d0bf57ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25ldCUyMGltcHJlc3Npb25pc3QlMjBwYWludGluZyUyMHdhdGVyJTIwbGlsaWVzfGVufDF8fHx8MTc3MTE3ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    description: "Part of Monet's extensive water lily series, capturing the interplay of light, water, and nature.",
  },
  {
    id: 5,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    period: "Post-Impressionism",
    imageUrl: "https://images.unsplash.com/photo-1562041307-4e4465343615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW4lMjBnb2doJTIwc3RhcnJ5JTIwbmlnaHQlMjBwYWludGluZ3xlbnwxfHx8fDE3NzExMDQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    description: "A swirling night sky over a village, painted from memory and imagination during van Gogh's stay at an asylum.",
  },
  {
    id: 6,
    title: "The Creation of Adam",
    artist: "Michelangelo",
    year: "c. 1512",
    period: "Italian Renaissance",
    imageUrl: "https://images.unsplash.com/photo-1763792334909-d5397700f838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNoZWxhbmdlbG8lMjByZW5haXNzYW5jZSUyMGZyZXNjb3xlbnwxfHx8fDE3NzExNzg0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    description: "The iconic Sistine Chapel fresco depicting God giving life to Adam with an outstretched finger.",
  },
  {
    id: 7,
    title: "The Night Watch",
    artist: "Rembrandt van Rijn",
    year: "1642",
    period: "Dutch Golden Age",
    imageUrl: "https://images.unsplash.com/photo-1769502728430-6c814caa1699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1icmFuZHQlMjBwb3J0cmFpdCUyMHBhaW50aW5nJTIwZHV0Y2h8ZW58MXx8fHwxNzcxMTc4NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    description: "A dramatic group portrait of a civic guard company, masterfully using light and shadow.",
  },
  {
    id: 8,
    title: "The Calling of Saint Matthew",
    artist: "Caravaggio",
    year: "1599–1600",
    period: "Baroque",
    imageUrl: "https://images.unsplash.com/photo-1701958213877-0a5ef3686c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJhdmFnZ2lvJTIwYmFyb3F1ZSUyMHBhaW50aW5nJTIwZHJhbWF0aWN8ZW58MXx8fHwxNzcxMTc4NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    description: "A powerful religious scene featuring Caravaggio's revolutionary use of dramatic lighting (chiaroscuro).",
  },
  {
    id: 9,
    title: "Les Demoiselles d'Avignon",
    artist: "Pablo Picasso",
    year: "1907",
    period: "Modern Art",
    imageUrl: "https://images.unsplash.com/photo-1730236828675-955b35c66d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNhc3NvJTIwY3ViaXN0JTIwcGFpbnRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzcxMTc4NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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

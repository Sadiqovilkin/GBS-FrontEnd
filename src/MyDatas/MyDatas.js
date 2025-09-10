import overviewImg from "../assets/images/overviewImg.png";
import overviewImg2 from "../assets/images/overviewImg2.png";

export const overviewData = [
  {
    id: "1",
    title: "Lorem",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    images: [overviewImg, overviewImg2],
    videoSrc: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
  },
  {
    id: "2",
    title: "Lorem2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    images: [overviewImg2, overviewImg],
    videoSrc: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
  },
  {
    id: "3",
    title: "Lorem3",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    images: [overviewImg, overviewImg2],
    videoSrc: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
  },
];

export const categoryData =  [
  {
    id: "CT1001",
    name: "Elektronik",
    subcategory: [
      { id: "SC1001", name: "Telefon" },
      { id: "SC1002", name: "Bilgisayar" },
      { id: "SC1003", name: "Tablet" },
      { id: "SC1007", name: "Aksesuar" }
    ]
  },
  {
    id: "CT1002",
    name: "Ev Yaşam",
    subcategory: [
      { id: "SC1005", name: "Beyaz Eşya" },
      { id: "SC1008", name: "Kulaklık" }
    ]
  },
  {
    id: "CT1003",
    name: "Giyim",
    subcategory: [
      { id: "SC1007", name: "Aksesuar" },
       { id: "SC1002", name: "Bilgisayar" },
      { id: "SC1003", name: "Tablet" },
    ]
  },
  {
    id: "CT1004",
    name: "Ayakkabı",
    subcategory: [
      { id: "SC1007", name: "Aksesuar" },
      { id: "SC1008", name: "Kulaklık" }
    ]
  },
  {
    id: "CT1005",
    name: "Spor & Outdoor",
    subcategory: [
      { id: "SC1003", name: "Tablet" },
      { id: "SC1004", name: "Televizyon" }
    ]
  },
  {
    id: "CT1006",
    name: "Kitap",
    subcategory: [
       { id: "SC1003", name: "Tablet" },
    ]
  },
  {
    id: "CT1007",
    name: "Oyuncak",
    subcategory: [
      { id: "SC1006", name: "Kamera" },
       { id: "SC1003", name: "Tablet" },
    ]
  },
  {
    id: "CT1008",
    name: "Kozmetik",
    subcategory: [
      { id: "SC1008", name: "Kulaklık" },
      { id: "SC1006", name: "Kamera" },
       { id: "SC1003", name: "Tablet" },
    ]
  }
];

 export const subcategoryData = [
  { id: "SC1001", name: "Telefon" },
  { id: "SC1002", name: "Bilgisayar" },
  { id: "SC1003", name: "Tablet" },
  { id: "SC1004", name: "Televizyon" },
  { id: "SC1005", name: "Beyaz Eşya" },
  { id: "SC1006", name: "Kamera" },
  { id: "SC1007", name: "Aksesuar" },
  { id: "SC1008", name: "Kulaklık" }
];


import productImage from "../assets/images/productImage.png";

export const productsData = [
  {
    id: "P001",
    title: "SIEMENS SIVACON S8",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, overviewImg, productImage],
    category: "CT1001",
    subcategory: "SC1001",
    features: [
      "High quality and safety",
      "Busbar system up to 7400A",
      "Short circuit withstand up to 150kA",
      "Modular design and easy combination",
      "Upgradability without disrupting operation",
      "Convenience of bottom or top connection",
    ],
  },
  {
    id: "P002",
    title: "Lorem2",
    description: "Double Door / Windowless",
    image: overviewImg,
    images: [overviewImg, productImage, overviewImg],
    category: "CT1001",
    subcategory: "SC1002",
    features: [
      "Compact and lightweight design",
      "Energy efficient operation",
      "Extended lifetime of components",
      "Flexible installation options",
      "Compliance with IEC standards",
    ],
  },
  {
    id: "P003",
    title: "Lorem3",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, productImage, overviewImg],
    category: "CT1001",
    subcategory: "SC1003",
    features: [
      "Durable metal construction",
      "Corrosion resistant coating",
      "Integrated cable management",
      "Enhanced operator safety",
      "Low maintenance design",
    ],
  },
  {
    id: "P004",
    title: "Lorem4",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, overviewImg],
    category: "CT1002",
    subcategory: "SC1005",
    features: [
      "High operational reliability",
      "Modular extension possibility",
      "Environment-friendly materials",
      "Ergonomic front access",
      "Low power losses",
    ],
  },
  {
    id: "P005",
    title: "Lorem5",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, overviewImg],
    category: "CT1002",
    subcategory: "SC1008",
    features: [
      "Smart monitoring integration",
      "Temperature-resistant design",
      "Quick replacement of modules",
      "Reduced installation time",
      "International certifications",
    ],
  },
  {
    id: "P006",
    title: "Lorem6",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, productImage, overviewImg],
    category: "CT1003",
    subcategory: "SC1007",
    features: [
      "Optimized for industrial plants",
      "Compact floor space requirement",
      "Advanced protection devices",
      "Efficient power distribution",
      "Seismic-proof design",
    ],
  },
  {
    id: "P007",
    title: "Lorem7",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, overviewImg],
    category: "CT1004",
    subcategory: "SC1007",
    features: [
      "Customizable layout",
      "Tool-free assembly",
      "Enhanced cooling system",
      "User-friendly interface",
      "Strong mechanical stability",
    ],
  },
  {
    id: "P008",
    title: "Lorem8",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, productImage],
    category: "CT1008",
    subcategory: "SC1008",
    features: [
      "Arc fault containment",
      "Improved ventilation system",
      "Expandable busbar system",
      "Quick diagnostics panel",
      "Service-friendly design",
    ],
  },
  {
    id: "P009",
    title: "Lorem9",
    description: "Double Door / Windowless",
    image: productImage,
    images: [overviewImg, productImage],
    category: "CT1003",
    subcategory: "SC1002",
    features: [
      "High short-circuit strength",
      "Compact assembly size",
      "Low voltage drop",
      "Reduced noise level",
      "Long service life",
    ],
  },
  {
    id: "P010",
    title: "Lorem10",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, productImage, overviewImg],
    category: "CT1006",
    subcategory: "SC1003",
    features: [
      "Plug-and-play modules",
      "Intelligent load management",
      "Eco-friendly material usage",
      "High resistance to dust",
      "Cost-effective solution",
    ],
  },
  {
    id: "P011",
    title: "Lorem11",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, overviewImg],
    category: "CT1007",
    subcategory: "SC1006",
    features: [
      "Top/bottom cable entry options",
      "Digital monitoring compatibility",
      "Easy retrofitting",
      "Reduced downtime maintenance",
      "Excellent thermal stability",
    ],
  },
  {
    id: "P012",
    title: "Lorem12",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, overviewImg],
    category: "CT1005",
    subcategory: "SC1003",
    features: [
      "Strong anti-vibration design",
      "Minimal power dissipation",
      "Clear labeling system",
      "Easy handling during transport",
      "High-quality insulation",
    ],
  },
  {
    id: "P013",
    title: "Lorem13",
    description: "Double Door / Windowless",
    image: productImage,
    images: [productImage, overviewImg],
    category: "CT1004",
    subcategory: "SC1007",
    features: [
      "Excellent fault tolerance",
      "Optimized energy flow",
      "High-efficiency cooling fans",
      "Reduced electromagnetic emission",
      "Space-saving structure",
    ],
  },
];




import projectImage1 from "../assets/project/project1.png";
import projectImage2 from "../assets/project/project2.png";
import projectImage3 from "../assets/project/project3.png";
import projectImage4 from "../assets/project/project1.png";
import projectImage11 from "../assets/project/project11.png";

export const projectData = [
  {
    id: "1",
    title: "Laçın Airport",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
      image:projectImage1,
    images: [projectImage3, projectImage2],
    videoSrc: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
  },
  {
    id: "2",
    title: "Lorem2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    image:projectImage3,
      images: [projectImage1, projectImage2],
    videoSrc: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
  },
  {
    id: "3",
    title: "Lorem3",
    description:
      "It is a long established fact that a reader will be distracted by the readable content,It is a long established fact that a reader will be distracted by the readable content",
    image:projectImage2,
      images: [projectImage4, projectImage2],
    videoSrc: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
  },
 
  {
    id: "4",
    title: "Lorem4",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    image:projectImage4,
      images: [projectImage2, projectImage3],
    videoSrc: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
  },
  {
    id: "5",
    title: "Lorem5",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    image:projectImage2,
      images: [projectImage2, projectImage1],
    videoSrc: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
  },

  {
    id: "6",
    title: "Lorem6",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    image:projectImage1,
      images: [projectImage2, projectImage3],
    videoSrc: "https://www.youtube.com/watch?v=zblxJ1fZCdY",
  },
];


import partnerImage1 from "../assets/partners/partners1.png";
import partnerImage2 from "../assets/partners/partners2.png";
import partnerImage3 from "../assets/partners/partners3.png";
import partnerImage4 from "../assets/partners/partners4.png";
import partnerImage5 from "../assets/partners/partners5.png";

export const partnersData = [
  {
    id: "1",
    image: partnerImage1,
  },
  {
    id: "2",
    image: partnerImage2,
  },
  {
    id: "3",
    image: partnerImage3,
  },
  {
    id: "4",
    image: partnerImage4,
  },
  {
    id: "5",
    image: partnerImage5,
  },
  {
    id: "6",
    image: partnerImage1,
  },
  {
    id: "7",
    image: partnerImage2,
  },
]


import consumerImage1 from "../assets/partners/consumer1.png";
import consumerImage2 from "../assets/partners/consumer2.png";
import consumerImage3 from "../assets/partners/consumer3.png";
import consumerImage4 from "../assets/partners/consumer4.png";
import consumerImage5 from "../assets/partners/consumer5.png";

export const consumersData = [
  {
    id: "1",
    image: consumerImage1,
  },
  {
    id: "2",
    image: consumerImage2,
  },
  {
    id: "3",
    image: consumerImage3,
  },
  {
    id: "4",
    image: consumerImage4,
  },
  {
    id: "5",
    image: consumerImage5,
  },
  {
    id: "6",
    image: consumerImage1,
  },
  {
    id: "7",
    image: consumerImage2,
  },
]
const treeData = {
  banyan: {
    name: "Banyan Tree",
    description: "The Banyan tree is a symbol of immortality and strength in India. It has large aerial roots that hang from its branches and touch the ground, forming new trunks. This tree can spread across acres of land. It provides dense shade and is home to many birds and animals. The banyan is India’s national tree and is often seen in village centers."
  },
  neem: {
    name: "Neem Tree",
    description: "The Neem tree is known for its medicinal properties. Every part of the neem – from the leaves to the bark – is used in traditional Indian medicine (Ayurveda). It is evergreen, drought-resistant, and purifies the air. Neem oil is used in soaps, skin care, and agriculture. It is considered sacred and beneficial for health."
  },
  peepal: {
    name: "Peepal Tree",
    description: "The Peepal tree is worshipped in many Indian religions. It releases oxygen even at night, making it extremely valuable for the environment. Its heart-shaped leaves are known to flutter even without wind. Peepal trees grow fast and are found near temples and holy places."
  },
  mango: {
    name: "Mango Tree",
    description: "The Mango tree is the source of India’s national fruit. It provides delicious mangoes in summer. Mango wood is used in rituals and furniture. It is a large evergreen tree that can live for over 100 years. The leaves are often used in festivals and traditional decorations."
  },
  coconut: {
    name: "Coconut Tree",
    description: "Often called the 'Tree of Life', the coconut tree provides food, water, oil, and materials for shelter. Found in coastal regions, it grows tall and straight with fruit on top. Coconut water is healthy, and the leaves are used for thatching roofs."
  },
  oak: {
    name: "Oak Tree",
    description: "Oak trees are strong and majestic trees native to temperate regions. Their wood is used for furniture and construction. Oaks produce acorns that feed many animals. Symbolically, the oak represents strength, endurance, and wisdom."
  },
  pine: {
    name: "Pine Tree",
    description: "Pine trees are coniferous trees found in cold regions and mountains. They stay green year-round and have needle-like leaves. Pine wood is used in furniture and paper making. They are known for their pleasant smell and symmetrical shape."
  },
  gulmohar: {
    name: "Gulmohar Tree",
    description: "Gulmohar is known for its fiery red-orange flowers that bloom in summer. It is also called 'Flame of the Forest'. The tree provides beautiful shade and enhances the beauty of streets and gardens. It grows quickly and is native to Madagascar but popular in India."
  }
};

function showTreeInfo(treeKey) {
  const infoBox = document.getElementById("tree-info");
  const tree = treeData[treeKey];

  if (tree) {
    infoBox.innerHTML = `
      <h2>${tree.name}</h2>
      <p>${tree.description}</p>
    `;
  } else {
    infoBox.innerHTML = "<p>No information available.</p>";
  }
}

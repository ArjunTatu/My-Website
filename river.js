const riverData = {
  ganga: {
    name: "Ganga",
    description: "The Ganga, or Ganges, is the holiest river in India and holds deep spiritual significance. It originates from the Gangotri Glacier in the Himalayas and flows through northern India into Bangladesh. It supports hundreds of millions with its water and is home to the endangered Ganges river dolphin. Efforts are ongoing to clean and preserve this sacred river."
  },
  amazon: {
    name: "Amazon",
    description: "The Amazon River is the largest river by volume in the world. Flowing through South America, mainly Brazil, it supports the vast Amazon Rainforest — home to the richest biodiversity on the planet. It carries more water than any other river and has thousands of tributaries."
  },
  nile: {
    name: "Nile",
    description: "The Nile is the longest river in the world, stretching over 6,650 km through northeastern Africa. It played a vital role in the rise of Ancient Egyptian civilization. Its waters are still crucial for agriculture and water supply in Egypt and Sudan."
  },
  yangtze: {
    name: "Yangtze",
    description: "The Yangtze River is the longest river in Asia and the third-longest in the world. Flowing through China, it is a lifeline for agriculture, industry, and transportation. The Three Gorges Dam on the Yangtze is the world’s largest hydroelectric power station."
  },
  danube: {
    name: "Danube",
    description: "The Danube is Europe's second-longest river, flowing through 10 countries. It connects many capital cities, including Vienna, Budapest, and Belgrade. The river has been a vital trade route and cultural link for centuries."
  },
  mississippi: {
    name: "Mississippi",
    description: "The Mississippi River is the main river system in the United States, running from Minnesota to the Gulf of Mexico. It played a crucial role in trade, transport, and the Civil War era. The river basin supports vast farmlands and diverse ecosystems."
  },
  volga: {
    name: "Volga",
    description: "The Volga River is the longest river in Europe, flowing through western Russia into the Caspian Sea. It is central to Russian culture, industry, and agriculture. The river freezes over in winter and is navigable during warmer months."
  },
  indus: {
    name: "Indus",
    description: "The Indus River flows through Tibet, India, and Pakistan. It is the backbone of Pakistan’s water system and was the cradle of the ancient Indus Valley Civilization. Today, it remains essential for agriculture, drinking water, and hydroelectric power."
  }
};

function showRiverInfo(riverKey) {
  const infoBox = document.getElementById("river-info");
  const river = riverData[riverKey];

  if (river) {
    infoBox.innerHTML = `
      <h2>${river.name}</h2>
      <p>${river.description}</p>
    `;
  } else {
    infoBox.innerHTML = "<p>No information available.</p>";
  }
}

const birdData = {
  sparrow: {
    name: "Sparrow",
    description: "Sparrows are small, friendly, and highly social birds found in urban and rural areas. They feed on grains and insects. Despite being common, their population has declined due to habitat loss and pollution. Sparrows build nests near human dwellings and are known for their sweet chirping."
  },
  peacock: {
    name: "Peacock",
    description: "The Indian Peacock is the national bird of India, admired for its majestic tail feathers. During monsoon, it performs a vibrant dance to attract mates. The male has bright blue and green plumage, while females are duller. Peacocks symbolize beauty, grace, and royalty."
  },
  eagle: {
    name: "Eagle",
    description: "Eagles are powerful birds of prey with excellent eyesight. Known for their strong beaks and sharp talons, they soar high and hunt small animals and fish. The bald eagle is a national symbol of the USA, representing strength and freedom."
  },
  parrot: {
    name: "Parrot",
    description: "Parrots are colorful, intelligent birds known for mimicking human speech. They are often green but come in many vibrant colors. Found in tropical regions, parrots feed on fruits, nuts, and seeds. They are affectionate pets and live long lives."
  },
  owl: {
    name: "Owl",
    description: "Owls are nocturnal birds with large eyes and silent flight. They are excellent hunters, feeding mostly on rodents. Their ability to rotate their head up to 270 degrees is remarkable. Owls are often associated with wisdom in many cultures."
  },
  kingfisher: {
    name: "Kingfisher",
    description: "Kingfishers are brightly colored birds with a sharp beak, ideal for catching fish. They are usually seen near rivers and lakes. Their blue and orange plumage makes them easy to spot. Kingfishers dive quickly into the water to catch their prey."
  },
  woodpecker: {
    name: "Woodpecker",
    description: "Woodpeckers have strong beaks for drilling into trees. They peck to find insects and to communicate with others. Their unique skull structure protects them from the impact. These birds play an important role in forest ecosystems."
  },
  crane: {
    name: "Crane",
    description: "Cranes are large, elegant birds found in wetlands and grasslands. They have long legs and necks, and perform elaborate dances during mating. Cranes are symbols of longevity and peace, and their flight formation is often seen during migration."
  }
};

function showBirdInfo(birdKey) {
  const infoBox = document.getElementById("bird-info");
  const bird = birdData[birdKey];

  if (bird) {
    infoBox.innerHTML = `
      <h2>${bird.name}</h2>
      <p>${bird.description}</p>
    `;
  } else {
    infoBox.innerHTML = "<p>No information available.</p>";
  }
}

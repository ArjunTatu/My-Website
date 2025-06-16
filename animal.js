const animalData = {
  tiger: {
    name: "Tiger",
    description: "The tiger is the largest species among the big cats and is easily recognized by its orange coat with black stripes. Tigers are solitary and territorial animals that primarily live in forests. They are powerful hunters with strong jaws, sharp teeth, and excellent night vision. The Bengal tiger, native to India, is the most numerous subspecies. Tigers are currently endangered due to habitat loss and poaching."
  },
  lion: {
    name: "Lion",
    description: "Lions are known as the 'king of the jungle' and are the only cats that live in groups, called prides. A pride may include up to 15 lions. Male lions have a majestic mane, while females do most of the hunting. They primarily live in the grasslands and savannas of Africa. Lions are powerful predators and symbolize strength, courage, and royalty in many cultures."
  },
  elephant: {
    name: "Elephant",
    description: "Elephants are the largest land mammals on Earth. They have large ears, long trunks, and thick grey skin. Their trunks are used for breathing, smelling, drinking, and picking up objects. Elephants are highly intelligent and social animals, living in herds led by a matriarch. They are herbivores and can live up to 70 years. The Asian elephant is smaller than the African elephant and has smaller ears."
  },
  deer: {
    name: "Deer",
    description: "Deer are graceful animals with long legs and antlers (usually found on males). They are herbivores that live in forests and grasslands. Deer are known for their quick movements and excellent hearing. They eat grass, leaves, fruits, and nuts. Their antlers fall off and regrow every year. Some well-known species include the white-tailed deer and the spotted deer found in India."
  },
  giraffe: {
    name: "Giraffe",
    description: "Giraffes are the tallest land animals in the world, reaching heights of up to 18 feet. Their long necks allow them to reach leaves at the tops of trees, especially acacia trees. Giraffes have distinctive spotted patterns, which help them blend into their surroundings. Despite their height, they have only seven neck vertebrae — the same as humans. Giraffes live in Africa and are peaceful herbivores."
  },
  zebra: {
    name: "Zebra",
    description: "Zebras are wild horses native to Africa and are famous for their unique black and white stripes. Each zebra has a different stripe pattern, like a fingerprint. They live in herds and are known for their strong legs and fast running speed. Zebras are herbivores and eat grass and leaves. Their stripes may help confuse predators or regulate their body temperature."
  },
  bear: {
    name: "Bear",
    description: "Bears are large mammals found in forests, mountains, and cold regions. They are omnivores, meaning they eat both plants and animals. Bears have strong claws, thick fur, and an excellent sense of smell. Some species, like the polar bear, live in Arctic regions, while others like the brown bear are found in North America and Europe. Many bears hibernate in the winter."
  },
  wolf: {
    name: "Wolf",
    description: "Wolves are wild dogs known for living and hunting in packs. They are intelligent, social, and have strong teamwork skills. Wolves communicate using howls, body language, and scent marking. They mainly hunt deer, elk, and other animals. Wolves play a vital role in maintaining the balance of ecosystems. The gray wolf is the most common species, and it’s the ancestor of domestic dogs."
  }
};

function showInfo(animalKey) {
  const info = animalData[animalKey];
  document.getElementById("animal-name").innerText = info.name;
  document.getElementById("animal-description").innerText = info.description;
}

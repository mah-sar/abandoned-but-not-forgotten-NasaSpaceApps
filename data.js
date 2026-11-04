// data.js - ALL editable content lives in this file.
//
// HOW TO EDIT:
//  1. Type your text between the quote marks, e.g.   name: "Your text",
//  2. Keep the quote marks and the comma at the end of every line.
//  3. Use \n\n inside a text to start a new paragraph.
//  4. If you need a quote mark inside a text, write \"  (backslash + quote mark).
//  5. Leave a field empty ("") to show "Content will be added after NASA data collection."
//  6. Images: put the file in the assets/ folder and type ONLY its file name,
//     e.g.   image: "my-picture.jpg"
//  7. Sources: type the full web address (https://...). It becomes a clickable link.
//  8. moreImages (optional): extra photos shown under the story. Each one needs
//     image (file name), caption, credit and source. Use moreImages: [] for none.

const objects = [
  // ---------- OBJECT 1 ----------
  {
    name: "Apollo 11 Lunar Module Descent Stage (Eagle)",   // Object name
    missionName: "Apollo 11",                               // Mission it belonged to
    missionDate: "July 20, 1969 (Moon landing)",            // When the mission happened
    target: "Moon",                                         // "Moon" or "Mars"
    description: "The Apollo 11 Lunar Module, named Eagle, carried astronauts Neil Armstrong and Buzz Aldrin to the Moon's surface. Its lower section, called the descent stage, remained on the Moon after the astronauts departed in the upper ascent stage.",
    // Stage 1: The Mission
    purpose: "The descent stage provided the propulsion and landing structure needed to bring Eagle safely down onto the lunar surface. It also carried equipment and supplies and served as the launch platform for the ascent stage when the astronauts departed.",
    // Stage 2: The Discovery
    discoveries: "The descent stage was not itself a scientific instrument, but it made the first crewed lunar landing possible.\n\nArmstrong and Aldrin spent approximately 21.6 hours on the lunar surface. They conducted surface activities, deployed scientific equipment, photographed the area, and collected approximately 20 kilograms of lunar material.",
    importance: "The descent stage enabled one of humanity's most important exploration achievements: the first crewed landing on the Moon.\n\nIt remains a physical reminder of the Apollo 11 mission and the beginning of human exploration on another world.",
    // Stage 3: Where Is It Now?
    location: "Mare Tranquillitatis (Sea of Tranquility), at the Apollo 11 landing site. Approximate landing coordinates: 0.67° N, 23.47° E.",
    stillThere: "Yes",
    status: "The descent stage was left on the lunar surface after the ascent stage departed. NASA's Lunar Reconnaissance Orbiter later photographed the landing site, where the descent stage and astronaut tracks are visible. The stage is no longer operational. Its current physical condition has not been directly inspected.",
    // Image (the file is in assets/)
    image: "apollo-11.jpeg",
    imageCaption: "NASA's Lunar Reconnaissance Orbiter image of the Apollo 11 landing site, showing the descent stage and astronaut tracks.",
    imageCredit: "NASA/Goddard Space Flight Center/Arizona State University",
    moreImages: [
      { image: "apollo11.jpg",
        caption: "The Apollo 11 Lunar Module Eagle on the lunar surface with an astronaut beside it. Both stages are still joined in this photograph; the descent stage is the lower section.",
        credit: "NASA",
        source: "" }   // TODO: add the NASA page this photo came from
    ],
    sources: {
      mission: "https://www.nasa.gov/history/apollo-11-mission-overview/",
      discovery: "https://nasa.gov/wp-content/uploads/static/history/alsj/a11/a11ov.html",
      location: "https://science.nasa.gov/resource/apollo-11-landing-site/",
      research: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo11info.html",
      image: "https://science.nasa.gov/resource/apollo-11-landing-site/"
    }
  },
  // ---------- OBJECT 2 ----------
  {
    name: "Surveyor 3",
    missionName: "Surveyor 3",
    missionDate: "April 20, 1967 (Moon landing, UTC)",
    target: "Moon",
    description: "Surveyor 3 was a robotic NASA spacecraft sent to make a soft landing on the Moon. It carried a television camera and a mechanical surface sampler to study lunar soil. More than two years later, Apollo 12 astronauts landed nearby and visited the spacecraft.",
    // Stage 1: The Mission
    purpose: "Surveyor 3 was designed to land safely on the Moon, photograph the surface, and examine the mechanical properties of lunar soil.\n\nIts investigations helped NASA understand the lunar terrain and prepare for future crewed lunar landings.",
    // Stage 2: The Discovery
    discoveries: "Surveyor 3 returned photographs of the lunar surface and used its mechanical sampler to dig into and examine the lunar soil.\n\nOne of its most unusual stories happened in November 1969, when Apollo 12 astronauts Charles Conrad and Alan Bean landed approximately 600 feet away from Surveyor 3.\n\nThe astronauts visited the old spacecraft, examined it, and removed its television camera and several other components. These parts were returned to Earth for scientific examination to study how exposure to the lunar environment had affected them.",
    importance: "Surveyor 3 helped NASA understand the lunar surface before astronauts explored it.\n\nIts later visit by Apollo 12 provided an unusual opportunity to examine spacecraft materials that had spent more than two years exposed to the lunar environment.",
    // Stage 3: Where Is It Now?
    location: "Southeastern Oceanus Procellarum (Ocean of Storms), on the Moon. Approximate landing coordinates: 3.01° S, 336.66° E.",
    stillThere: "Partly",
    status: "The remaining main lander is still at its lunar landing site. However, its television camera and several other components were removed by Apollo 12 astronauts and returned to Earth. Its current physical condition has not been directly inspected.",
    // Image (the file is in assets/)
    image: "surveyor.jpg",
    imageCaption: "Apollo 12 astronaut Charles Conrad examines Surveyor 3's television camera before removing it. The robotic lander is in the foreground.",
    imageCredit: "NASA",
    moreImages: [
      { image: "surveyor-3.jpg",
        caption: "The Surveyor 3 lander on the lunar surface.",
        credit: "NASA",
        source: "" }   // TODO: add the NASA page this photo came from
    ],
    sources: {
      mission: "https://science.nasa.gov/mission/surveyor-3/",
      discovery: "https://science.nasa.gov/resource/apollo-12-and-surveyor-3/",
      location: "https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html",
      research: "https://science.nasa.gov/mission/surveyor-3/",
      image: "https://science.nasa.gov/resource/apollo-12-and-surveyor-3/"
    }
  },
  // ---------- OBJECT 3 ----------
  {
    name: "Apollo 15 Lunar Roving Vehicle (LRV)",
    missionName: "Apollo 15",
    missionDate: "July 30, 1971 (Moon landing); rover first used July 31, 1971",
    target: "Moon",
    description: "The Apollo 15 Lunar Roving Vehicle was a battery-powered electric vehicle used by astronauts David Scott and James Irwin to travel across the lunar surface.\n\nIt allowed astronauts to explore locations much farther from their lunar module than they could have reached by walking.",
    // Stage 1: The Mission
    purpose: "The rover was designed to carry astronauts and scientific equipment across the Moon.\n\nIts purpose was to increase the distance and range of lunar exploration, allowing astronauts to visit more geological locations and collect additional scientific samples.",
    // Stage 2: The Discovery
    discoveries: "During Apollo 15, the Lunar Roving Vehicle travelled approximately 27.8 kilometres (17.3 miles), with approximately three hours of driving time.\n\nThe rover helped astronauts explore several geological locations, examine the lunar landscape, conduct experiments, and collect rock and soil samples.\n\nIt greatly expanded the distance astronauts could travel during their lunar surface activities.",
    importance: "The Apollo 15 rover was the first vehicle driven by humans on another world.\n\nIt transformed lunar exploration by allowing astronauts to travel farther, examine more locations, and carry scientific equipment across the lunar surface.",
    // Stage 3: Where Is It Now?
    location: "The Hadley-Apennine region of the Moon, near Hadley Rille, at the rover's last parking position.",
    stillThere: "Yes, at its last known position",
    status: "The rover was left parked on the lunar surface after the astronauts completed their final excursion. NASA's Apollo 15 historical records include a photograph of its final parking position. It is no longer operational, and its current physical condition has not been directly inspected.",
    // Image (TODO: save apollo15-lunar-rover.jpg in assets/, then type that file name here)
    image: "apollo15.jpg",
    imageCaption: "The Apollo 15 Lunar Roving Vehicle at its final parked position after the third lunar excursion.",
    imageCredit: "NASA",
    moreImages: [],
    sources: {
      mission: "https://www.nasa.gov/specials/apollo50th/missions.html",
      discovery: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
      location: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
      research: "https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_15a_Summary.htm",
      image: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/"
    }
  },
  // ---------- OBJECT 4 ----------
  {
    name: "Viking 1 Lander",
    missionName: "Viking 1",
    missionDate: "July 20, 1976 (Mars landing); launched August 20, 1975",
    target: "Mars",
    description: "Viking 1 was NASA's first spacecraft to land successfully on Mars and return images from the planet's surface.\n\nIt was a stationary lander equipped with cameras, scientific instruments, a robotic arm, and experiments designed to investigate Martian soil and search for possible signs of life.",
    // Stage 1: The Mission
    purpose: "Viking 1 was designed to investigate Mars, photograph its surface, study its soil and atmosphere, and conduct experiments to search for possible signs of life.\n\nIts scientific equipment included a camera system, a robotic soil sampler, a weather instrument package, and a biological laboratory.",
    // Stage 2: The Discovery
    discoveries: "Viking 1 returned the first photograph ever taken from the surface of Mars.\n\nIts robotic arm collected soil samples for scientific experiments. Its biological experiments produced unusual chemical results, but did not provide definitive evidence of living microorganisms.\n\nThe lander also studied the Martian atmosphere, weather, and soil composition. The broader Viking mission, including its orbiters, helped scientists identify geological evidence of ancient water activity on Mars.",
    importance: "Viking 1 began a new era of direct robotic exploration of Mars.\n\nIt provided the first successful U.S. landing on Mars with photographs and detailed surface measurements, helping scientists understand the planet and improve later exploration missions.",
    // Stage 3: Where Is It Now?
    location: "Chryse Planitia (Golden Plain), Mars.",
    stillThere: "Yes, at its last known landing site",
    status: "Viking 1 operated for more than six years. Its communications ended in November 1982 after a faulty command interrupted contact with Earth. Attempts to restore communication were unsuccessful. Its present physical condition has not been directly verified.",
    // Image (the file is in assets/)
    image: "viking-1.webp",
    imageCaption: "The first photograph ever taken from the surface of Mars, captured by Viking 1 shortly after landing. This is a view from the lander, not a photograph of the lander itself.",
    imageCredit: "NASA/JPL",
    moreImages: [],
    sources: {
      mission: "https://science.nasa.gov/mission/viking-1/",
      discovery: "https://science.nasa.gov/astrobiology/missions/viking-project/",
      location: "https://science.nasa.gov/mission/viking-1/",
      research: "https://www.jpl.nasa.gov/missions/viking-1/",
      image: "https://science.nasa.gov/photojournal/first-photograph-taken-on-mars-surface/"
    }
  },
  // ---------- OBJECT 5 ----------
  {
    name: "Opportunity Rover",
    missionName: "Mars Exploration Rover Mission",
    missionDate: "January 24, 2004 (Mars landing); launched July 7, 2003",
    target: "Mars",
    description: "Opportunity was a NASA robotic rover sent to explore Mars and investigate whether liquid water had existed there in the past.\n\nIt was originally designed to operate for just 90 Martian days, but continued exploring the Red Planet for almost 15 years.",
    // Stage 1: The Mission
    purpose: "Opportunity was designed to explore Martian rocks and soil, study the planet's geology, and investigate locations where liquid water may once have existed.\n\nIts scientific instruments examined rock composition, textures, and evidence of past water activity.",
    // Stage 2: The Discovery
    discoveries: "Opportunity found evidence that parts of Mars were once wet for extended periods.\n\nIt discovered rocks and minerals associated with ancient water, including small spherical hematite-rich features that scientists nicknamed \"blueberries.\"\n\nThe rover greatly exceeded its original mission plan. It was designed for 90 Martian days and approximately 1 kilometre of travel, but eventually travelled approximately 45.16 kilometres and operated for almost 15 years.\n\nOpportunity did not discover life. It found evidence about ancient water and potentially habitable conditions.",
    importance: "Opportunity provided important evidence about Mars' ancient environment and helped scientists understand that parts of Mars may once have been much wetter than they are today.\n\nIts unexpectedly long mission also demonstrated the possibilities of long-term robotic exploration.",
    // Stage 3: Where Is It Now?
    location: "Perseverance Valley, on the western rim of Endeavour Crater, Mars.",
    stillThere: "Yes, at its last known location",
    status: "A severe Mars-wide dust storm reduced sunlight reaching the rover's solar panels in 2018. Its last communication was received on June 10, 2018. After more than a thousand commands to restore contact, NASA officially declared the mission over on February 13, 2019. Its present physical condition has not been directly verified.",
    // Image (the file is in assets/)
    image: "opportunity.jpg",
    imageCaption: "Opportunity's self-portrait at Perseverance Valley on the slopes of Endeavour Crater, taken during its mission on Mars.",
    imageCredit: "NASA/JPL-Caltech",
    moreImages: [],
    sources: {
      mission: "https://science.nasa.gov/mission/mer-opportunity/",
      discovery: "https://science.nasa.gov/resource/meridiani-planum-2/",
      location: "https://science.nasa.gov/resource/opportunitys-last-message/",
      research: "https://www.nasa.gov/news-release/nasas-record-setting-opportunity-rover-mission-on-mars-comes-to-end/",
      image: "https://science.nasa.gov/photojournal/opportunitys-first-selfie/"
    }
  }
];

// ---------- QUIZ QUESTIONS ----------
// To add a question, copy one block, paste it after the last one (with a comma between blocks).
//   question:    the question text
//   options:     exactly four answer options
//   correct:     number of the correct option: 1, 2, 3 or 4
//   explanation: shown after the visitor answers
//   object:      related object (use the same name as in the list above)
const quizQuestions = [
  {
    question: "Which part of Apollo 11's Eagle Lunar Module was left on the Moon?",
    options: ["The command module", "The descent stage", "The ascent stage", "The service module"],
    correct: 2,
    explanation: "The descent stage remained on the lunar surface after the astronauts departed in the ascent stage.",
    object: "Apollo 11 Lunar Module Descent Stage (Eagle)"
  },
  {
    question: "What happened to Surveyor 3's television camera?",
    options: ["It was destroyed during landing.", "It was sent into lunar orbit.", "Apollo 12 astronauts removed it and brought it back to Earth.", "It was transferred to another Surveyor spacecraft."],
    correct: 3,
    explanation: "Apollo 12 astronauts visited Surveyor 3 and returned its television camera and several other components to Earth for scientific examination.",
    object: "Surveyor 3"
  },
  {
    question: "What was the main purpose of the Apollo 15 Lunar Roving Vehicle?",
    options: ["To launch astronauts into lunar orbit.", "To extend the astronauts' exploration range across the Moon.", "To collect samples automatically without astronauts.", "To send photographs directly to Mars."],
    correct: 2,
    explanation: "The electric rover allowed astronauts to travel farther from their lunar module and visit more geological locations.",
    object: "Apollo 15 Lunar Roving Vehicle (LRV)"
  },
  {
    question: "What did Viking 1's experiments find about life on Mars?",
    options: ["They did not provide definitive evidence of life.", "They discovered living plants.", "They found animals beneath the soil.", "They proved that Mars had oceans of living organisms."],
    correct: 1,
    explanation: "Viking 1 carried out experiments designed to search for signs of life, but the results did not provide definitive evidence of living microorganisms.",
    object: "Viking 1 Lander"
  },
  {
    question: "What caused Opportunity to stop communicating with Earth?",
    options: ["It ran out of fuel during launch.", "It entered orbit around the Sun.", "A severe Mars-wide dust storm blocked sunlight from its solar panels.", "It was intentionally switched off after 90 days."],
    correct: 3,
    explanation: "The severe dust storm reduced the sunlight reaching Opportunity's solar panels and affected its ability to generate enough power to communicate with Earth.",
    object: "Opportunity Rover"
  }
];

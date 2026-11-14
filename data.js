

const objects = [
  // ---------- OBJECT 1 ----------
  {
    name: "Apollo 11 Lunar Module Descent Stage (Eagle)",   // Object name
    missionName: "Apollo 11",                               // Mission it belonged to
    missionDate: "July 20, 1969 (Moon landing)",            // When the mission happened
    target: "Moon",                                         // "Moon" or "Mars"
    description: "The Apollo 11 Lunar Module, named Eagle, carried astronauts Neil Armstrong and Buzz Aldrin to the Moon's surface. Its lower section, called the descent stage, remained on the Moon after the astronauts departed in the upper ascent stage.",
    // The Full Story: short chapters, shown above the four tabs.
    story: [
      { heading: "Half of a spacecraft, designed to stay",
        text: "The Lunar Module Eagle was built in two parts. The ascent stage on top was the crew's cabin. The descent stage below it was a strong base with landing legs and the propulsion needed for the landing. It was designed to stay behind: when the astronauts left, the descent stage would be the platform they launched from." },
      { heading: "A landing with little fuel to spare",
        text: "On July 20, 1969, Eagle came down toward the Sea of Tranquility. Armstrong took over manual control and flew over a rocky area while Aldrin read out numbers from the instruments. In Houston, controllers counted down the fuel, and they had just called out thirty seconds remaining when Eagle touched down. Armstrong radioed: \"Houston, Tranquility Base here. The Eagle has landed.\"" },
      { heading: "A message on a landing leg",
        text: "When Armstrong climbed down the ladder, he uncovered a stainless-steel plaque on one of the descent stage's landing legs. It had been covered by a thin steel sheet during the flight. The plaque carries the signatures of the three Apollo 11 astronauts and the U.S. president, and a short message: \"We came in peace for all mankind.\"" },
      { heading: "From base to launch pad",
        text: "The descent stage had one more job to do. When Armstrong and Aldrin were ready to leave, the ascent stage lifted off from the top of it to carry them back to lunar orbit. The descent stage stayed on the Moon, still carrying its plaque." },
      { heading: "Seen again from orbit",
        text: "Decades later, NASA's Lunar Reconnaissance Orbiter photographed the Apollo 11 landing site. In its pictures, the descent stage and the astronauts' tracks can be seen on the surface. The stage is no longer operational, and its present physical condition has not been directly inspected." },
      { heading: "Why it still matters",
        text: "The descent stage did not carry out science of its own. Its achievement was making the first crewed landing on the Moon possible. Today it is a physical reminder of Apollo 11 and of the beginning of human exploration on another world." }
    ],
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
    image: "apollo11.jpg",
    imageCaption: "The Apollo 11 Lunar Module Eagle on the lunar surface with an astronaut beside it. Both stages are still joined in this photograph; the descent stage is the lower section.",
    imageCredit: "NASA",
    imagePosition: "center 68%",
    moreImages: [
      { image: "apollo-11.jpeg",
        caption: "NASA's Lunar Reconnaissance Orbiter image of the Apollo 11 landing site, showing the descent stage and astronaut tracks.",
        credit: "NASA/Goddard Space Flight Center/Arizona State University",
        source: "https://science.nasa.gov/resource/apollo-11-landing-site/" }
    ],
    // Timeline tab (Stage 4): historical events in date order. key: true highlights a moment.
    timelineLocation: "Moon — Sea of Tranquility",
    timeline: [
      { date: "July 16, 1969", title: "Apollo 11 launches",
        text: "Apollo 11 launches from Kennedy Space Center aboard a Saturn V rocket." },
      { date: "July 20, 1969", title: "Eagle lands on the Moon", key: true,
        text: "The Eagle Lunar Module lands in the Sea of Tranquility, carrying Neil Armstrong and Buzz Aldrin." },
      { date: "July 21, 1969", title: "First lunar surface exploration",
        text: "Armstrong and Aldrin complete their lunar surface activities and deploy scientific equipment." },
      { date: "July 21, 1969", title: "The descent stage is left behind", key: true,
        text: "The Lunar Module's ascent stage lifts off to return the astronauts to lunar orbit. The descent stage, including its landing legs, remains on the Moon." }
    ],
    timelineHighlight: "",
    timelineNote: "Dates follow NASA's mission timeline, which uses GMT: the landing is recorded on July 20, and the first lunar surface activity and the ascent-stage liftoff on July 21.",
    sources: {
      mission: "https://www.nasa.gov/history/apollo-11-mission-overview/",
      discovery: "https://www.nasa.gov/history/apollo-11-mission-overview/",
      location: "https://science.nasa.gov/resource/apollo-11-landing-site/",
      research: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo11info.html",
      image: "https://www.nasa.gov/image-detail/amf-as11-40-5927/",
      timeline: ["https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_11i_Timeline.htm", "https://www.nasa.gov/history/apollo-11-mission-overview/"],
      story: ["https://science.nasa.gov/resource/apollo-11-plaque/", "https://www.nasa.gov/?p=168313", "https://www.nasa.gov/history/apollo-11-mission-overview/", "https://science.nasa.gov/resource/apollo-11-landing-site/"]
    }
  },
  // ---------- OBJECT 2 ----------
  {
    name: "Surveyor 3",
    missionName: "Surveyor 3",
    missionDate: "April 20, 1967 (Moon landing, UTC)",
    target: "Moon",
    description: "Surveyor 3 was a robotic NASA spacecraft sent to make a soft landing on the Moon. It carried a television camera and a mechanical surface sampler to study lunar soil. More than two years later, Apollo 12 astronauts landed nearby and visited the spacecraft.",
    story: [
      { heading: "A scout before the astronauts",
        text: "Surveyor 3 was a robotic lander launched in April 1967, more than two years before the first astronauts landed on the Moon. Its job was to test whether a spacecraft could make a soft landing, to photograph the surface and to examine the lunar soil. This helped NASA understand the Moon before people explored it." },
      { heading: "A bumpy arrival",
        text: "Surveyor 3 reached the Moon on April 20, 1967, but its landing did not go as planned. It bounced twice before it came to rest on the inside slope of a small crater in the Ocean of Storms." },
      { heading: "A camera and a robotic scoop",
        text: "Once it was down, Surveyor 3 went to work. Its television camera sent back thousands of pictures, and a mechanical scoop on an arm dug into the lunar soil while the camera watched. The trenches helped engineers learn about the soil that astronauts would soon walk on." },
      { heading: "Silence",
        text: "NASA received the last contact from Surveyor 3 on May 4, 1967. After that, the lander sat quietly in its crater, and for a while that seemed to be the end of its story." },
      { heading: "Visitors from Earth",
        text: "On November 19–20, 1969, Apollo 12 astronauts Charles Conrad and Alan Bean landed less than 200 metres (about 600 feet) from the old lander. They examined it and removed its television camera, its soil scoop and other parts to bring back to Earth. Scientists wanted to learn how more than two years on the Moon had affected the materials." },
      { heading: "A camera in a museum",
        text: "The television camera that sat on the Moon is now on display at the Smithsonian's National Air and Space Museum in Washington, D.C. The rest of the lander is still at its landing site, which NASA's Lunar Reconnaissance Orbiter photographed in 2009. Its present physical condition has not been directly inspected." }
    ],
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
        source: "https://nssdc.gsfc.nasa.gov/imgcat/html/object_page/a12_h_48_7121.html" }
    ],
    timelineLocation: "Moon — Oceanus Procellarum (Ocean of Storms)",
    timeline: [
      { date: "April 17, 1967", title: "Launch",
        text: "Surveyor 3 launches from Cape Canaveral to test whether a spacecraft can make a soft landing on the Moon." },
      { date: "April 20, 1967", title: "Lunar landing", key: true,
        text: "Surveyor 3 successfully lands on the Moon after bouncing twice during its descent." },
      { date: "May 4, 1967", title: "Last communication",
        text: "NASA receives the last contact from Surveyor 3 after it has sent thousands of television images and carried out surface experiments." },
      { date: "November 19–20, 1969", title: "Apollo 12 visits Surveyor 3", key: true,
        text: "Apollo 12 astronauts Charles Conrad and Alan Bean visit the inactive lander. They retrieve its television camera, soil scoop, and other parts to bring back to Earth for examination." }
    ],
    timelineHighlight: "",
    timelineNote: "NASA sources give November 19 or November 20 for the Apollo 12 visit, depending on the source and the time convention.",
    sources: {
      mission: "https://science.nasa.gov/mission/surveyor-3/",
      discovery: "https://science.nasa.gov/resource/apollo-12-and-surveyor-3/",
      location: "https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html",
      research: "https://science.nasa.gov/mission/surveyor-3/",
      image: "https://science.nasa.gov/resource/apollo-12-and-surveyor-3/",
      timeline: ["https://science.nasa.gov/mission/surveyor-3/", "https://science.nasa.gov/resource/apollo-12-and-surveyor-3/", "https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_12i_Timeline.htm"],
      story: ["https://science.nasa.gov/image-article/apod-1999-april-08-apollo-12-surveyor-3-and-intrepid/", "https://science.nasa.gov/mission/surveyor-3/", "https://science.nasa.gov/resource/apollo-12-and-surveyor-3/", "https://www.engr.colostate.edu/~hillger/pdf/Surveyor-3_visited_by_Apollo-12.pdf"]
    }
  },
  // ---------- OBJECT 3 ----------
  {
    name: "Apollo 15 Lunar Roving Vehicle (LRV)",
    missionName: "Apollo 15",
    missionDate: "July 30, 1971 (Moon landing); rover first used July 31, 1971",
    target: "Moon",
    description: "The Apollo 15 Lunar Roving Vehicle was a battery-powered electric vehicle used by astronauts David Scott and James Irwin to travel across the lunar surface.\n\nIt allowed astronauts to explore locations much farther from their lunar module than they could have reached by walking.",
    story: [
      { heading: "A car folded like a suitcase",
        text: "The Lunar Roving Vehicle travelled to the Moon folded up in a storage bay on the Lunar Module's descent stage. Its wheels were folded in and its frame was folded over its middle. Apollo 15 was the first mission to use one. Apollo 16 and Apollo 17 carried the other two." },
      { heading: "Unpacking day",
        text: "On July 31, 1971, David Scott and James Irwin unloaded the rover and set it up on the lunar surface. It was a battery-powered electric vehicle that the astronauts drove themselves, and it was the first vehicle ever driven on the Moon." },
      { heading: "Tires made of wire",
        text: "The rover's tires were not rubber. They were made of spring-steel wire mesh, with titanium-alloy chevrons to help them grip." },
      { heading: "A rocky start",
        text: "The first day of driving did not go perfectly: only the rover's rear wheels could steer at first. Even so, the rover let Scott and Irwin travel farther across the lunar landscape, collect samples and investigate geological features. Over the mission it travelled about 27.8 kilometres (17.3 miles)." },
      { heading: "One last parking spot",
        text: "On August 2, 1971, the astronauts parked the rover in its final position so that it could provide television coverage of the Lunar Module's departure. Then they lifted off and left the rover behind." },
      { heading: "Still on the Moon",
        text: "The Apollo 15 rover is still parked in the Hadley-Apennine region, near Hadley Rille. It is no longer operational, and NASA's Apollo 15 historical records include a photograph of its final parking position. Its present physical condition has not been directly inspected." }
    ],
    // Stage 1: The Mission
    purpose: "The rover was designed to carry astronauts and scientific equipment across the Moon.\n\nIts purpose was to increase the distance and range of lunar exploration, allowing astronauts to visit more geological locations and collect additional scientific samples.",
    // Stage 2: The Discovery
    discoveries: "During Apollo 15, the Lunar Roving Vehicle travelled approximately 27.8 kilometres (17.3 miles), with approximately three hours of driving time.\n\nThe rover helped astronauts explore several geological locations, examine the lunar landscape, conduct experiments, and collect rock and soil samples.\n\nIt greatly expanded the distance astronauts could travel during their lunar surface activities.",
    importance: "The Apollo 15 rover was the first vehicle driven by humans on another world.\n\nIt transformed lunar exploration by allowing astronauts to travel farther, examine more locations, and carry scientific equipment across the lunar surface.",
    // Stage 3: Where Is It Now?
    location: "The Hadley-Apennine region of the Moon, near Hadley Rille, at the rover's last parking position.",
    stillThere: "Yes, at its last known position",
    status: "The rover was left parked on the lunar surface after the astronauts completed their final excursion. NASA's Apollo 15 historical records include a photograph of its final parking position. It is no longer operational, and its current physical condition has not been directly inspected.",
    // Image (the file is in assets/)
    image: "apollo15.jpg",
    imageCaption: "An Apollo 15 astronaut seated on the Lunar Roving Vehicle on the lunar surface.",
    imageCredit: "NASA",
    imagePosition: "center 55%",
    moreImages: [
      { image: "apollo-15.jpg",
        caption: "The Lunar Roving Vehicle on the lunar surface with an astronaut beside it and a mountain in the background.",
        credit: "NASA",
        source: "https://science.nasa.gov/resource/apollo-15-on-the-moon/" }
    ],
    timelineLocation: "Moon — Hadley-Apennine region",
    timeline: [
      { date: "July 26, 1971", title: "Apollo 15 launches",
        text: "Apollo 15 launches with astronauts David Scott, James Irwin, and Alfred Worden." },
      { date: "July 30, 1971", title: "Lunar landing",
        text: "The Apollo 15 Lunar Module Falcon lands near Hadley Rille." },
      { date: "July 31, 1971", title: "The rover is deployed", key: true,
        text: "Astronauts unload and deploy the Lunar Roving Vehicle, then begin exploring the lunar surface with it." },
      { date: "August 1, 1971", title: "Second day of rover exploration",
        text: "Scott and Irwin use the rover to travel farther across the lunar landscape, collect samples, and investigate geological features." },
      { date: "August 2, 1971", title: "Final parking position", key: true,
        text: "The rover is parked in its final position to provide television coverage of the Lunar Module's departure. The astronauts leave it behind when they lift off." }
    ],
    timelineHighlight: "The rover helped the Apollo 15 astronauts explore much more lunar terrain than earlier Moon-walking crews. NASA reports that they travelled about 17.5 miles in the first vehicle driven on the Moon.",
    timelineNote: "",
    sources: {
      mission: "https://www.nasa.gov/specials/apollo50th/missions.html",
      discovery: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
      location: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
      research: "https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_15a_Summary.htm",
      image: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
      timeline: ["https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_15i_Timeline.htm", "https://www.nasa.gov/missions/apollo/apollo-15-mission-details/", "https://science.nasa.gov/resource/apollo-15-on-the-moon/"],
      story: ["https://apolloexplorer.co.uk/books/sp-4214/ch13-3.html", "https://www.astronomy.com/observing/a-car-for-the-moon-the-lunar-roving-vehicle", "https://ccssc.org/apollo15rover", "https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_15i_Timeline.htm", "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/"]
    }
  },
  // ---------- OBJECT 4 ----------
  {
    name: "Viking 1 Lander",
    missionName: "Viking 1",
    missionDate: "July 20, 1976 (Mars landing); launched August 20, 1975",
    target: "Mars",
    description: "Viking 1 was NASA's first spacecraft to land successfully on Mars and return images from the planet's surface.\n\nIt was a stationary lander equipped with cameras, scientific instruments, a robotic arm, and experiments designed to investigate Martian soil and search for possible signs of life.",
    story: [
      { heading: "Two spacecraft in one",
        text: "Viking 1 was really two spacecraft travelling together: an orbiter and a lander. They left Earth on August 20, 1975, and on June 19, 1976 the spacecraft entered orbit around Mars. From orbit it began studying possible landing areas." },
      { heading: "A holiday given up",
        text: "The first plan was to land on July 4, 1976, the 200th birthday of the United States. But when the orbiter sent back pictures of the first landing site, scientists found that the area was rougher than expected. The team chose a different site instead." },
      { heading: "Touchdown on the Golden Plain",
        text: "On July 20, 1976, the lander touched down on Chryse Planitia, the Golden Plain, and began sending the first images from the surface of Mars. Viking 1 returned the first photograph ever taken from the surface of Mars." },
      { heading: "Digging for answers",
        text: "On July 28, 1976, the lander's robotic arm collected its first samples of Martian soil for experiments. Some of the experiments were designed to search for possible signs of life. They produced unusual chemical results, but did not provide definitive evidence of living microorganisms." },
      { heading: "Six years on the surface",
        text: "Viking 1 kept working for more than six years, studying the Martian atmosphere, weather and soil. Its twin, Viking 2, landed later in 1976. The broader Viking mission, including its orbiters, helped scientists identify geological evidence of ancient water activity on Mars." },
      { heading: "A lander with a new name",
        text: "In January 1982, the lander was renamed the Thomas Mutch Memorial Station, in honor of the leader of the Viking imaging team, who had died in 1980." },
      { heading: "A faulty command",
        text: "On November 11, 1982, a faulty command sent from Earth interrupted communications with the lander. Engineers at NASA's Jet Propulsion Laboratory tried for months to regain contact, but they concluded that communications could not be re-established. The lander remains at its landing site, and its present physical condition has not been directly verified." }
    ],
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
    moreImages: [
      { image: "viking-lander-model.jpg",
        caption: "Model: a model of a Viking lander on a simulated Martian surface. This photograph was taken on Earth, not on Mars.",
        credit: "NASA/JPL-Caltech/University of Arizona",
        source: "https://www.jpl.nasa.gov/images/pia09703-viking-lander-model/" }
    ],
    timelineLocation: "Mars — Chryse Planitia",
    timeline: [
      { date: "August 20, 1975", title: "Launch",
        text: "Viking 1 launches from Cape Canaveral on its journey to Mars." },
      { date: "June 19, 1976", title: "Mars orbit",
        text: "The spacecraft enters orbit around Mars and begins studying possible landing areas." },
      { date: "July 20, 1976", title: "Successful landing", key: true,
        text: "Viking 1 lands safely on Chryse Planitia and begins transmitting the first images from the Martian surface." },
      { date: "July 28, 1976", title: "First soil samples",
        text: "The lander's robotic arm collects its first samples of Martian soil for experiments." },
      { date: "November 11, 1982", title: "Communication interrupted", key: true,
        text: "A faulty command interrupts communications with the lander. NASA is unable to restore contact." }
    ],
    timelineHighlight: "",
    timelineNote: "NASA's Viking 1 mission page describes the communications interruption on November 11, 1982. NASA's broader Viking Project page lists November 13, 1982 as the lander's formal end-of-mission date.",
    sources: {
      mission: "https://science.nasa.gov/mission/viking-1/",
      discovery: "https://science.nasa.gov/astrobiology/missions/viking-project/",
      location: "https://science.nasa.gov/mission/viking-1/",
      research: "https://www.jpl.nasa.gov/missions/viking-1/",
      image: "https://science.nasa.gov/photojournal/first-photograph-taken-on-mars-surface/",
      timeline: ["https://science.nasa.gov/mission/viking-1/", "https://science.nasa.gov/mission/viking/"],
      story: ["https://science.nasa.gov/?p=106445", "https://www.jpl.nasa.gov/news/attempts-to-communicate-to-viking-lander-1-concluded/", "https://science.nasa.gov/mission/viking-1/", "https://science.nasa.gov/astrobiology/missions/viking-project/"]
    }
  },
  // ---------- OBJECT 5 ----------
  {
    name: "Opportunity Rover",
    missionName: "Mars Exploration Rover Mission",
    missionDate: "January 24, 2004 (Mars landing); launched July 7, 2003",
    target: "Mars",
    description: "Opportunity was a NASA robotic rover sent to explore Mars and investigate whether liquid water had existed there in the past.\n\nIt was originally designed to operate for just 90 Martian days, but continued exploring the Red Planet for almost 15 years.",
    story: [
      { heading: "Built for 90 days",
        text: "Opportunity was designed to operate for just 90 Martian days and to travel about 1 kilometre. Its mission was to explore Mars and investigate whether liquid water had existed there in the past." },
      { heading: "A hole-in-one",
        text: "Opportunity landed on January 24, 2004 in Pacific time, which was January 25 in UTC. Its airbag-cushioned lander hit the ground, bounced and rolled right into a small crater, later named Eagle Crater. Bare rock was exposed there, and it gave scientists some of the first clues about past water in the region." },
      { heading: "Blueberries and ancient water",
        text: "Opportunity found evidence that parts of Mars were once wet for extended periods. It discovered rocks and minerals associated with ancient water, including small spherical hematite-rich features that scientists nicknamed \"blueberries.\"" },
      { heading: "Much farther than planned",
        text: "Opportunity spent more than half of its planned three-month mission exploring Eagle Crater, then kept going. On July 26, 2004, it reached its 180th Martian day, twice its planned primary mission. It went on to visit much larger craters, and reached Endeavour Crater, about 1,000 times wider than Eagle, in 2011. In March 2015 it passed the distance of a marathon, 26.2 miles." },
      { heading: "A rock from space",
        text: "Along the way, Opportunity examined its own discarded heat shield and found a meteorite nearby, now known as Heat Shield Rock." },
      { heading: "The storm",
        text: "In 2018, a severe planet-wide dust storm reduced the sunlight reaching Opportunity's solar panels. NASA received the rover's last signal on June 10, 2018." },
      { heading: "Two places on Mars",
        text: "After more than a thousand commands to restore contact, NASA declared the mission over on February 13, 2019. Opportunity remains in Perseverance Valley, on the western rim of Endeavour Crater. Its landing platform was left behind in Eagle Crater, where the story began, and NASA's Mars Reconnaissance Orbiter photographed it there from orbit. The rover's present physical condition has not been directly verified." }
    ],
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
    image: "PIA18079.jpg",
    imageCaption: "A self-portrait of Opportunity taken by its panoramic camera in March 2014, after winds had removed much of the dust from its solar panels.",
    imageCredit: "NASA/JPL-Caltech/Cornell Univ./Arizona State Univ.",
    imagePosition: "center 40%",
    moreImages: [
      { image: "PIA10229.jpg", wide: true,
        caption: "Opportunity's \"Lyell\" panorama inside Victoria Crater, shown in false color. The rover's own deck and solar panels fill the foreground.",
        credit: "NASA/JPL-Caltech/Cornell University",
        source: "https://photojournal.jpl.nasa.gov/catalog/PIA10229" },
      { image: "opportunity.jpg",
        caption: "Opportunity's self-portrait at Perseverance Valley on the slopes of Endeavour Crater, taken during its mission on Mars.",
        credit: "NASA/JPL-Caltech",
        source: "https://science.nasa.gov/photojournal/opportunitys-first-selfie/" },
      { image: "opportunity-artist-concept.jpg",
        caption: "Illustration: an artist's concept of a NASA Mars Exploration Rover on the surface of Mars, the same type of rover as Opportunity. This is an illustration, not a photograph.",
        credit: "NASA/JPL/Cornell University",
        source: "https://www.jpl.nasa.gov/images/pia04413-artists-concept-of-rover-on-mars" }
    ],
    timelineLocation: "Mars — Meridiani Planum / Perseverance Valley",
    timeline: [
      { date: "July 7, 2003", title: "Launch",
        text: "Opportunity launches from Cape Canaveral to investigate Mars and search for evidence of ancient water." },
      { date: "January 24–25, 2004", title: "Mars landing", key: true,
        text: "Opportunity lands at Meridiani Planum. NASA gives January 24 as the Pacific local date and January 25 as the UTC date." },
      { date: "July 26, 2004", title: "Surpasses its planned lifetime",
        text: "Opportunity reaches its 180th Martian day, twice its planned 90-sol primary mission." },
      { date: "June 10, 2018", title: "Last communication",
        text: "NASA receives Opportunity's last signal during a severe planet-wide dust storm that reduces sunlight reaching its solar panels." },
      { date: "February 13, 2019", title: "Mission declared over", key: true,
        text: "After many attempts to restore contact, NASA officially declares the Opportunity mission complete." }
    ],
    timelineHighlight: "Opportunity was designed for 90 Martian days but operated for almost 15 years and travelled approximately 45.16 kilometres.",
    timelineNote: "",
    sources: {
      mission: "https://science.nasa.gov/mission/mer-opportunity/",
      discovery: "https://science.nasa.gov/resource/meridiani-planum-2/",
      location: "https://science.nasa.gov/resource/opportunitys-last-message/",
      research: "https://www.nasa.gov/news-release/nasas-record-setting-opportunity-rover-mission-on-mars-comes-to-end/",
      image: "https://science.nasa.gov/photojournal/self-portrait-by-freshly-cleaned-opportunity-mars-rover-in-march-2014",
      timeline: ["https://science.nasa.gov/mission/mer-opportunity/", "https://science.nasa.gov/missions/mer/nasas-opportunity-rover-mission-on-mars-comes-to-end/", "https://science.nasa.gov/resource/last-commands-to-opportunity/"],
      story: ["https://www.nasa.gov/image-feature/jpl/pia21494/rovers-landing-hardware-at-eagle-crater-mars", "https://science.nasa.gov/?p=995698", "https://skyandtelescope.org/astronomy-news/opportunity-end-long-road/", "https://science.nasa.gov/mission/mer-opportunity/", "https://www.nasa.gov/news-release/nasas-record-setting-opportunity-rover-mission-on-mars-comes-to-end/"]
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

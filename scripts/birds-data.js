// scripts/birds-data.js
const birdsData = [
  {
    id: 1,
    name: "Домовый воробей",
    scientific: "Passer domesticus",
    image: "images/sparrows/sparrow4.jpg",
    description: "Один из самых распространённых видов воробьёв. Обитает вблизи человеческого жилья, хорошо приспособлен к жизни в городах. Питается семенами, насекомыми, пищевыми отходами.",
    rarity: "common",
    season: "year-round",
    size: "14-16 см",
    weight: "25-35 г"
  },
  {
    id: 2,
    name: "Большая синица",
    scientific: "Parus major",
    image: "images/sparrows/sparrow2.jpg",
    description: "Крупная синица с ярким жёлтым брюшком и чёрной полосой вдоль груди. Обитает в лесах, садах и парках. Питается насекомыми, семенами, зимой посещает кормушки.",
    rarity: "common",
    season: "year-round",
    size: "14-16 см",
    weight: "16-21 г"
  },
  {
        id: 3,
        name: "Обыкновенный снегирь",
        scientific: "Pyrrhula pyrrhula",
        image: "images/sparrows/sparrow22.jpg",
        description: "Яркая птица с красной грудью у самцов и серой у самок. Обитает в хвойных и смешанных лесах. Питается семенами, почками, ягодами. Часто посещает кормушки зимой.",
        rarity: "common",
        season: "winter",
        size: "15-18 см",
        weight: "24-35 г"
      },
      {
        id: 4,
        name: "Зяблик",
        scientific: "Fringilla coelebs",
        image: "images/sparrows/sparrow9.jpg",
        description: "Яркая певчая птица с контрастным оперением. Обитает в лесах, парках, садах. Питается семенами и насекомыми. Известен красивой песней.",
        rarity: "common",
        season: "summer",
        size: "14-16 см",
        weight: "19-24 г"
      },
      {
        id: 5,
        name: "Чиж",
        scientific: "Spinus spinus",
        image: "images/sparrows/sparrow37.jpg",
        description: "Мелкая птица с жёлто-зелёным оперением. Обитает в хвойных лесах. Питается семенами хвойных и лиственных деревьев. Часто держится стайками.",
        rarity: "common",
        season: "winter",
        size: "11-12 см",
        weight: "12-16 г"
      },
      {
        id: 6,
        name: "Щегол",
        scientific: "Carduelis carduelis",
        image: "images/sparrows/sparrow38.jpg",
        description: "Яркая птица с красным лицом и жёлтыми полосами на крыльях. Обитает в светлых лесах, садах. Питается семенами сложноцветных растений.",
        rarity: "common",
        season: "year-round",
        size: "12-13 см",
        weight: "14-19 г"
      },
      {
        id: 7,
        name: "Обыкновенная чечевица",
        scientific: "Carpodacus erythrinus",
        image: "images/sparrows/sparrow19.jpg",
        description: "Птица с ярко-красной окраской у самцов. Обитает в кустарниковых зарослях у воды. Питается семенами и насекомыми. Песня — звонкое «вит-вит-вит-вью».",
        rarity: "rare",
        season: "summer",
        size: "14-16 см",
        weight: "21-27 г"
      },
      {
        id: 8,
        name: "Клёст-еловик",
        scientific: "Loxia curvirostra",
        image: "images/sparrows/sparrow12.jpg",
        description: "Птица с крестообразным клювом, приспособленным для добычи семян из шишек. Обитает в хвойных лесах. Может гнездиться зимой при обилии корма.",
        rarity: "rare",
        season: "year-round",
        size: "16-18 см",
        weight: "35-45 г"
      },
      {
        id: 9,
        name: "Урагус",
        scientific: "Uragus sibiricus",
        image: "images/sparrows/sparrow32.jpg",
        description: "Мелкая птица с длинным хвостом и розоватым оперением. Обитает в зарослях кустарников. Питается семенами. Встречается редко, преимущественно в Сибири.",
        rarity: "rare",
        season: "winter",
        size: "16-18 см",
        weight: "15-20 г"
      },
      {
        id: 10,
        name: "Снежный вьюрок",
        scientific: "Montifringilla nivalis",
        image: "images/sparrows/sparrow31.jpg",
        description: "Обитатель высокогорий с контрастным чёрно-белым оперением. Встречается в горах Кавказа. Питается семенами и насекомыми.",
        rarity: "rare",
        season: "year-round",
        size: "17-18 см",
        weight: "35-45 г"
      },
	  {
    id: 11,
    name: "Полевой воробей",
    scientific: "Passer montanus",
    image: "images/sparrows/sparrow23.jpg",
    description: "Отличается от домового воробья коричневой шапочкой и чёрными пятнами на щеках. Обитает в сельской местности, реже в городах. Питается семенами и насекомыми.",
    rarity: "common",
    season: "year-round",
    size: "14-15 см",
    weight: "20-25 г"
  },
  {
    id: 12,
    name: "Обыкновенная овсянка",
    scientific: "Emberiza citrinella",
    image: "images/sparrows/sparrow18.jpg",
    description: "Ярко-жёлтая птица с коричневыми пестринами. Обитает на опушках лесов, в кустарниках. Питается семенами и насекомыми. Песня — звонкое «зинь-зинь-зинь-цииик».",
    rarity: "common",
    season: "year-round",
    size: "16-17 см",
    weight: "25-30 г"
  },
  {
    id: 13,
    name: "Камышовая овсянка",
    scientific: "Emberiza schoeniclus",
    image: "images/sparrows/sparrow11.jpg",
    description: "Овсянка с чёрной головой и белыми усами у самцов. Обитает в зарослях тростника и влажных лугах. Питается семенами и насекомыми.",
    rarity: "common",
    season: "summer",
    size: "15-16 см",
    weight: "16-25 г"
  },
  {
    id: 14,
    name: "Дубровник",
    scientific: "Emberiza aureola",
    image: "images/sparrows/sparrow5.jpg",
    description: "Яркая овсянка с золотистой грудью и каштановой спиной. Обитает на влажных лугах. В последние годы стал редок из-за отлова в Китае.",
    rarity: "rare",
    season: "summer",
    size: "15-16 см",
    weight: "20-25 г"
  },
  {
    id: 15,
    name: "Просянка",
    scientific: "Emberiza calandra",
    image: "images/sparrows/sparrow24.jpg",
    description: "Крупная овсянка с пёстрым оперением. Обитает в открытых сельхозугодьях. Питается семенами. Песня — громкое «зик-зик-зик».",
    rarity: "common",
    season: "summer",
    size: "17-19 см",
    weight: "35-50 г"
  },
  {
    id: 16,
    name: "Садововая овсянка",
    scientific: "Emberiza hortulana",
    image: "images/sparrows/sparrow27.jpg",
    description: "Изящная овсянка с жёлтым горлом и оливково-серой головой. Обитает в садах и на опушках. Питается семенами и насекомыми.",
    rarity: "common",
    season: "summer",
    size: "16-17 см",
    weight: "20-25 г"
  },
  {
    id: 17,
    name: "Пуночка",
    scientific: "Plectrophenax nivalis",
    image: "images/sparrows/sparrow25.jpg",
    description: "Арктическая птица с контрастным чёрно-белым оперением. Зимой встречается на севере России. Питается семенами и насекомыми.",
    rarity: "rare",
    season: "winter",
    size: "16-17 см",
    weight: "35-40 г"
  },
  {
    id: 18,
    name: "Лапландский подорожник",
    scientific: "Calcarius lapponicus",
    image: "images/sparrows/sparrow16.jpg",
    description: "Северная птица с чёрной маской и каштановым затылком. Обитает в тундре, зимой кочует южнее. Питается семенами.",
    rarity: "rare",
    season: "winter",
    size: "15-16 см",
    weight: "25-30 г"
  },
  {
    id: 19,
    name: "Обыкновенный дубонос",
    scientific: "Coccothraustes coccothraustes",
    image: "images/sparrows/sparrow20.jpg",
    description: "Крепкая птица с массивным клювом. Обитает в лиственных лесах и садах. Питается косточками плодов и семенами.",
    rarity: "common",
    season: "year-round",
    size: "18-19 см",
    weight: "48-62 г"
  },
  {
    id: 20,
    name: "Зеленушка",
    scientific: "Chloris chloris",
    image: "images/sparrows/sparrow8.jpg",
    description: "Птица с оливково-зелёным оперением и жёлтыми полосами на крыльях. Обитает в лесах и парках. Питается семенами.",
    rarity: "common",
    season: "year-round",
    size: "15-16 см",
    weight: "25-30 г"
  },
  {
    id: 21,
    name: "Коноплянка",
    scientific: "Linaria cannabina",
    image: "images/sparrows/sparrow14.jpg",
    description: "Мелкая птица с красным лбом и грудью у самцов. Обитает на открытых пространствах с кустарниками. Питается семенами.",
    rarity: "common",
    season: "summer",
    size: "13-14 см",
    weight: "15-20 г"
  },
  {
    id: 22,
    name: "Чечётка",
    scientific: "Acanthis flammea",
    image: "images/sparrows/sparrow36.jpg",
    description: "Мелкая птица с красной шапочкой. Обитает в северных лесах, зимой кочует. Питается семенами берёзы и ольхи.",
    rarity: "common",
    season: "winter",
    size: "12-14 см",
    weight: "12-16 г"
  },
  {
    id: 23,
    name: "Черноголовая гаичка",
    scientific: "Poecile palustris",
    image: "images/sparrows/sparrow35.jpg",
    description: "Мелкая синица с чёрной шапочкой. Обитает в лиственных лесах. Питается насекомыми и семенами. Голос — звонкое «ци-ци-джээ».",
    rarity: "common",
    season: "year-round",
    size: "11-12 см",
    weight: "9-12 г"
  },
  {
    id: 24,
    name: "Московка",
    scientific: "Periparus ater",
    image: "images/sparrows/sparrow17.jpg",
    description: "Мелкая синица с чёрной шапочкой и белыми щеками. Обитает в хвойных лесах. Питается насекомыми и семенами.",
    rarity: "common",
    season: "year-round",
    size: "11-12 см",
    weight: "8-10 г"
  },
  {
    id: 25,
    name: "Хохлатая синица",
    scientific: "Lophophanes cristatus",
    image: "images/sparrows/sparrow34.jpg",
    description: "Синица с характерным хохолком. Обитает в хвойных лесах. Питается насекомыми и семенами. Голос — тонкое «ци-ци-сррр».",
    rarity: "common",
    season: "year-round",
    size: "11-12 см",
    weight: "10-12 г"
  },
  {
    id: 26,
    name: "Ремез",
    scientific: "Remiz pendulinus",
    image: "images/sparrows/sparrow26.jpg",
    description: "Мелкая птица с маской и серой головой. Строит висячие гнёзда из растительных волокон. Обитает в пойменных лесах.",
    rarity: "common",
    season: "summer",
    size: "11-12 см",
    weight: "9-11 г"
  },
  {
    id: 27,
    name: "Зарянка",
    scientific: "Erithacus rubecula",
    image: "images/sparrows/sparrow7.jpg",
    description: "Птица с оранжевой грудью и лицом. Обитает в сырых лесах. Питается насекомыми и ягодами. Поёт мелодичную песню.",
    rarity: "common",
    season: "summer",
    size: "14-15 см",
    weight: "16-22 г"
  },
  {
    id: 28,
    name: "Каменный дрозд",
    scientific: "Monticola saxatilis",
    image: "images/sparrows/sparrow10.jpg",
    description: "Яркий дрозд с сизым верхом и рыжим низом. Обитает в горных районах. Питается насекомыми и ягодами.",
    rarity: "rare",
    season: "summer",
    size: "18-20 см",
    weight: "50-60 г"
  },
  {
    id: 29,
    name: "Краснокрылая каменка",
    scientific: "Monticola saxatilis",
    image: "images/sparrows/sparrow15.jpg",
    description: "Птица с контрастным сизым и рыжим оперением. Обитает в степях и на каменистых склонах. Питается насекомыми.",
    rarity: "rare",
    season: "summer",
    size: "15-16 см",
    weight: "25-30 г"
  },
  {
    id: 30,
    name: "Скромная горихвостка",
    scientific: "Phoenicurus phoenicurus",
    image: "images/sparrows/sparrow30.jpg",
    description: "Яркая птица с рыжим хвостом. Обитает в светлых лесах и парках. Питается насекомыми. Песня — звонкая трель.",
    rarity: "common",
    season: "summer",
    size: "14-15 см",
    weight: "12-18 г"
  },
  {
    id: 31,
    name: "Вертишейка",
    scientific: "Jynx torquilla",
    image: "images/sparrows/sparrow3.jpg",
    description: "Необычный дятел с защитной окраской. При опасности вытягивает шею и вертит головой. Обитает в светлых лесах.",
    rarity: "common",
    season: "summer",
    size: "17-19 см",
    weight: "30-45 г"
  },
  {
    id: 32,
    name: "Сибирская чечевица",
    scientific: "Carpodacus roseus",
    image: "images/sparrows/sparrow29.jpg",
    description: "Северный вид чечевицы с розовым оперением. Обитает в тайге и лесотундре. Питается семенами и почками.",
    rarity: "rare",
    season: "winter",
    size: "15-16 см",
    weight: "23-28 г"
  },
  {
    id: 33,
    name: "Серый снегирь",
    scientific: "Pyrrhula cineracea",
    image: "images/sparrows/sparrow28.jpg",
    description: "Восточный родственник обыкновенного снегиря с серым брюшком. Обитает в хвойных лесах Сибири.",
    rarity: "rare",
    season: "winter",
    size: "16-17 см",
    weight: "25-30 г"
  },
  {
    id: 34,
    name: "Фоновый крапивник",
    scientific: "Troglodytes troglodytes",
    image: "images/sparrows/sparrow33.jpg",
    description: "Очень мелкая птица с поднятым хвостом. Обитает в густых зарослях. Питается насекомыми. Голос — громкая трель.",
    rarity: "common",
    season: "year-round",
    size: "9-10 см",
    weight: "8-12 г"
  },
  {
    id: 35,
    name: "Щур",
    scientific: "Pinicola enucleator",
    image: "images/sparrows/sparrow39.jpg",
    description: "Крупная птица с массивным клювом. Обитает в северных лесах. Питается семенами и почками. Оперение самцов розовое.",
    rarity: "rare",
    season: "winter",
    size: "20-22 см",
    weight: "50-60 г"
  },
  {
    id: 36,
    name: "Желтогрудая овсянка",
    scientific: "Emberiza aureola",
    image: "images/sparrows/sparrow6.jpg",
    description: "Яркая овсянка с жёлтой грудью и каштановой спиной. Обитает на влажных лугах. Стала редкой из-за отлова.",
    rarity: "rare",
    season: "summer",
    size: "15-16 см",
    weight: "20-25 г"
  },
  {
    id: 37,
    name: "Обыкновенный каменный воробей",
    scientific: "Petronia petronia",
    image: "images/sparrows/sparrow21.jpg",
    description: "Крупный воробей с пестрым оперением и жёлтым пятном на горле. Обитает в скалистых местностях.",
    rarity: "rare",
    season: "year-round",
    size: "16-17 см",
    weight: "30-35 г"
  },
  {
    id: 38,
    name: "Белогорлый воробей",
    scientific: "Petronia petronia",
    image: "images/sparrows/sparrow1.jpg",
    description: "Воробей с ярким белым горлом и пестрым оперением. Обитает в южных регионах на скалистых ландшафтах.",
    rarity: "rare",
    season: "year-round",
    size: "16-17 см",
    weight: "30-35 г"
  },
  {
    id: 39,
    name: "Клёст-сосновик",
    scientific: "Loxia pytyopsittacus",
    image: "images/sparrows/sparrow13.jpg",
    description: "Крупный клёст с мощным клювом. Специализируется на семенах сосны. Обитает в хвойных лесах.",
    rarity: "rare",
    season: "year-round",
    size: "18-20 см",
    weight: "45-55 г"
  }
  // ... остальные данные о птицах ...
];

// Экспорт данных для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = birdsData;
} else {
  window.birdsData = birdsData;
}
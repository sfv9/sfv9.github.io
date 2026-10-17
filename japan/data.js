/* Futari 二人旅 — content data. Everything editable lives in index.html state;
   this file is the curated guide. Facts current to mid-Oct 2026 — verify hours/bookings. */

/* ── Trip defaults (all editable in Settings) ── */
const DEFAULTS = {
  arrive: '2026-10-18',          // land in Tokyo
  depart: '2026-10-27',          // fly home
  flightTime: '',                // e.g. "17:30 HND"
  dinnerDate: '2026-10-21',      // THE dinner
  escapeStart: '2026-10-23',     // Friday after work
  homeHotel: 'Ginza hotel',
  escapePlan: 'kyoto-hakone',
  dinnerBooked: '',              // "Kyubey 7:00pm" once booked
  rate: 150                      // ¥ per $1 — edit to today's rate
};

/* ── Wednesday dinner shortlist ── */
const DINNER = [
  { id:'kyubey', name:'Ginza Kyubey', jp:'銀座 久兵衛', type:'Edomae sushi counter', cost:'¥¥¥¥', walk:'Walk from most Ginza hotels',
    why:'Ginza has been the home of classic Edomae sushi since 1935. Kyubey is the famous name that is also the most welcoming to first-timers: chefs speak some English, there are several counters, and you can reserve online. Sit at the counter and order omakase.',
    book:'Official site or TableCheck. Ask your hotel concierge if online slots are gone.', q:'Ginza Kyubey Tokyo' },
  { id:'kondo', name:'Tempura Kondo', jp:'てんぷら 近藤', type:'Tempura counter (Michelin)', cost:'¥¥¥¥', walk:'Ginza 5-chome',
    why:'A counter of about ten seats where a master fries each piece and hands it over seconds later. His vegetable tempura (sweet potato, carrot "nest") is famous. It feels personal and theatrical without being stiff.',
    book:'Phone or hotel concierge. Small, so lunch is easier to get if dinner is full.', q:'Tempura Kondo Ginza' },
  { id:'tofuya', name:'Tokyo Shiba Tofuya Ukai', jp:'東京 芝 とうふ屋うかい', type:'Tofu kaiseki, private garden rooms', cost:'¥¥¥', walk:'15 min taxi',
    why:'The most romantic setting on this list: an old sake brewery rebuilt as a feudal-style mansion, with koi ponds and a lit garden right under Tokyo Tower. Every party gets a private tatami room and a long seasonal kaiseki dinner. Afterward, look up at the tower lit orange.',
    book:'Online via the Ukai site or TableCheck. Ask for a garden-view room.', q:'Tokyo Shiba Tofuya Ukai' },
  { id:'ukaitei', name:'Ginza Ukai-tei', jp:'銀座 うかい亭', type:'Teppanyaki wagyu', cost:'¥¥¥¥', walk:'Ginza 5-chome',
    why:'A grand Art Nouveau dining room where a chef cooks A5 wagyu and abalone on the iron griddle in front of you. Very celebratory, and dessert is served in a separate salon. Best if she loves steak more than raw fish.',
    book:'Online via the Ukai site or TableCheck.', q:'Ginza Ukai-tei' }
];
const NIGHTCAPS = [
  { name:'Bar High Five', where:'Ginza', note:'One of the world\'s most famous cocktail bars. There is no menu: tell the bartender what you like.', q:'Bar High Five Ginza' },
  { name:'GINZA SIX rooftop garden', where:'Ginza', note:'A free rooftop garden over Ginza, open until about 11pm. A good spot for a quiet walk after dinner.', q:'GINZA SIX rooftop garden' },
  { name:'Andaz Tokyo Rooftop Bar', where:'Toranomon Hills 52F', note:'A glass-walled bar 52 floors up with a view of Tokyo Tower. About 10 minutes by taxi.', q:'Andaz Tokyo Rooftop Bar' }
];

/* ── Escape plans (Fri–Tue). Each day: slots of idea ids or {t:'custom text'} ── */
const PLANS = {
  'kyoto-hakone': {
    name:'Kyoto + Hakone ryokan finale', badge:'Recommended', hotels:2,
    pitch:'Three nights in one Kyoto hotel, then a final night in a Hakone ryokan with a private hot-spring bath and kaiseki dinner. Hakone is on the bullet-train line back toward Tokyo, so the ryokan is also how you get home. Monday night ryokans are also easier to book and cheaper than weekends.',
    stays:['Kyoto: Fri, Sat, Sun (3 nights, near Gion/Kawaramachi)','Hakone ryokan: Mon (1 night, room with private open-air bath)'],
    days:[
      { title:'Escape to Kyoto', items:[
        {t:'After work: 10 min to Tokyo Station → Nozomi Shinkansen to Kyoto (~2h15). Buy ekiben bento + beer on the platform for dinner on the train.'},
        {t:'Tip: send big bags ahead Thursday with your hotel\'s takkyubin desk (about ¥2,500 a bag, arrives next day). Travel light.'},
        'pontocho' ]},
      { title:'Temples & Gion', items:['inari','kiyomizu','gion',{t:'Dinner: kaiseki in Gion or a Pontocho counter. Book ahead.'}]},
      { title:'Arashiyama & gold', items:['arashiyama','kinkaku','tea',{t:'Evening: Nishiki-area izakaya or a sake tasting.'}]},
      { title:'Nara deer → onsen night', items:['nara',{t:'Afternoon: Kyoto → Odawara (Hikari, ~2h) → Hakone. Check in by 3–4pm.'},'ryokan']},
      { title:'Hakone morning → home', items:[{t:'Dawn: private onsen, then ryokan breakfast.'},'hakone-museum',{t:'Odawara → Shinagawa (Shinkansen, ~35 min) → Haneda (~20 min). Narita adds about 1 hour. Leave 3h+ before flight.'}]}
    ]},
  'kyoto-only': {
    name:'Kyoto, one hotel, slow', badge:'One hotel', hotels:1,
    pitch:'Unpack once. Four nights in Kyoto at an easy pace, with short side trips to Nara and Osaka, then the bullet train back for your flight. Best if your Tuesday flight leaves in the afternoon or evening.',
    stays:['Kyoto: Fri–Mon (4 nights). Consider one splurge night at a Kyoto ryokan instead.'],
    days:[
      { title:'Escape to Kyoto', items:[{t:'After work: Tokyo Station → Nozomi to Kyoto (~2h15) with an ekiben dinner.'},'pontocho']},
      { title:'Temples & Gion', items:['inari','kiyomizu','gion']},
      { title:'Arashiyama', items:['arashiyama','kinkaku','tea']},
      { title:'Nara + Osaka night', items:['nara','dotonbori']},
      { title:'Slow morning → home', items:['philosopher','nishiki',{t:'Kyoto → Tokyo/Shinagawa (~2h15) → airport. Sit in seat E (right side) for a chance at Mt. Fuji around 40 min past Shin-Yokohama.'}]}
    ]},
  'fuji-slow': {
    name:'Fuji & onsen, barely any travel', badge:'Least travel', hotels:2,
    pitch:'Stay close to Tokyo and slow right down: two nights at a lakeside ryokan facing Mt. Fuji, then two nights in Hakone. Late October is when the leaves start turning at this altitude, weeks before they do in Tokyo or Kyoto.',
    stays:['Lake Kawaguchiko: Fri, Sat (north shore, Fuji-view room)','Hakone: Sun, Mon'],
    days:[
      { title:'To the lake', items:[{t:'After work: highway bus from Tokyo Station/Shinjuku to Kawaguchiko (~2h). Reserve the bus seat ahead.'}]},
      { title:'Fuji day', items:['chureito','oishi-park',{t:'Rent bikes and ride the north shore with Fuji over the water.'}]},
      { title:'Lake → Hakone', items:[{t:'Bus Kawaguchiko → Gotemba → Hakone (~2h). Check in early and soak.'},'ryokan']},
      { title:'Hakone loop', items:['hakone-loop','hakone-museum']},
      { title:'Home', items:[{t:'Morning onsen → Romancecar or Odawara Shinkansen → airport.'}]}
    ]}
};

/* ── Ideas catalog ── */
/* tags: romantic food culture views night splurge rainy memorable nature quirky ginza(=weeknight, ≤20 min from Ginza) */
const IDEAS = [
  // ── Tokyo, near Ginza (weeknights) ──
  { id:'kabuki', t:'Kabuki: single act at Kabukiza', jp:'歌舞伎座 一幕見', city:'Tokyo', area:'Ginza', tags:['culture','memorable','night','ginza'], time:'1–1.5 h', cost:'¥¥',
    d:'Japan\'s great theater, a short walk from your hotel. Single-act tickets (hitomakumi) let you see one act instead of a four-hour program, which fits after work. Rent the English earphone guide.', tip:'Buy single-act tickets online a few days ahead. Evening acts often start around 6–7pm.', q:'Kabukiza Theatre' },
  { id:'gado', t:'Yurakucho under the tracks', jp:'有楽町 ガード下', city:'Tokyo', area:'Yurakucho', tags:['food','night','ginza','quirky'], time:'1–2 h', cost:'¥',
    d:'Smoky yakitori and beer stalls packed under the brick railway arches, with trains rumbling overhead. Salarymen, lanterns, plastic stools. It\'s a five-minute walk from Ginza and the opposite of fancy.', tip:'Try Yurakucho Sanchome Yokocho or the stalls along the arches. Bring cash.', q:'Yurakucho Gado-shita' },
  { id:'tsukiji', t:'Tsukiji Outer Market breakfast', jp:'築地場外市場', city:'Tokyo', area:'Tsukiji', tags:['food','ginza'], time:'1.5 h', cost:'¥¥',
    d:'A 10-minute walk from Ginza: grilled scallops, sweet tamagoyaki on a stick, uni, tuna bowls, and fresh strawberries wrapped in mochi. Best before work or on the weekend.', tip:'Go 7–10am. Many stalls close Sundays, Wednesdays and holidays.', q:'Tsukiji Outer Market' },
  { id:'tower', t:'Tokyo Tower at night', jp:'東京タワー', city:'Tokyo', area:'Shiba', tags:['views','romantic','night','ginza'], time:'1.5 h', cost:'¥¥',
    d:'The orange tower lit up, which is more romantic than Skytree. Walk to Zojoji Temple at its feet for the classic photo of the temple gate with the tower behind it.', tip:'Pairs well with dinner at Tofuya Ukai next door.', q:'Tokyo Tower' },
  { id:'hibiya', t:'Hibiya and Imperial Palace evening walk', jp:'日比谷・皇居', city:'Tokyo', area:'Hibiya', tags:['romantic','nature','ginza'], time:'1 h', cost:'Free',
    d:'Walk from Ginza through Hibiya Park to the palace moat and the old stone walls, lit at dusk, then up to Marunouchi and the restored red-brick Tokyo Station.', tip:'Finish with drinks at the Tokyo Station Hotel\'s Bar Oak.', q:'Imperial Palace Outer Garden' },
  { id:'highfive', t:'Ginza cocktail bars', jp:'銀座 バー', city:'Tokyo', area:'Ginza', tags:['night','romantic','ginza'], time:'1–2 h', cost:'¥¥¥',
    d:'Japanese bartending is precise and ceremonial: hand-carved ice, spotless glassware. Bar High Five is world-famous; Ginza has dozens more hidden on the upper floors of narrow buildings.', tip:'Expect a small cover/table charge (about ¥1,000–2,000).', q:'Bar High Five Ginza' },
  { id:'teamlab', t:'teamLab Planets', jp:'チームラボプラネッツ', city:'Tokyo', area:'Toyosu', tags:['memorable','rainy','quirky','ginza','romantic'], time:'2 h', cost:'¥¥',
    d:'A walk-through digital art museum where you go barefoot through knee-deep water with koi made of light, a room of floating orchids, and an infinite mirrored universe. 15 minutes from Ginza, and evening slots run late.', tip:'Book a timed ticket online. Wear shorts or pants that roll up.', q:'teamLab Planets Toyosu' },
  { id:'depachika', t:'Depachika food hall picnic', jp:'デパ地下', city:'Tokyo', area:'Ginza', tags:['food','rainy','ginza'], time:'1 h', cost:'¥¥',
    d:'The basement food floors of Mitsukoshi and Matsuya Ginza: perfect bento, ¥5,000 melons, wagashi sweets, sake tastings. Build a hotel-room picnic on a lazy night.', tip:'Prices are marked down about 30–50 min before closing (around 8pm).', q:'Ginza Mitsukoshi depachika' },
  { id:'ginzawalk', t:'Ginza window shopping and gifts', jp:'銀座 散策', city:'Tokyo', area:'Ginza', tags:['ginza','rainy'], time:'1–2 h', cost:'Free–¥¥¥¥',
    d:'Itoya\'s 12 floors of stationery, Mikimoto pearls, Uniqlo\'s 12-story flagship, and the Sony Park. On weekend afternoons Chuo-dori closes to cars and becomes a pedestrian promenade.', tip:'"Autumn Ginza" street events run Oct 16 – Nov 3.', q:'Itoya Ginza' },
  { id:'monja', t:'Monjayaki in Tsukishima', jp:'月島 もんじゃ', city:'Tokyo', area:'Tsukishima', tags:['food','night','quirky','ginza'], time:'1.5 h', cost:'¥',
    d:'Tokyo\'s messy local dish: a runny batter griddled at your table and scraped up with tiny spatulas. Monja Street has about 70 shops, 2 stops from Ginza. Fun, cheap and a little silly.', tip:'Ask staff to cook the first one for you. Try mentaiko mochi cheese.', q:'Tsukishima Monja Street' },
  // ── Tokyo, further afield ──
  { id:'shibuyasky', t:'Shibuya Sky at sunset', jp:'渋谷スカイ', city:'Tokyo', area:'Shibuya', tags:['views','romantic','memorable'], time:'1.5 h', cost:'¥¥',
    d:'An open-air rooftop 229 m above the Shibuya Scramble. Watch sunset turn into city lights, and on clear days see Mt. Fuji. Afterward, walk the crossing below.', tip:'Sunset slots sell out. Book timed tickets online as soon as you know the date.', q:'Shibuya Sky' },
  { id:'omoide', t:'Omoide Yokocho & Golden Gai', jp:'思い出横丁・ゴールデン街', city:'Tokyo', area:'Shinjuku', tags:['night','food','quirky'], time:'2–3 h', cost:'¥¥',
    d:'Lantern-lit alleys of yakitori stalls, then Golden Gai: about 200 bars, each the size of a closet, each with its own theme. A great weekend night out.', tip:'Some Golden Gai bars charge a ¥500–1,000 seat fee. Look for "welcome" signs in English.', q:'Golden Gai Shinjuku' },
  { id:'sensoji', t:'Senso-ji & Asakusa by night', jp:'浅草寺', city:'Tokyo', area:'Asakusa', tags:['culture','night','romantic'], time:'1.5 h', cost:'Free',
    d:'Tokyo\'s oldest temple. By day it\'s crowded; after dark the pagoda glows and you have it nearly to yourselves. Add a Sumida river cruise or a drink with a view of Skytree.', tip:'Shops close about 7pm but the temple grounds stay open and lit.', q:'Sensoji Temple' },
  { id:'meiji', t:'Meiji Jingu → Omotesando', jp:'明治神宮', city:'Tokyo', area:'Harajuku', tags:['culture','nature'], time:'3 h', cost:'Free',
    d:'A forest shrine in the middle of the city, then a stroll down Omotesando\'s architecture boulevard and the side streets of Cat Street.', tip:'You may see a traditional wedding procession on weekends.', q:'Meiji Jingu' },
  // ── Kyoto ──
  { id:'inari', t:'Fushimi Inari at dawn', jp:'伏見稲荷大社', city:'Kyoto', area:'Fushimi', tags:['culture','memorable','nature'], time:'2–3 h', cost:'Free',
    d:'Tunnels of thousands of vermilion torii gates climbing a forested mountain. At 7am it\'s quiet, misty and magical; by 10am it\'s packed. Hike 30–45 min to the Yotsutsuji viewpoint over the city.', tip:'It\'s open 24 hours. Two stops from Kyoto Station on the JR Nara line.', q:'Fushimi Inari Taisha' },
  { id:'kiyomizu', t:'Kiyomizu-dera & old lanes', jp:'清水寺・二年坂', city:'Kyoto', area:'Higashiyama', tags:['culture','views','romantic'], time:'3 h', cost:'¥',
    d:'A wooden temple stage on stilts over the hillside, then walk down Sannenzaka and Ninenzaka, stone-paved lanes of teahouses, to Kodai-ji and Yasaka Shrine.', tip:'Arrive at 6–8am opening, or late afternoon. This is a great place to wear rented kimono.', q:'Kiyomizu-dera' },
  { id:'gion', t:'Gion at dusk', jp:'祇園', city:'Kyoto', area:'Gion', tags:['romantic','culture','night','memorable'], time:'1.5 h', cost:'Free',
    d:'Wooden teahouses on Hanamikoji as the lanterns come on, and Shirakawa canal, the prettiest street in Kyoto. You may glimpse a geiko or maiko hurrying to an appointment.', tip:'Don\'t follow or photograph geiko. Several private lanes ban photos, with fines.', q:'Shirakawa Gion' },
  { id:'pontocho', t:'Pontocho alley dinner', jp:'先斗町', city:'Kyoto', area:'Pontocho', tags:['food','night','romantic'], time:'2 h', cost:'¥¥–¥¥¥',
    d:'A narrow, lantern-lit alley along the Kamo River packed with tiny restaurants. Perfect for a late first-night dinner or drink after the train.', tip:'Many places want reservations. Look for posted menus with prices.', q:'Pontocho Kyoto' },
  { id:'arashiyama', t:'Arashiyama bamboo + Okochi Sanso', jp:'嵐山', city:'Kyoto', area:'Arashiyama', tags:['nature','romantic','memorable'], time:'Half day', cost:'¥',
    d:'The bamboo grove at 7:30am, before the crowds, then Tenryu-ji\'s Zen garden. The hidden gem is Okochi Sanso: a silent-film star\'s hillside villa with moss gardens and a matcha and sweet included in the ticket. Finish at Togetsukyo Bridge.', tip:'Hozugawa river boats and the Sagano Romantic Train are fun add-ons. Book the train ahead.', q:'Okochi Sanso' },
  { id:'kinkaku', t:'Kinkaku-ji (Golden Pavilion)', jp:'金閣寺', city:'Kyoto', area:'Kita', tags:['culture','views'], time:'1 h', cost:'¥',
    d:'A pavilion covered in gold leaf reflected in its pond. It lives up to the photos. Pair it with Ryoan-ji\'s famous rock garden nearby.', tip:'It\'s a short taxi ride from Arashiyama. Afternoon light is best.', q:'Kinkakuji' },
  { id:'tea', t:'Private tea ceremony in a machiya', jp:'茶道体験', city:'Kyoto', area:'Various', tags:['culture','romantic','rainy'], time:'1 h', cost:'¥¥',
    d:'A tea master walks the two of you through matcha ritual in a traditional townhouse: whisking your own bowl, wagashi sweets, the quiet. Ask for a private session.', tip:'Book via Camellia, En, or Airbnb Experiences.', q:'Camellia tea ceremony Kyoto' },
  { id:'nishiki', t:'Nishiki Market', jp:'錦市場', city:'Kyoto', area:'Downtown', tags:['food','rainy'], time:'1 h', cost:'¥',
    d:'"Kyoto\'s Kitchen": a covered market street of pickles, tamagoyaki, soy-milk donuts, baby octopus on a stick, and knife shops.', tip:'Eat at the stall, not while walking. Go by about 11am, since stalls close around 5pm.', q:'Nishiki Market' },
  { id:'philosopher', t:'Philosopher\'s Path → Nanzen-ji', jp:'哲学の道', city:'Kyoto', area:'Higashiyama', tags:['nature','romantic'], time:'2 h', cost:'Free',
    d:'A quiet canal-side stone path from Ginkaku-ji (Silver Pavilion) to Nanzen-ji, with its brick Meiji-era aqueduct.', tip:'Easy and flat. Good for a slow last morning.', q:'Philosophers Path Kyoto' },
  // ── Nara / Osaka ──
  { id:'nara', t:'Nara: bowing deer & Great Buddha', jp:'奈良', city:'Nara', area:'Nara Park', tags:['culture','nature','memorable','quirky'], time:'Half day', cost:'¥',
    d:'Bow to the sacred deer and they bow back for a cracker. Todai-ji\'s giant bronze Buddha sits in one of the world\'s largest wooden buildings. Kasuga Taisha has 3,000 stone lanterns, and Isuien garden is a quiet escape.', tip:'About 45 min from Kyoto (Kintetsu Limited Express). Hide paper maps from the deer.', q:'Todaiji Nara' },
  { id:'dotonbori', t:'Osaka: Dotonbori night eats', jp:'道頓堀', city:'Osaka', area:'Namba', tags:['food','night','quirky'], time:'3 h', cost:'¥',
    d:'Neon canal, the Glico running man, takoyaki, okonomiyaki, and kushikatsu (no double-dipping in the sauce). Then Hozenji Yokocho, a quiet stone lane with a moss-covered Buddha.', tip:'About 30 min from Kyoto on the Hankyu or JR special rapid.', q:'Dotonbori Osaka' },
  // ── Hakone / Fuji ──
  { id:'ryokan', t:'Ryokan night with private onsen', jp:'露天風呂付き客室', city:'Hakone', area:'Gora / Miyanoshita', tags:['romantic','splurge','memorable','nature'], time:'Overnight', cost:'¥¥¥¥',
    d:'The most memorable night of the trip: yukata robes, a multi-course kaiseki dinner (often served in your room), futons laid out while you eat, and a private open-air hot-spring bath on your own balcony.', tip:'Search "room with open-air bath" (露天風呂付き客室) on Japanican, Rakuten Travel or Jalan. Check in by 3pm to get time in the bath.', q:'Gora Hakone ryokan' },
  { id:'hakone-loop', t:'Hakone loop: ropeway & pirate ship', jp:'箱根ループ', city:'Hakone', area:'Hakone', tags:['views','nature','quirky'], time:'Full day', cost:'¥¥',
    d:'Mountain switchback train, cable car, ropeway over the steaming volcanic vents of Owakudani (eat a black egg, said to add 7 years to your life), a "pirate ship" across Lake Ashi, and the red torii of Hakone Shrine standing in the water.', tip:'The Hakone Freepass covers almost all of it. Go clockwise in the morning for Fuji views.', q:'Owakudani' },
  { id:'hakone-museum', t:'Hakone Open-Air Museum', jp:'彫刻の森美術館', city:'Hakone', area:'Ninotaira', tags:['culture','nature'], time:'2 h', cost:'¥¥',
    d:'Huge sculptures across green hillsides, a Picasso pavilion, a stained-glass tower, and a hot-spring foot bath to sit in with mountain views.', tip:'An easy final morning before heading to the airport.', q:'Hakone Open Air Museum' },
  { id:'chureito', t:'Chureito Pagoda & Fuji', jp:'忠霊塔', city:'Fuji', area:'Fujiyoshida', tags:['views','memorable','nature'], time:'2 h', cost:'Free',
    d:'The postcard of Japan: a five-story red pagoda with Mt. Fuji behind it. It\'s about 400 steps up, and worth it.', tip:'Fuji hides behind clouds by late morning, so go early. Autumn mornings are the clearest.', q:'Chureito Pagoda' },
  { id:'oishi-park', t:'Oishi Park & Kawaguchiko leaves', jp:'大石公園', city:'Fuji', area:'Kawaguchiko', tags:['nature','romantic','views'], time:'1.5 h', cost:'Free',
    d:'Lakeside gardens with Fuji across the water. Maples start turning here in late October, and the "Momiji Corridor" leaf festival usually opens in early November.', tip:'Tokyo and Kyoto foliage is forecast late (late Nov–Dec), so the highlands are your best chance at color this trip.', q:'Oishi Park Kawaguchiko' },
  // ── Memorable extras ──
  { id:'kimono', t:'Kimono day for two', jp:'着物レンタル', city:'Kyoto', area:'Higashiyama', tags:['romantic','memorable','culture'], time:'Half day', cost:'¥¥',
    d:'Rent kimono (and a yukata/hakama for you) with hair styling included, then stroll Kiyomizu and Gion. Locals see it as a compliment.', tip:'Book a shop near Kiyomizu. Most include hair styling, bag and sandals.', q:'Kimono rental Kiyomizu' },
  { id:'photographer', t:'Hire a photographer for an hour', jp:'写真撮影', city:'Any', area:'Kyoto or Tokyo', tags:['romantic','memorable','splurge'], time:'1 h', cost:'¥¥¥',
    d:'The souvenir she\'ll actually keep: real photos of the two of you together, instead of selfies. Local photographers know the quiet corners at golden hour.', tip:'Flytographer and Localgrapher list Kyoto and Tokyo shooters. Pair it with the kimono day.', q:'Gion Kyoto' },
  { id:'cooking', t:'Cooking class together', jp:'料理教室', city:'Any', area:'Tokyo or Kyoto', tags:['food','rainy','romantic'], time:'3 h', cost:'¥¥',
    d:'Make ramen from scratch, sushi, or a home-style washoku meal with a local chef, then eat it. A good rainy-day backup.', tip:'Cookly and Airbnb Experiences list small-group and private classes.', q:'Cooking class Kyoto' }
];

/* ── Food bingo ── */
const FOODS = [
  ['sushi','鮨','Sushi at a counter','Omakase at the counter. Eat each piece within seconds of it being served.'],
  ['ramen','ラーメン','Ramen','Try tonkotsu (pork), shoyu, and yuzu-shio (Afuri). Slurping is polite.'],
  ['tempura','天ぷら','Tempura','Best at a counter, one piece at a time.'],
  ['wagyu','和牛','Wagyu','As sukiyaki, shabu-shabu, or yakiniku you grill yourselves.'],
  ['yakitori','焼き鳥','Yakitori','Order "omakase" and let the chef choose. Try tsukune (chicken meatball) with egg yolk.'],
  ['kaiseki','懐石','Kaiseki','Kyoto\'s seasonal multi-course art form. Your ryokan dinner counts.'],
  ['tonkatsu','とんかつ','Tonkatsu','Thick panko-fried pork with shredded cabbage (free refills).'],
  ['okonomi','お好み焼き','Okonomiyaki','Osaka-style savory pancake, cooked at your table.'],
  ['takoyaki','たこ焼き','Takoyaki','Octopus balls that are molten inside. Let them cool!'],
  ['monja','もんじゃ','Monjayaki','Tokyo\'s gooey cousin of okonomiyaki, in Tsukishima.'],
  ['soba','蕎麦','Soba','Cold zaru soba with dipping sauce. Drink the soba-yu (cooking water) at the end.'],
  ['unagi','鰻','Unagi','Grilled eel over rice, glossy and sweet.'],
  ['yudofu','湯豆腐','Yudofu / yuba','Kyoto\'s silky hot-pot tofu and tofu skin. Very Nanzen-ji.'],
  ['kushikatsu','串カツ','Kushikatsu','Fried skewers, Osaka. NEVER double-dip.'],
  ['tamago','玉子焼き','Tamagoyaki','Sweet rolled omelet on a stick at Tsukiji.'],
  ['onigiri','おにぎり','Konbini onigiri','7-Eleven / Lawson / FamilyMart. Pull tabs 1-2-3 to unwrap.'],
  ['sando','たまごサンド','Egg sando','Konbini egg salad sandwich. Better than it should be.'],
  ['ekiben','駅弁','Ekiben','A train-station bento eaten on the Shinkansen.'],
  ['matcha','抹茶','Matcha & wagashi','A bowl of whisked matcha with a seasonal sweet.'],
  ['parfait','パフェ','Matcha parfait','Layers of matcha ice cream, jelly and mochi.'],
  ['taiyaki','たい焼き','Taiyaki','Fish-shaped waffle with red bean filling.'],
  ['fruit','フルーツサンド','Fruit sando','Whipped cream and perfect strawberries on soft white bread.'],
  ['sake','日本酒','Sake tasting','Ask for a tasting flight (nomikurabe).'],
  ['highball','ハイボール','Whisky highball','The national drink of the izakaya.'],
  ['blackegg','黒たまご','Owakudani black egg','Boiled in volcanic springs in Hakone.'],
  ['kitkat','キットカット','Weird KitKat','Matcha, sake, wasabi… Don Quijote has them all.']
];

/* ── Phrases (ja-JP TTS) ── */
const PHRASES = [
  ['Basics','Hello','こんにちは','konnichiwa'],
  ['Basics','Thank you (very much)','ありがとうございます','arigatō gozaimasu'],
  ['Basics','Excuse me / sorry (and to call a waiter)','すみません','sumimasen'],
  ['Basics','I don\'t understand','わかりません','wakarimasen'],
  ['Basics','It\'s OK / no thank you','大丈夫です','daijōbu desu'],
  ['Basics','Where is the toilet?','トイレはどこですか？','toire wa doko desu ka?'],
  ['Restaurant','Two people','二人です','futari desu'],
  ['Restaurant','I have a reservation under ___','___で予約しています','___ de yoyaku shite imasu'],
  ['Restaurant','Do you have an English menu?','英語のメニューはありますか？','eigo no menyū wa arimasu ka?'],
  ['Restaurant','What do you recommend?','おすすめは何ですか？','osusume wa nan desu ka?'],
  ['Restaurant','This one, please','これをお願いします','kore o onegai shimasu'],
  ['Restaurant','Cheers!','乾杯！','kanpai!'],
  ['Restaurant','Delicious!','美味しい！','oishii!'],
  ['Restaurant','Before eating (said to the food)','いただきます','itadakimasu'],
  ['Restaurant','Thank you for the meal (when leaving)','ご馳走様でした','gochisōsama deshita'],
  ['Restaurant','The check, please','お会計お願いします','okaikei onegai shimasu'],
  ['Restaurant','Can I pay by card?','カードで払えますか？','kādo de haraemasu ka?'],
  ['Restaurant','I am allergic to ___','___アレルギーがあります','___ arerugī ga arimasu'],
  ['Getting around','How much is it?','いくらですか？','ikura desu ka?'],
  ['Getting around','Where is ___ station?','___駅はどこですか？','___ eki wa doko desu ka?'],
  ['Getting around','To this address, please (taxi)','この住所までお願いします','kono jūsho made onegai shimasu'],
  ['Romance','Could you take our photo?','写真を撮っていただけますか？','shashin o totte itadakemasu ka?'],
  ['Romance','Beautiful!','綺麗！','kirei!'],
  ['Romance','We are on our trip together','二人旅です','futari-tabi desu'],
  ['Ryokan','What time is dinner?','夕食は何時ですか？','yūshoku wa nanji desu ka?'],
  ['Ryokan','Can we reserve the private bath?','貸切風呂を予約できますか？','kashikiri-buro o yoyaku dekimasu ka?']
];

/* ── Pre-flight checklist ── */
const CHECKLIST = [
  ['dinner','Book Wednesday\'s dinner (10/21). Do this first, it\'s days away'],
  ['ryokan','Book the Hakone ryokan (room with private open-air bath)'],
  ['kyotohotel','Book the Kyoto hotel (Fri–Mon)'],
  ['vjw','Fill out Visit Japan Web for immigration/customs QR codes'],
  ['esim','Buy an eSIM (Ubigi, Airalo, Saily) and install before flying'],
  ['suica','Add Suica to Apple Wallet (or PASMO). Tap for trains, konbini, vending machines'],
  ['bank','Tell your bank/card you\'re traveling. Bring a no-FX-fee card plus about ¥30,000 cash'],
  ['shinkansen','Get the smartEX app for Tokyo↔Kyoto Shinkansen seats (Fri evening sells out)'],
  ['apps','Download Google Maps offline, Google Translate (Japanese offline pack), GO taxi app'],
  ['adapter','Plugs are the same as US (type A, 100V). Bring a 3-prong to 2-prong adapter'],
  ['shoes','Pack slip-on shoes (lots of shoes-off temples and ryokan) and a layer for 12–20°C']
];

/* ── Practical info sections ── */
const INFO = [
  { h:'🚄 Getting around', items:[
    'Suica/PASMO in Apple Wallet works on every train, subway and bus, and at konbini. Top up from your phone.',
    'Google Maps transit directions are excellent, including platforms and which car to board.',
    'Tokyo ↔ Kyoto: Nozomi Shinkansen, about 2h15, about ¥14,000 each way per person. Book in smartEX. Seat E (right side going west, left coming back) faces Mt. Fuji.',
    'The JR Pass is NOT worth it for this trip. Buy individual tickets.',
    'Big suitcases (over 160 cm in total dimensions) on the Tokaido Shinkansen need an "oversized baggage" seat reservation.',
    'Takkyubin: hotels forward luggage overnight for about ¥2,000–3,000 a bag. Send it Ginza → Kyoto on Thursday and Kyoto → airport on Sunday.',
    'Taxis: the doors open automatically (don\'t touch them). Use the GO app. Ginza ↔ Tokyo Tower is about ¥2,000.'
  ]},
  { h:'💴 Money', items:[
    'Cards work almost everywhere in Tokyo and Kyoto now, but small shrines, stalls and izakaya are still cash. Keep about ¥10,000 on you.',
    '7-Eleven and Japan Post ATMs take foreign cards.',
    'No tipping, ever. It can confuse or offend. Great service is just included.',
    'Tax-free shopping: through Oct 31, 2026, show your passport for 10% off purchases over ¥5,000 at the register. From Nov 1, Japan switches to a refund at customs on departure. Your trip ends before that, so nothing changes for you.',
    'Izakaya often add an "otoshi" (a small mandatory appetizer and cover charge, about ¥300–700). That\'s normal, not a scam.'
  ]},
  { h:'🙇 Etiquette', items:[
    'Trains are quiet: no phone calls, and keep voices low.',
    'Escalators: stand on the LEFT in Tokyo and on the RIGHT in Osaka (Kyoto is mixed, so follow the crowd).',
    'Trash cans are rare. Carry a small bag for your trash.',
    'Don\'t eat while walking. Finish street food at the stall.',
    'Shoes off on tatami and in ryokan rooms. Use the separate toilet slippers.',
    'Chopsticks: never stand them upright in rice or pass food chopstick-to-chopstick.',
    'Onsen: wash fully at the seated showers first, go in naked, keep your small towel out of the water. Tattoos may be refused in shared baths but are fine in a private one.'
  ]},
  { h:'🍁 Late-October season', items:[
    'Weather: Tokyo and Kyoto about 13–21°C, crisp and mostly sunny. Mountains are colder, so pack a layer.',
    '2026 is a late foliage year: Tokyo and Kyoto maples are forecast for late Nov–Dec. Your color is in the highlands: Hakone and Fuji Five Lakes start turning in late October.',
    'Autumn mornings give the clearest Mt. Fuji views. Go early.',
    'Around Ginza: "Autumn Ginza" (to Nov 3) and the Tokyo International Film Festival in Hibiya (from Oct 26).',
    'Kyoto\'s Jidai Matsuri and the Kurama Fire Festival are on Thu Oct 22, while you\'re in Tokyo.'
  ]},
  { h:'🍣 Dining how-to', items:[
    'Reserve: TableCheck, Omakase.in, Pocket Concierge, Google Maps "Reserve", or (best) your Ginza hotel concierge.',
    'No-shows are a big deal in Japan. Cancel properly if plans change.',
    'Ramen and teishoku shops often use a ticket machine at the door: pay, then hand the ticket to the staff.',
    'Say "sumimasen" with a raised hand to call staff. Pay at the register, not at the table.'
  ]},
  { h:'🆘 Emergency', items:[
    'Police 110 · Fire/Ambulance 119',
    'Japan Visitor Hotline (24h, English): 050-3816-2787',
    'US Embassy Tokyo: +81-3-3224-5000',
    'Lost something? Japan returns almost everything. Ask at the station office or a kōban (police box).'
  ]}
];

const GIFTS = [
  'Mikimoto pearls (Ginza flagship)', 'Kyoto incense from Shoyeido', 'A Japanese kitchen knife (Kappabashi, or Aritsugu in Nishiki Market)',
  'Furoshiki wrapping cloth', 'Itoya stationery and fountain pens', 'Uji matcha + a chasen whisk set', 'Tenugui hand towels', 'Seasonal wagashi from a depachika'
];

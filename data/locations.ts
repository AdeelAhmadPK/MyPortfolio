export interface Area {
  name: string;
  slug: string;
}

export interface City {
  name: string;
  slug: string;
  areas: Area[];
}

export interface Country {
  name: string;
  code: string; // 2-letter country code
  slug: string; // same as code for URLs
  flag: string; // flag emoji
  cities: City[];
  region?: string; // Geographic region
  continent?: string; // Continent for semantic grouping
}

// Helper function to create city slug
function createSlug(name: string): string {
  return name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/'/g, '');
}

// Helper function to create a city with default areas
function createCity(name: string, customAreas?: string[]): City {
  const defaultAreas = ['Downtown', 'City Center', 'Business District', 'Old Town', 'Suburbs', 'North Side', 'South Side', 'East End', 'West End', 'Waterfront'];
  const areas = customAreas || defaultAreas;
  
  return {
    name,
    slug: createSlug(name),
    areas: areas.map(area => ({
      name: area,
      slug: createSlug(area)
    }))
  };
}

// Helper function to create multiple cities from an array
function createCities(cityNames: string[]): City[] {
  return cityNames.map(name => createCity(name));
}

// Helper function to get unique cities (remove duplicates)
function getUniqueCities(cityNames: string[]): string[] {
  const unique: string[] = [];
  for (let i = 0; i < cityNames.length; i++) {
    const city = cityNames[i];
    if (unique.indexOf(city) === -1) {
      unique.push(city);
    }
  }
  return unique;
}

export const countries: Country[] = [
  {
    name: "Pakistan",
    code: "pk",
    slug: "pk",
    flag: "🇵🇰",
    cities: createCities([
      "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala",
      "Hyderabad", "Sargodha", "Bahawalpur", "Sukkur", "Larkana", "Sheikhupura", "Rahim Yar Khan", "Jhang", "Dera Ghazi Khan", "Gujrat",
      "Kasur", "Mardan", "Mingora", "Nawabshah", "Chiniot", "Kotri", "Khanpur", "Hafizabad", "Kohat", "Jacobabad",
      "Shikarpur", "Muzaffargarh", "Khanewal", "Gojra", "Bahawalnagar", "Abbottabad", "Muridke", "Pakpattan", "Chakwal", "Sadiqabad",
      "Sahiwal", "Okara", "Turbat", "Dera Ismail Khan", "Chaman", "Zhob", "Mehrabpur", "Parachinar", "Gwadar", "Nowshera",
      "Charsadda", "Jamshoro", "Pattoki", "Mandi Bahauddin", "Hassan Abdal", "Muzaffarabad", "Mirpur", "Gilgit", "Skardu", "Hunza"
    ])
  },
  {
    name: "United States",
    code: "us",
    slug: "us",
    flag: "🇺🇸",
    cities: createCities([
      "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
      "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington",
      "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore",
      "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Kansas City", "Mesa", "Atlanta", "Omaha", "Raleigh",
      "Miami", "Long Beach", "Virginia Beach", "Oakland", "Minneapolis", "Tulsa", "Tampa", "New Orleans", "Cleveland", "Wichita",
      "Arlington", "Bakersfield", "Aurora", "Anaheim", "Santa Ana", "St. Louis", "Corpus Christi", "Riverside", "Lexington", "Pittsburgh"
    ])
  },
  {
    name: "United Kingdom",
    code: "uk",
    slug: "uk",
    flag: "🇬🇧",
    cities: createCities([
      "London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Liverpool", "Edinburgh", "Bristol", "Newcastle", "Sheffield",
      "Cardiff", "Leicester", "Coventry", "Belfast", "Nottingham", "Kingston upon Hull", "Plymouth", "Stoke-on-Trent", "Wolverhampton", "Derby",
      "Southampton", "Portsmouth", "Reading", "Northampton", "Luton", "Bolton", "Bournemouth", "Norwich", "Swindon", "Ipswich",
      "Middlesbrough", "Peterborough", "Cambridge", "Oxford", "Brighton", "Exeter", "Gloucester", "Bath", "York", "Durham",
      "Canterbury", "Lincoln", "Hereford", "Worcester", "Ely", "Ripon", "Truro", "Wells", "Salisbury", "Winchester",
      "Carlisle", "Lancaster", "Chester", "Shrewsbury", "Lichfield", "St. Albans", "Chichester", "Rochester", "Guildford", "Woking"
    ])
  },
  {
    name: "Canada",
    code: "ca",
    slug: "ca",
    flag: "🇨🇦",
    cities: createCities([
      "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Halifax",
      "London", "Victoria", "Windsor", "Oshawa", "Saskatoon", "Regina", "Kitchener", "St. Catharines", "Sudbury", "Barrie",
      "Abbotsford", "Sherbrooke", "Guelph", "Cambridge", "Coquitlam", "Saanich", "Saguenay", "Laval", "Longueuil", "Burnaby",
      "Richmond", "Surrey", "Markham", "Mississauga", "Brampton", "Oakville", "Burlington", "Thunder Bay", "St. John's", "Moncton",
      "Fredericton", "Charlottetown", "Yellowknife", "Whitehorse", "Iqaluit", "Red Deer", "Lethbridge", "Kamloops", "Nanaimo", "Prince George",
      "Kelowna", "Chilliwack", "Penticton", "Vernon", "Courtenay", "Campbell River", "Duncan", "Port Alberni", "Powell River", "Terrace"
    ])
  },
  {
    name: "Australia",
    code: "au",
    slug: "au",
    flag: "🇦🇺",
    cities: createCities([
      "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Sunshine Coast", "Wollongong",
      "Hobart", "Geelong", "Townsville", "Cairns", "Toowoomba", "Darwin", "Ballarat", "Bendigo", "Albury", "Launceston",
      "Mackay", "Rockhampton", "Bunbury", "Bundaberg", "Coffs Harbour", "Wagga Wagga", "Hervey Bay", "Port Macquarie", "Shepparton", "Gladstone",
      "Mildura", "Tamworth", "Traralgon", "Orange", "Geraldton", "Dubbo", "Nowra", "Bathurst", "Lismore", "Kalgoorlie",
      "Broome", "Alice Springs", "Mount Isa", "Whyalla", "Mount Gambier", "Warrnambool", "Port Lincoln", "Broken Hill", "Ceduna", "Karratha",
      "Newman", "Kununurra", "Esperance", "Carnarvon", "Exmouth", "Port Hedland", "Tom Price", "Paraburdoo", "Onslow", "Derby"
    ])
  },
  {
    name: "India",
    code: "in",
    slug: "in",
    flag: "🇮🇳",
    cities: createCities([
      "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur",
      "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad",
      "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi", "Srinagar", "Amritsar", "Noida",
      "Ranchi", "Howrah", "Jabalpur", "Gwalior", "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota",
      "Guwahati", "Chandigarh", "Solapur", "Hubli", "Tiruchirappalli", "Bareilly", "Moradabad", "Mysore", "Gurgaon", "Aligarh",
      "Jalandhar", "Bhubaneswar", "Salem", "Warangal", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur", "Bikaner", "Amravati"
    ])
  },
  {
    name: "Germany",
    code: "de",
    slug: "de",
    flag: "🇩🇪",
    cities: createCities([
      "Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig",
      "Bremen", "Dresden", "Hannover", "Nuremberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster",
      "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Braunschweig", "Chemnitz", "Kiel", "Aachen",
      "Halle", "Magdeburg", "Freiburg", "Krefeld", "Lübeck", "Oberhausen", "Erfurt", "Mainz", "Rostock", "Kassel",
      "Hagen", "Hamm", "Saarbrücken", "Mülheim", "Potsdam", "Ludwigshafen", "Oldenburg", "Leverkusen", "Osnabrück", "Solingen",
      "Heidelberg", "Herne", "Neuss", "Darmstadt", "Paderborn", "Regensburg", "Ingolstadt", "Würzburg", "Fürth", "Wolfsburg"
    ])
  },
  {
    name: "France",
    code: "fr",
    slug: "fr",
    flag: "🇫🇷",
    cities: createCities([
      "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille",
      "Rennes", "Reims", "Le Havre", "Saint-Étienne", "Toulon", "Grenoble", "Dijon", "Angers", "Nîmes", "Villeurbanne",
      "Saint-Denis", "Le Mans", "Aix-en-Provence", "Clermont-Ferrand", "Brest", "Limoges", "Tours", "Amiens", "Perpignan", "Metz",
      "Besançon", "Boulogne-Billancourt", "Orléans", "Mulhouse", "Caen", "Rouen", "Nancy", "Argenteuil", "Montreuil", "Roubaix",
      "Tourcoing", "Nanterre", "Avignon", "Créteil", "Dunkirk", "Poitiers", "Asnières-sur-Seine", "Versailles", "Courbevoie", "Vitry-sur-Seine",
      "Colombes", "Aulnay-sous-Bois", "La Rochelle", "Bourges", "Chartres", "Blois", "Évreux", "Alençon", "Cherbourg", "Calais"
    ])
  },
  {
    name: "Italy",
    code: "it",
    slug: "it",
    flag: "🇮🇹",
    cities: createCities([
      "Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania",
      "Venice", "Verona", "Messina", "Padua", "Trieste", "Brescia", "Parma", "Taranto", "Prato", "Modena",
      "Reggio Calabria", "Reggio Emilia", "Perugia", "Livorno", "Ravenna", "Cagliari", "Foggia", "Rimini", "Salerno", "Ferrara",
      "Sassari", "Latina", "Giugliano", "Monza", "Syracuse", "Pescara", "Bergamo", "Forlì", "Trento", "Vicenza",
      "Terni", "Bolzano", "Novara", "Piacenza", "Ancona", "Andria", "Arezzo", "Udine", "Cesena", "Lecce",
      "Pesaro", "La Spezia", "Como", "Pisa", "Brindisi", "Treviso", "Busto Arsizio", "Varese", "Alessandria", "Cremona"
    ])
  },
  {
    name: "Spain",
    code: "es",
    slug: "es",
    flag: "🇪🇸",
    cities: createCities([
      "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao",
      "Alicante", "Córdoba", "Valladolid", "Vigo", "Gijón", "Hospitalet", "Granada", "Vitoria", "A Coruña", "Elche",
      "Santa Cruz", "Oviedo", "Móstoles", "Cartagena", "Terrassa", "Jerez", "Sabadell", "Marbella", "Mataró", "Alcalá de Henares",
      "León", "Cádiz", "Badalona", "Reus", "Tarragona", "Lleida", "Fuenlabrada", "Leganés", "Getafe", "Donostia",
      "Burgos", "Albacete", "Santander", "Castellón", "Logroño", "Badajoz", "Salamanca", "Huelva", "Lorca", "Cáceres",
      "Pamplona", "Girona", "Almería", "Santiago", "Ourense", "Pontevedra", "Lugo", "Vitoria-Gasteiz", "San Sebastián", "Bilbao"
    ])
  },
  {
    name: "Brazil",
    code: "br",
    slug: "br",
    flag: "🇧🇷",
    cities: createCities([
      "São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre",
      "Belém", "Goiânia", "Guarulhos", "Campinas", "São Luís", "São Gonçalo", "Maceió", "Duque de Caxias", "Natal", "Teresina",
      "Campo Grande", "Nova Iguaçu", "São Bernardo", "João Pessoa", "Santo André", "Osasco", "Jaboatão", "São José", "Ribeirão Preto", "Uberlândia",
      "Sorocaba", "Contagem", "Aracaju", "Feira de Santana", "Cuiabá", "Joinville", "Aparecida", "Londrina", "Juiz de Fora", "Ananindeua",
      "Porto Velho", "Serra", "Niterói", "Caxias do Sul", "Campos", "Macapá", "Vila Velha", "Florianópolis", "São João de Meriti", "Diadema",
      "Campina Grande", "Mauá", "Carapicuíba", "Olinda", "Cariacica", "Bauru", "Vitória", "Canoas", "Petrolina", "Caruaru"
    ])
  },
  {
    name: "Mexico",
    code: "mx",
    slug: "mx",
    flag: "🇲🇽",
    cities: createCities([
      "Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "León", "Juárez", "Torreón", "Querétaro", "San Luis Potosí",
      "Mérida", "Mexicali", "Aguascalientes", "Tlalnepantla", "Chihuahua", "Naucalpan", "Cancún", "Saltillo", "Hermosillo", "Morelia",
      "Reynosa", "Tlaquepaque", "Playa del Carmen", "Culiacán", "Villahermosa", "Mazatlán", "Irapuato", "Matamoros", "Pachuca", "Veracruz",
      "Toluca", "Xalapa", "Tepic", "Oaxaca", "Campeche", "Chilpancingo", "Tuxtla Gutiérrez", "Durango", "Zacatecas", "Colima",
      "Tlaxcala", "La Paz", "Chetumal", "San Cristóbal", "Tapachula", "Coatzacoalcos", "Poza Rica", "Tampico", "Ciudad Victoria", "Monclova",
      "Piedras Negras", "Nuevo Laredo", "Reynosa", "Matamoros", "Ciudad Juárez", "Chihuahua", "Durango", "Mazatlán", "Tepic", "Guadalajara"
    ])
  },
  {
    name: "China",
    code: "cn",
    slug: "cn",
    flag: "🇨🇳",
    cities: createCities([
      "Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Hangzhou", "Wuhan", "Xi'an", "Nanjing", "Tianjin",
      "Suzhou", "Chongqing", "Dongguan", "Foshan", "Jinan", "Hefei", "Dalian", "Xiamen", "Kunming", "Zhengzhou",
      "Changsha", "Shijiazhuang", "Qingdao", "Harbin", "Fuzhou", "Changchun", "Wuxi", "Ningbo", "Nanchang", "Taiyuan",
      "Shantou", "Zhongshan", "Guiyang", "Lanzhou", "Urumqi", "Haikou", "Hohhot", "Yinchuan", "Xining", "Lhasa",
      "Baotou", "Anshan", "Tangshan", "Handan", "Jilin", "Qiqihar", "Daqing", "Fushun", "Luoyang", "Xuzhou",
      "Wenzhou", "Nantong", "Yangzhou", "Zhenjiang", "Taizhou", "Jiaxing", "Huzhou", "Shaoxing", "Jinhua", "Quzhou"
    ])
  },
  {
    name: "Japan",
    code: "jp",
    slug: "jp",
    flag: "🇯🇵",
    cities: createCities([
      "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Kyoto", "Saitama",
      "Hiroshima", "Sendai", "Chiba", "Kitakyushu", "Sakai", "Niigata", "Hamamatsu", "Kumamoto", "Sagamihara", "Shizuoka",
      "Okayama", "Kagoshima", "Hachioji", "Utsunomiya", "Matsuyama", "Kanazawa", "Nagano", "Toyama", "Gifu", "Fukushima",
      "Takamatsu", "Tokushima", "Kochi", "Matsue", "Tottori", "Yamaguchi", "Oita", "Miyazaki", "Naha", "Asahikawa",
      "Hakodate", "Aomori", "Akita", "Yamagata", "Mito", "Maebashi", "Saitama", "Chiba", "Yokohama", "Kawasaki",
      "Sagamihara", "Hachioji", "Tachikawa", "Musashino", "Mitaka", "Ome", "Hino", "Fuchu", "Machida", "Koganei"
    ])
  },
  {
    name: "South Korea",
    code: "kr",
    slug: "kr",
    flag: "🇰🇷",
    cities: createCities([
      "Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Changwon", "Goyang",
      "Yongin", "Seongnam", "Bucheon", "Ansan", "Anyang", "Jeonju", "Cheonan", "Namyangju", "Hwaseong", "Gimhae",
      "Pyeongtaek", "Gimpo", "Pohang", "Jinju", "Gangneung", "Jeju", "Mokpo", "Yeosu", "Gunsan", "Iksan",
      "Suncheon", "Gyeongju", "Geoje", "Osan", "Icheon", "Yangju", "Guri", "Sejong", "Siheung", "Gwangmyeong",
      "Hanam", "Gimcheon", "Chungju", "Andong", "Gangjin", "Tongyeong", "Sacheon", "Miryang", "Sangju", "Yeongju",
      "Gongju", "Boryeong", "Asan", "Dangjin", "Nonsan", "Gyeryong", "Buyeo", "Seosan", "Taean", "Hongseong"
    ])
  },
  {
    name: "Russia",
    code: "ru",
    slug: "ru",
    flag: "🇷🇺",
    cities: createCities([
      "Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan", "Nizhny Novgorod", "Chelyabinsk", "Samara", "Omsk", "Rostov-on-Don",
      "Ufa", "Krasnoyarsk", "Voronezh", "Perm", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk",
      "Barnaul", "Ulyanovsk", "Irkutsk", "Khabarovsk", "Yaroslavl", "Vladivostok", "Makhachkala", "Tomsk", "Orenburg", "Kemerovo",
      "Novokuznetsk", "Ryazan", "Astrakhan", "Naberezhnye Chelny", "Penza", "Lipetsk", "Cheboksary", "Kaliningrad", "Tula", "Kursk",
      "Stavropol", "Sochi", "Ulan-Ude", "Chita", "Vladikavkaz", "Smolensk", "Murmansk", "Arkhangelsk", "Kaluga", "Belgorod",
      "Bryansk", "Kostroma", "Ivanovo", "Tver", "Nizhny Tagil", "Magnitogorsk", "Novorossiysk", "Pskov", "Yakutsk", "Petrozavodsk"
    ])
  },
  {
    name: "Turkey",
    code: "tr",
    slug: "tr",
    flag: "🇹🇷",
    cities: createCities([
      "Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana", "Gaziantep", "Konya", "Mersin", "Diyarbakır",
      "Kayseri", "Eskişehir", "Urfa", "Malatya", "Erzurum", "Van", "Batman", "Elazığ", "Denizli", "Samsun",
      "Kahramanmaraş", "Mardin", "Şanlıurfa", "Düzce", "Muğla", "Trabzon", "Ordu", "Aydın", "Tekirdağ", "Manisa",
      "Balıkesir", "Zonguldak", "Hatay", "Osmaniye", "Çorum", "Afyon", "Kütahya", "Isparta", "Aksaray", "Tokat",
      "Edirne", "Çanakkale", "Rize", "Artvin", "Giresun", "Sinop", "Kastamonu", "Amasya", "Sivas", "Erzincan",
      "Bingöl", "Tunceli", "Elazığ", "Malatya", "Adıyaman", "Kilis", "Hatay", "Osmaniye", "Mersin", "Adana"
    ])
  },
  {
    name: "Indonesia",
    code: "id",
    slug: "id",
    flag: "🇮🇩",
    cities: createCities([
      "Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Depok", "Tangerang", "South Tangerang",
      "Bekasi", "Batam", "Pekanbaru", "Bogor", "Padang", "Malang", "Yogyakarta", "Denpasar", "Surakarta", "Pontianak",
      "Manado", "Balikpapan", "Jambi", "Cimahi", "Ambon", "Samarinda", "Mataram", "Palu", "Kupang", "Banjarmasin",
      "Jayapura", "Banda Aceh", "Tasikmalaya", "Cirebon", "Sukabumi", "Kediri", "Blitar", "Probolinggo", "Pasuruan", "Mojokerto",
      "Magelang", "Salatiga", "Tegal", "Pekalongan", "Cilacap", "Purwokerto", "Klaten", "Sragen", "Wonogiri", "Karanganyar",
      "Boyolali", "Sukoharjo", "Solo", "Madiun", "Ngawi", "Ponorogo", "Trenggalek", "Tulungagung", "Kediri", "Blitar"
    ])
  },
  {
    name: "Saudi Arabia",
    code: "sa",
    slug: "sa",
    flag: "🇸🇦",
    cities: createCities([
      "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Taif", "Abha", "Tabuk", "Buraydah",
      "Khamis Mushait", "Hail", "Najran", "Al Jubail", "Yanbu", "Abqaiq", "Arar", "Sakaka", "Jizan", "Dhahran",
      "Al Kharj", "Al Qatif", "Al Mubarraz", "Al Hofuf", "Al Qunfudhah", "Al Bahah", "Unaizah", "Al Khobar", "Al Khafji", "Rafha",
      "Al Wajh", "Al Ula", "Al Lith", "Al Qunfudhah", "Al Baha", "Al Khobar", "Al Qatif", "Al Jubail", "Yanbu", "Tabuk",
      "Hail", "Arar", "Sakaka", "Jizan", "Najran", "Abha", "Khamis Mushait", "Taif", "Buraydah", "Al Mubarraz",
      "Al Hofuf", "Al Kharj", "Dhahran", "Al Khobar", "Dammam", "Riyadh", "Jeddah", "Mecca", "Medina", "Abha"
    ])
  },
  {
    name: "United Arab Emirates",
    code: "ae",
    slug: "ae",
    flag: "🇦🇪",
    cities: createCities([
      "Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Dibba",
      "Kalba", "Madinat Zayed", "Ruwais", "Liwa Oasis", "Al Dhafra", "Ghayathi", "Ar-Rams", "Dhaid", "Jebel Ali", "Al Quoz",
      "Deira", "Bur Dubai", "Marina", "Jumeirah", "Downtown", "Business Bay", "Dubai Marina", "Palm Jumeirah", "Al Barsha", "Al Satwa",
      "Al Karama", "Al Wasl", "Al Safa", "Al Manara", "Al Barsha", "Al Quoz", "Al Garhoud", "Al Rashidiya", "Al Warqa", "Al Qusais",
      "Al Nahda", "Al Qouz", "Al Barsha", "Al Sufouh", "Al Wasl", "Al Satwa", "Al Karama", "Al Quoz", "Al Barsha", "Al Qusais",
      "Al Rashidiya", "Al Warqa", "Al Nahda", "Al Qouz", "Al Barsha", "Al Sufouh", "Al Wasl", "Al Satwa", "Al Karama", "Al Quoz"
    ])
  },
  {
    name: "South Africa",
    code: "za",
    slug: "za",
    flag: "🇿🇦",
    cities: createCities([
      "Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "East London", "Pietermaritzburg", "Nelspruit", "Polokwane",
      "Kimberley", "Rustenburg", "Welkom", "Newcastle", "Klerksdorp", "Uitenhage", "Paarl", "Potchefstroom", "George", "Midrand",
      "Centurion", "Soweto", "Sandton", "Randburg", "Roodepoort", "Benoni", "Boksburg", "Krugersdorp", "Germiston", "Vereeniging",
      "Alberton", "Kempton Park", "Brakpan", "Springs", "Westonaria", "Carletonville", "Fochville", "Oberholzer", "Khutsong", "Wedela",
      "Vanderbijlpark", "Sasolburg", "Vereeniging", "Heidelberg", "Nigel", "Balfour", "Greylingstad", "Standerton", "Ermelo", "Bethal",
      "Secunda", "Ermelo", "Bethal", "Standerton", "Volksrust", "Newcastle", "Dundee", "Glencoe", "Ladysmith", "Estcourt"
    ])
  },
  {
    name: "Egypt",
    code: "eg",
    slug: "eg",
    flag: "🇪🇬",
    cities: createCities([
      "Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Aswan", "Asyut", "Ismailia",
      "Faiyum", "Zagazig", "Damietta", "Aswan", "Minya", "Damanhur", "Beni Suef", "Qena", "Sohag", "Hurghada",
      "Safaga", "Marsa Alam", "El Gouna", "Taba", "Dahab", "Sharm El Sheikh", "Nuweiba", "Ras Sudr", "Abu Simbel", "Edfu",
      "Kom Ombo", "Esna", "Abydos", "Dendera", "Karnak", "Valley of the Kings", "Valley of the Queens", "Deir el-Bahari", "Medinet Habu", "Ramesseum",
      "Colossi of Memnon", "Temple of Hatshepsut", "Temple of Seti I", "Temple of Ramesses II", "Temple of Ramesses III", "Temple of Amenhotep III", "Temple of Thutmose III", "Temple of Horemheb", "Temple of Tutankhamun", "Temple of Ay",
      "Temple of Horemheb", "Temple of Seti I", "Temple of Ramesses II", "Temple of Ramesses III", "Temple of Amenhotep III", "Temple of Thutmose III", "Temple of Hatshepsut", "Temple of Tutankhamun", "Temple of Ay", "Temple of Horemheb"
    ])
  },
  {
    name: "Nigeria",
    code: "ng",
    slug: "ng",
    flag: "🇳🇬",
    cities: createCities([
      "Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt", "Benin City", "Kaduna", "Aba", "Maiduguri", "Zaria",
      "Jos", "Ilorin", "Oyo", "Abeokuta", "Onitsha", "Warri", "Calabar", "Akure", "Bauchi", "Enugu",
      "Katsina", "Ado Ekiti", "Owerri", "Sokoto", "Gombe", "Yola", "Uyo", "Asaba", "Minna", "Lokoja",
      "Makurdi", "Jalingo", "Damaturu", "Gusau", "Birnin Kebbi", "Dutse", "Kebbi", "Katsina", "Daura", "Funtua",
      "Kano", "Zaria", "Kaduna", "Jos", "Bauchi", "Gombe", "Yola", "Jalingo", "Damaturu", "Maiduguri",
      "Kano", "Kaduna", "Jos", "Bauchi", "Gombe", "Yola", "Jalingo", "Damaturu", "Maiduguri", "Sokoto"
    ])
  },
  {
    name: "Argentina",
    code: "ar",
    slug: "ar",
    flag: "🇦🇷",
    cities: createCities([
      "Buenos Aires", "Córdoba", "Rosario", "Mendoza", "Tucumán", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan",
      "Resistencia", "Santiago del Estero", "Corrientes", "Bahía Blanca", "Posadas", "Paraná", "Neuquén", "Formosa", "San Salvador de Jujuy", "La Rioja",
      "Catamarca", "Río Cuarto", "Comodoro Rivadavia", "San Luis", "San Rafael", "Tandil", "Villa Mercedes", "Río Gallegos", "Ushuaia", "Rawson",
      "Viedma", "Santa Rosa", "Neuquén", "Rawson", "Viedma", "Santa Rosa", "San Luis", "Mendoza", "San Juan", "La Rioja",
      "Catamarca", "Tucumán", "Santiago del Estero", "Salta", "Jujuy", "Formosa", "Chaco", "Corrientes", "Misiones", "Entre Ríos",
      "Santa Fe", "Córdoba", "San Luis", "Mendoza", "San Juan", "La Rioja", "Catamarca", "Tucumán", "Santiago del Estero", "Salta"
    ])
  },
  {
    name: "Chile",
    code: "cl",
    slug: "cl",
    flag: "🇨🇱",
    cities: createCities([
      "Santiago", "Valparaíso", "Concepción", "La Serena", "Antofagasta", "Temuco", "Rancagua", "Talca", "Arica", "Iquique",
      "Puerto Montt", "Coquimbo", "Valdivia", "Osorno", "Chillán", "Calama", "Copiapó", "Los Ángeles", "Punta Arenas", "Curicó",
      "Villa Alemana", "Coronel", "San Antonio", "Chiguayante", "Ovalle", "Linares", "Quilpué", "Melipilla", "San Felipe", "Los Andes",
      "La Calera", "Quillota", "San Fernando", "Rengo", "Machalí", "Graneros", "Doñihue", "Coltauco", "Las Cabras", "Peumo",
      "Pichidegua", "Codegua", "Requínoa", "Rancagua", "Machalí", "Graneros", "Doñihue", "Coltauco", "Las Cabras", "Peumo",
      "Pichidegua", "Codegua", "Requínoa", "Rancagua", "Machalí", "Graneros", "Doñihue", "Coltauco", "Las Cabras", "Peumo"
    ])
  },
  {
    name: "Colombia",
    code: "co",
    slug: "co",
    flag: "🇨🇴",
    cities: createCities([
      "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Soledad", "Ibagué", "Bucaramanga", "Santa Marta",
      "Pereira", "Villavicencio", "Bello", "Pasto", "Manizales", "Neiva", "Palmira", "Armenia", "Popayán", "Sincelejo",
      "Riohacha", "Valledupar", "Montería", "Tunja", "Buenaventura", "Florencia", "Pasto", "Quibdó", "Arauca", "Yopal",
      "Mocoa", "Leticia", "Inírida", "San José del Guaviare", "Mitú", "Puerto Carreño", "San Andrés", "Providencia", "Barranquilla", "Cartagena",
      "Santa Marta", "Riohacha", "Valledupar", "Montería", "Sincelejo", "Tunja", "Bucaramanga", "Cúcuta", "Pereira", "Manizales",
      "Armenia", "Ibagué", "Neiva", "Pasto", "Popayán", "Florencia", "Quibdó", "Arauca", "Yopal", "Mocoa"
    ])
  },
  {
    name: "Netherlands",
    code: "nl",
    slug: "nl",
    flag: "🇳🇱",
    cities: createCities([
      "Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Groningen", "Tilburg", "Almere", "Breda", "Nijmegen",
      "Enschede", "Haarlem", "Arnhem", "Zaanstad", "Amersfoort", "Apeldoorn", "Hoofddorp", "Maastricht", "Leiden", "Dordrecht",
      "Zoetermeer", "Zwolle", "Deventer", "Delft", "Heerlen", "Venlo", "Leeuwarden", "Hilversum", "Amstelveen", "Roosendaal",
      "Schiedam", "Vlaardingen", "Alphen aan den Rijn", "Gouda", "Zaandam", "Hengelo", "Velsen", "Ede", "Barneveld", "Doetinchem",
      "Tiel", "Harderwijk", "Kampen", "Elburg", "Hattem", "Zwolle", "Meppel", "Hoogeveen", "Emmen", "Assen",
      "Groningen", "Leeuwarden", "Drachten", "Heerenveen", "Sneek", "Harlingen", "Franeker", "Dokkum", "Stadskanaal", "Veendam"
    ])
  },
  {
    name: "Belgium",
    code: "be",
    slug: "be",
    flag: "🇧🇪",
    cities: createCities([
      "Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven", "Mons", "Aalst",
      "Mechelen", "La Louvière", "Hasselt", "Kortrijk", "Ostend", "Sint-Niklaas", "Tournai", "Genk", "Seraing", "Roeselare",
      "Verviers", "Mouscron", "Beveren", "Dendermonde", "Beringen", "Turnhout", "Dilbeek", "Heist-op-den-Berg", "Sint-Truiden", "Lokeren",
      "Geel", "Brasschaat", "Vilvoorde", "Maaseik", "Waregem", "Châtelet", "Ieper", "Ninove", "Aarschot", "Halle",
      "Lier", "Tienen", "Herentals", "Mol", "Bilzen", "Houthalen-Helchteren", "Tongeren", "Wevelgem", "Brugge", "Oostende",
      "Knokke-Heist", "De Haan", "Blankenberge", "Zeebrugge", "Nieuwpoort", "Koksijde", "De Panne", "Middelkerke", "Ostend", "Bruges"
    ])
  },
  {
    name: "Switzerland",
    code: "ch",
    slug: "ch",
    flag: "🇨🇭",
    cities: createCities([
      "Zurich", "Geneva", "Basel", "Bern", "Lausanne", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel",
      "Thun", "Köniz", "La Chaux-de-Fonds", "Schaffhausen", "Fribourg", "Chur", "Neuchâtel", "Vernier", "Uster", "Sion",
      "Lancy", "Montreux", "Zug", "Frauenfeld", "Aarau", "Rapperswil-Jona", "Schwyz", "Herisau", "Appenzell", "Glarus",
      "Altdorf", "Zug", "Schaffhausen", "Frauenfeld", "Aarau", "Liestal", "Sarnen", "Stans", "Schwyz", "Glarus",
      "Altdorf", "Zug", "Schaffhausen", "Frauenfeld", "Aarau", "Liestal", "Sarnen", "Stans", "Schwyz", "Glarus",
      "Altdorf", "Zug", "Schaffhausen", "Frauenfeld", "Aarau", "Liestal", "Sarnen", "Stans", "Schwyz", "Glarus"
    ])
  },
  {
    name: "Austria",
    code: "at",
    slug: "at",
    flag: "🇦🇹",
    cities: createCities([
      "Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Pölten", "Dornbirn",
      "Steyr", "Wiener Neustadt", "Feldkirch", "Bregenz", "Leonding", "Klosterneuburg", "Baden", "Wolfsberg", "Leoben", "Krems",
      "Traun", "Amstetten", "Kapfenberg", "Hallein", "Kufstein", "Traiskirchen", "Schwechat", "St. Veit", "Ternitz", "Bludenz",
      "Spittal", "Braunau", "Knittelfeld", "Vöcklabruck", "Gmunden", "Waidhofen", "Lienz", "Eisenstadt", "Mattersburg", "Oberwart",
      "Güssing", "Jennersdorf", "Oberpullendorf", "Neusiedl", "Mattersburg", "Eisenstadt", "Rust", "Pinkafeld", "Güssing", "Jennersdorf",
      "Oberpullendorf", "Neusiedl", "Mattersburg", "Eisenstadt", "Rust", "Pinkafeld", "Güssing", "Jennersdorf", "Oberpullendorf", "Neusiedl"
    ])
  },
  {
    name: "Sweden",
    code: "se",
    slug: "se",
    flag: "🇸🇪",
    cities: createCities([
      "Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping",
      "Lund", "Umeå", "Gävle", "Borås", "Eskilstuna", "Södertälje", "Karlstad", "Täby", "Växjö", "Halmstad",
      "Sundsvall", "Luleå", "Trollhättan", "Östersund", "Borlänge", "Falun", "Kalmar", "Kristianstad", "Skellefteå", "Uppsala",
      "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping", "Lund", "Umeå", "Gävle", "Borås",
      "Eskilstuna", "Södertälje", "Karlstad", "Täby", "Växjö", "Halmstad", "Sundsvall", "Luleå", "Trollhättan", "Östersund",
      "Borlänge", "Falun", "Kalmar", "Kristianstad", "Skellefteå", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg"
    ])
  },
  {
    name: "Norway",
    code: "no",
    slug: "no",
    flag: "🇳🇴",
    cities: createCities([
      "Oslo", "Bergen", "Trondheim", "Stavanger", "Bærum", "Kristiansand", "Fredrikstad", "Sandnes", "Tromsø", "Sarpsborg",
      "Skien", "Ålesund", "Sandefjord", "Haugesund", "Tønsberg", "Moss", "Porsgrunn", "Bodø", "Arendal", "Hamar",
      "Larvik", "Halden", "Lillehammer", "Molde", "Kongsberg", "Horten", "Gjøvik", "Kristiansund", "Hønefoss", "Alta",
      "Elverum", "Askøy", "Kongsvinger", "Ringerike", "Haugesund", "Drammen", "Asker", "Bærum", "Lørenskog", "Lillestrøm",
      "Rælingen", "Nittedal", "Enebakk", "Oppegård", "Ski", "Ås", "Frogn", "Nesodden", "Bærum", "Asker",
      "Lørenskog", "Lillestrøm", "Rælingen", "Nittedal", "Enebakk", "Oppegård", "Ski", "Ås", "Frogn", "Nesodden"
    ])
  },
  {
    name: "Denmark",
    code: "dk",
    slug: "dk",
    flag: "🇩🇰",
    cities: createCities([
      "Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde",
      "Herning", "Helsingør", "Silkeborg", "Næstved", "Fredericia", "Viborg", "Køge", "Holstebro", "Taastrup", "Slagelse",
      "Hillerød", "Sønderborg", "Svendborg", "Hjørring", "Holbæk", "Frederikshavn", "Nykøbing Falster", "Ringsted", "Haderslev", "Skive",
      "Nyborg", "Kalundborg", "Hørsholm", "Birkerød", "Farum", "Ballerup", "Rødovre", "Brøndby", "Ishøj", "Hvidovre",
      "Glostrup", "Vallensbæk", "Bronshøj", "Vanløse", "Valby", "Amager", "Christianshavn", "Nørrebro", "Vesterbro", "Østerbro",
      "Frederiksberg", "Gentofte", "Lyngby", "Gladsaxe", "Rødovre", "Brøndby", "Ishøj", "Hvidovre", "Glostrup", "Vallensbæk"
    ])
  },
  {
    name: "Finland",
    code: "fi",
    slug: "fi",
    flag: "🇫🇮",
    cities: createCities([
      "Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori",
      "Kouvola", "Joensuu", "Lappeenranta", "Hämeenlinna", "Vaasa", "Seinäjoki", "Rovaniemi", "Mikkeli", "Kotka", "Salo",
      "Porvoo", "Lohja", "Hyvinkää", "Nurmijärvi", "Järvenpää", "Rauma", "Kokkola", "Kajaani", "Raahe", "Imatra",
      "Savonlinna", "Riihimäki", "Vihti", "Tuusula", "Kerava", "Kirkkonummi", "Sipoo", "Nurmijärvi", "Järvenpää", "Vantaa",
      "Espoo", "Helsinki", "Tampere", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori", "Kouvola",
      "Joensuu", "Lappeenranta", "Hämeenlinna", "Vaasa", "Seinäjoki", "Rovaniemi", "Mikkeli", "Kotka", "Salo", "Porvoo"
    ])
  },
  {
    name: "Poland",
    code: "pl",
    slug: "pl",
    flag: "🇵🇱",
    cities: createCities([
      "Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Katowice",
      "Białystok", "Gdynia", "Częstochowa", "Radom", "Sosnowiec", "Toruń", "Kielce", "Gliwice", "Zabrze", "Bytom",
      "Olsztyn", "Bielsko-Biała", "Rzeszów", "Ruda Śląska", "Rybnik", "Tychy", "Dąbrowa Górnicza", "Elbląg", "Opole", "Gorzów Wielkopolski",
      "Płock", "Wałbrzych", "Zielona Góra", "Tarnów", "Chorzów", "Kalisz", "Koszalin", "Legnica", "Grudziądz", "Słupsk",
      "Jaworzno", "Jastrzębie-Zdrój", "Jelenia Góra", "Nowy Sącz", "Jędrzejów", "Konin", "Piotrków Trybunalski", "Lubin", "Ostrołęka", "Stargard",
      "Mysłowice", "Piekary Śląskie", "Głogów", "Chełm", "Zamość", "Tomaszów Mazowiecki", "Przemyśl", "Stalowa Wola", "Mielec", "Łomża"
    ])
  },
  {
    name: "Greece",
    code: "gr",
    slug: "gr",
    flag: "🇬🇷",
    cities: createCities([
      "Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Ioannina", "Kavala", "Kalamata", "Rhodes",
      "Agrinio", "Chalcis", "Serres", "Alexandroupoli", "Xanthi", "Katerini", "Kalamata", "Kavala", "Lamia", "Komotini",
      "Sparta", "Tripoli", "Corinth", "Argos", "Nafplio", "Pyrgos", "Kozani", "Karditsa", "Drama", "Veria",
      "Giannitsa", "Kilkis", "Edessa", "Florina", "Kastoria", "Grevena", "Kozani", "Ptolemaida", "Amyntaio", "Siatista",
      "Kozani", "Veria", "Naousa", "Edessa", "Giannitsa", "Kilkis", "Florina", "Kastoria", "Grevena", "Ptolemaida",
      "Amyntaio", "Siatista", "Kozani", "Veria", "Naousa", "Edessa", "Giannitsa", "Kilkis", "Florina", "Kastoria"
    ])
  },
  {
    name: "Portugal",
    code: "pt",
    slug: "pt",
    flag: "🇵🇹",
    cities: createCities([
      "Lisbon", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Funchal", "Coimbra", "Setúbal", "Almada", "Agualva-Cacém",
      "Queluz", "Rio de Mouro", "Barreiro", "Aveiro", "Corroios", "Leiria", "Faro", "Évora", "Viseu", "Guimarães",
      "Matosinhos", "Gondomar", "Valongo", "Vila do Conde", "Póvoa de Varzim", "Esposende", "Barcelos", "Braga", "Famalicão", "Guimarães",
      "Vizela", "Felgueiras", "Lousada", "Paços de Ferreira", "Paredes", "Penafiel", "Marco de Canaveses", "Amarante", "Baião", "Resende",
      "Lamego", "Santa Marta de Penaguião", "Alijó", "Sabrosa", "Vila Real", "Chaves", "Valpaços", "Mirandela", "Macedo de Cavaleiros", "Bragança",
      "Vinhais", "Mogadouro", "Torre de Moncorvo", "Freixo de Espada à Cinta", "Vila Nova de Foz Côa", "Figueira de Castelo Rodrigo", "Almeida", "Sabugal", "Guarda", "Manteigas"
    ])
  },
  {
    name: "Ireland",
    code: "ie",
    slug: "ie",
    flag: "🇮🇪",
    cities: createCities([
      "Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Swords", "Bray", "Navan",
      "Ennis", "Kilkenny", "Carlow", "Tralee", "Newbridge", "Naas", "Athlone", "Portlaoise", "Mullingar", "Tullamore",
      "Longford", "Carrick-on-Shannon", "Sligo", "Letterkenny", "Donegal", "Ballyshannon", "Bundoran", "Enniskillen", "Cavan", "Monaghan",
      "Dundalk", "Drogheda", "Navan", "Trim", "Kells", "Athboy", "Oldcastle", "Virginia", "Bailieborough", "Kingscourt",
      "Carrickmacross", "Castleblayney", "Monaghan", "Clones", "Ballybay", "Belturbet", "Ballyconnell", "Bawnboy", "Blacklion", "Butlersbridge",
      "Cootehill", "Killeshandra", "Lough Gowna", "Mullagh", "Redhills", "Shercock", "Stradone", "Tullyvin", "Ballyjamesduff", "Crossdoney"
    ])
  },
  {
    name: "New Zealand",
    code: "nz",
    slug: "nz",
    flag: "🇳🇿",
    cities: createCities([
      "Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Napier", "Palmerston North", "Rotorua", "New Plymouth", "Whangarei",
      "Invercargill", "Nelson", "Hastings", "Gisborne", "Dunedin", "Timaru", "Blenheim", "Whanganui", "Taupo", "Masterton",
      "Levin", "Ashburton", "Oamaru", "Greymouth", "Westport", "Kaikoura", "Picton", "Nelson", "Motueka", "Richmond",
      "Takaka", "Collingwood", "Karamea", "Reefton", "Buller", "Hokitika", "Franz Josef", "Fox Glacier", "Haast", "Wanaka",
      "Queenstown", "Cromwell", "Alexandra", "Roxburgh", "Balclutha", "Milton", "Lawrence", "Ranfurly", "Naseby", "Ophir",
      "Arrowtown", "Glenorchy", "Te Anau", "Manapouri", "Tuatapere", "Riverton", "Winton", "Lumsden", "Gore", "Mataura"
    ])
  },
  {
    name: "Bangladesh",
    code: "bd",
    slug: "bd",
    flag: "🇧🇩",
    cities: createCities([
      "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Comilla", "Rangpur", "Mymensingh", "Barisal", "Jessore",
      "Narayanganj", "Gazipur", "Bogra", "Dinajpur", "Cox's Bazar", "Tangail", "Pabna", "Kushtia", "Faridpur", "Jamalpur",
      "Saidpur", "Feni", "Noakhali", "Lakshmipur", "Chandpur", "Brahmanbaria", "Kishoreganj", "Netrokona", "Sherpur", "Mymensingh",
      "Jamalpur", "Tangail", "Gazipur", "Narsingdi", "Narayanganj", "Munshiganj", "Shariatpur", "Madaripur", "Gopalganj", "Faridpur",
      "Rajbari", "Manikganj", "Dhaka", "Gazipur", "Narsingdi", "Narayanganj", "Munshiganj", "Shariatpur", "Madaripur", "Gopalganj",
      "Faridpur", "Rajbari", "Manikganj", "Dhaka", "Gazipur", "Narsingdi", "Narayanganj", "Munshiganj", "Shariatpur", "Madaripur"
    ])
  },
  {
    name: "Philippines",
    code: "ph",
    slug: "ph",
    flag: "🇵🇭",
    cities: createCities([
      "Manila", "Quezon City", "Caloocan", "Davao City", "Cebu City", "Zamboanga City", "Antipolo", "Pasig", "Taguig", "Valenzuela",
      "Cagayan de Oro", "Parañaque", "Las Piñas", "Makati", "Bacolod", "General Santos", "Marikina", "Muntinlupa", "San Jose del Monte", "Bacoor",
      "Calamba", "Iloilo City", "Mandaluyong", "Mandaue", "Navotas", "Malabon", "San Pedro", "Dagupan", "Butuan", "Iligan",
      "Lapu-Lapu", "Cainta", "San Fernando", "Lipa", "Batangas City", "Lucena", "Tarlac City", "Olongapo", "Angeles", "Baguio",
      "Naga", "Legazpi", "Roxas", "Puerto Princesa", "Tagbilaran", "Dipolog", "Pagadian", "Ozamiz", "Cotabato", "Kidapawan",
      "Tacurong", "Koronadal", "General Santos", "Davao City", "Tagum", "Panabo", "Digos", "Mati", "Malaybalay", "Valencia"
    ])
  },
  {
    name: "Vietnam",
    code: "vn",
    slug: "vn",
    flag: "🇻🇳",
    cities: createCities([
      "Ho Chi Minh City", "Hanoi", "Da Nang", "Haiphong", "Can Tho", "An Giang", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh",
      "Ba Ria-Vung Tau", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Cao Bang", "Dak Lak", "Dak Nong",
      "Dien Bien", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Ha Nam", "Ha Tinh", "Hai Duong", "Hau Giang", "Hoa Binh",
      "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh",
      "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri",
      "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang"
    ])
  },
  {
    name: "Thailand",
    code: "th",
    slug: "th",
    flag: "🇹🇭",
    cities: createCities([
      "Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai", "Udon Thani", "Pak Kret", "Khon Kaen", "Chaophraya Surasak", "Ubon Ratchathani",
      "Nakhon Si Thammarat", "Nakhon Sawan", "Phitsanulok", "Chon Buri", "Phra Nakhon Si Ayutthaya", "Songkhla", "Phuket", "Chiang Rai", "Surat Thani", "Rayong",
      "Trang", "Kanchanaburi", "Ratchaburi", "Lampang", "Saraburi", "Nakhon Pathom", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Phetchaburi",
      "Prachuap Khiri Khan", "Hua Hin", "Chumphon", "Ranong", "Surat Thani", "Nakhon Si Thammarat", "Krabi", "Phang Nga", "Phuket", "Trang",
      "Satun", "Songkhla", "Pattani", "Yala", "Narathiwat", "Chiang Mai", "Lamphun", "Lampang", "Phrae", "Nan",
      "Phayao", "Chiang Rai", "Mae Hong Son", "Uttaradit", "Sukhothai", "Phitsanulok", "Phichit", "Phetchabun", "Loei", "Nong Khai"
    ])
  },
  // ==================== PART 1: Additional Asian Countries ====================
  {
    name: "Malaysia",
    code: "my",
    slug: "my",
    flag: "🇲🇾",
    region: "Southeast Asia",
    continent: "Asia",
    cities: createCities([
      "Kuala Lumpur", "George Town", "Ipoh", "Johor Bahru", "Petaling Jaya", "Shah Alam", "Subang Jaya", "Klang", "Kota Kinabalu", "Kuching",
      "Melaka", "Seremban", "Alor Setar", "Kuantan", "Kota Bharu", "Kuala Terengganu", "Miri", "Sandakan", "Tawau", "Sibu",
      "Bintulu", "Taiping", "Sungai Petani", "Kulim", "Kangar", "Putrajaya", "Cyberjaya", "Nilai", "Rawang", "Kajang",
      "Ampang", "Cheras", "Puchong", "Seri Kembangan", "Batu Caves", "Gombak", "Damansara", "Bangi", "Sepang", "Port Dickson"
    ])
  },
  {
    name: "Singapore",
    code: "sg",
    slug: "sg",
    flag: "🇸🇬",
    region: "Southeast Asia",
    continent: "Asia",
    cities: createCities([
      "Singapore Central", "Orchard", "Marina Bay", "Sentosa", "Jurong", "Tampines", "Bedok", "Woodlands", "Ang Mo Kio", "Toa Payoh",
      "Bishan", "Bukit Timah", "Clementi", "Queenstown", "Bukit Merah", "Geylang", "Kallang", "Marine Parade", "Pasir Ris", "Punggol",
      "Sengkang", "Serangoon", "Hougang", "Yishun", "Sembawang", "Choa Chu Kang", "Bukit Batok", "Bukit Panjang", "Tengah", "Changi"
    ])
  },
  {
    name: "Sri Lanka",
    code: "lk",
    slug: "lk",
    flag: "🇱🇰",
    region: "South Asia",
    continent: "Asia",
    cities: createCities([
      "Colombo", "Kandy", "Galle", "Jaffna", "Negombo", "Batticaloa", "Trincomalee", "Anuradhapura", "Ratnapura", "Badulla",
      "Matara", "Kurunegala", "Moratuwa", "Dehiwala", "Nuwara Eliya", "Polonnaruwa", "Dambulla", "Sigiriya", "Hikkaduwa", "Mirissa",
      "Bentota", "Unawatuna", "Ella", "Arugam Bay", "Tangalle", "Hambantota", "Vavuniya", "Mannar", "Kilinochchi", "Mullaitivu"
    ])
  },
  {
    name: "Nepal",
    code: "np",
    slug: "np",
    flag: "🇳🇵",
    region: "South Asia",
    continent: "Asia",
    cities: createCities([
      "Kathmandu", "Pokhara", "Lalitpur", "Biratnagar", "Birgunj", "Bharatpur", "Butwal", "Dharan", "Bhaktapur", "Janakpur",
      "Hetauda", "Nepalgunj", "Itahari", "Dhangadhi", "Tulsipur", "Lumbini", "Chitwan", "Nagarkot", "Namche Bazaar", "Lukla",
      "Gorkha", "Tansen", "Ilam", "Dhulikhel", "Bandipur", "Patan", "Kirtipur", "Thimi", "Siddharthanagar", "Damak"
    ])
  },
  {
    name: "Myanmar",
    code: "mm",
    slug: "mm",
    flag: "🇲🇲",
    region: "Southeast Asia",
    continent: "Asia",
    cities: createCities([
      "Yangon", "Mandalay", "Naypyidaw", "Bago", "Mawlamyine", "Taunggyi", "Pathein", "Monywa", "Meiktila", "Myitkyina",
      "Sittwe", "Magway", "Pakokku", "Lashio", "Pyay", "Hinthada", "Myingyan", "Dawei", "Sagaing", "Kalay",
      "Kengtung", "Hakha", "Loikaw", "Falam", "Mindat", "Mudon", "Kyaikkami", "Ye", "Tavoy", "Mergui"
    ])
  },
  {
    name: "Cambodia",
    code: "kh",
    slug: "kh",
    flag: "🇰🇭",
    region: "Southeast Asia",
    continent: "Asia",
    cities: createCities([
      "Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville", "Kampot", "Kep", "Kratie", "Kampong Cham", "Pursat", "Takeo",
      "Svay Rieng", "Prey Veng", "Kandal", "Stung Treng", "Ratanakiri", "Mondulkiri", "Koh Kong", "Pailin", "Oddar Meanchey", "Preah Vihear",
      "Kampong Speu", "Kampong Thom", "Kampong Chhnang", "Banteay Meanchey", "Poipet", "Sisophon", "Angkor", "Tonle Sap", "Bokor", "Rabbit Island"
    ])
  },
  {
    name: "Laos",
    code: "la",
    slug: "la",
    flag: "🇱🇦",
    region: "Southeast Asia",
    continent: "Asia",
    cities: createCities([
      "Vientiane", "Luang Prabang", "Pakse", "Savannakhet", "Vang Vieng", "Thakhek", "Phonsavan", "Sam Neua", "Luang Namtha", "Muang Xay",
      "Bokeo", "Attapeu", "Sekong", "Salavan", "Champasak", "Paksan", "Xam Nua", "Ban Houayxay", "Phongsali", "Muang Sing",
      "Nong Khiaw", "Muang Ngoi", "Tha Khek", "Kong Lor", "Don Det", "Don Khon", "Si Phan Don", "Bolaven Plateau", "Wat Phou", "Plain of Jars"
    ])
  },
  {
    name: "Mongolia",
    code: "mn",
    slug: "mn",
    flag: "🇲🇳",
    region: "East Asia",
    continent: "Asia",
    cities: createCities([
      "Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan", "Mörön", "Ölgii", "Khovd", "Dalanzadgad", "Altai", "Bayankhongor",
      "Arvaikheer", "Bulgan", "Tsetserleg", "Choir", "Sainshand", "Sukhbaatar", "Mandalgovi", "Ondörkhaan", "Zuunmod", "Kharhorin",
      "Terelj", "Khustain", "Gun-Galuut", "Khövsgöl", "Gobi Desert", "Orkhon Valley", "Flaming Cliffs", "Yolyn Am", "Khongoryn Els", "Tsagaan Suvarga"
    ])
  },
  {
    name: "Kazakhstan",
    code: "kz",
    slug: "kz",
    flag: "🇰🇿",
    region: "Central Asia",
    continent: "Asia",
    cities: createCities([
      "Almaty", "Astana", "Shymkent", "Karaganda", "Aktobe", "Taraz", "Pavlodar", "Ust-Kamenogorsk", "Semey", "Atyrau",
      "Kostanay", "Kyzylorda", "Petropavl", "Aktau", "Temirtau", "Turkistan", "Taldykorgan", "Ekibastuz", "Rudny", "Zhanaozen",
      "Kentau", "Balkhash", "Zhezkazgan", "Saran", "Kokshetau", "Stepnogorsk", "Satpayev", "Shakhtinsk", "Arkalyk", "Lisakovsk"
    ])
  },
  {
    name: "Uzbekistan",
    code: "uz",
    slug: "uz",
    flag: "🇺🇿",
    region: "Central Asia",
    continent: "Asia",
    cities: createCities([
      "Tashkent", "Samarkand", "Bukhara", "Namangan", "Andijan", "Nukus", "Fergana", "Karshi", "Kokand", "Margilan",
      "Urgench", "Jizzakh", "Chirchiq", "Termez", "Navoi", "Angren", "Olmaliq", "Gulistan", "Shahrisabz", "Denau",
      "Khiva", "Navoiy", "Bekabad", "Chust", "Asaka", "Mubarek", "Yangiyul", "Zarafshon", "Uchquduq", "Gazli"
    ])
  },
  {
    name: "Azerbaijan",
    code: "az",
    slug: "az",
    flag: "🇦🇿",
    region: "Caucasus",
    continent: "Asia",
    cities: createCities([
      "Baku", "Ganja", "Sumqayit", "Mingachevir", "Lankaran", "Shaki", "Shirvan", "Yevlakh", "Nakhchivan", "Khachmaz",
      "Barda", "Shamkir", "Quba", "Goychay", "Agdash", "Zaqatala", "Imishli", "Salyan", "Agjabadi", "Jalilabad",
      "Gabala", "Shamakhi", "Gobustan", "Khinalig", "Lahij", "Astara", "Masalli", "Ismayilli", "Oguz", "Balakan"
    ])
  },
  {
    name: "Georgia",
    code: "ge",
    slug: "ge",
    flag: "🇬🇪",
    region: "Caucasus",
    continent: "Asia",
    cities: createCities([
      "Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Zugdidi", "Gori", "Poti", "Samtredia", "Khashuri", "Senaki",
      "Telavi", "Ozurgeti", "Akhaltsikhe", "Marneuli", "Kobuleti", "Kaspi", "Borjomi", "Sighnaghi", "Mtskheta", "Kazbegi",
      "Mestia", "Ushguli", "Vardzia", "Uplistsikhe", "David Gareja", "Prometheus Cave", "Martvili", "Tusheti", "Svaneti", "Khevsureti"
    ])
  },
  {
    name: "Armenia",
    code: "am",
    slug: "am",
    flag: "🇦🇲",
    region: "Caucasus",
    continent: "Asia",
    cities: createCities([
      "Yerevan", "Gyumri", "Vanadzor", "Vagharshapat", "Hrazdan", "Abovyan", "Kapan", "Armavir", "Artashat", "Goris",
      "Ijevan", "Sevan", "Charentsavan", "Yeghegnadzor", "Dilijan", "Stepanavan", "Sisian", "Alaverdi", "Meghri", "Tsakhkadzor",
      "Jermuk", "Tatev", "Khor Virap", "Geghard", "Garni", "Noravank", "Lake Sevan", "Amberd", "Haghpat", "Sanahin"
    ])
  },
  {
    name: "Taiwan",
    code: "tw",
    slug: "tw",
    flag: "🇹🇼",
    region: "East Asia",
    continent: "Asia",
    cities: createCities([
      "Taipei", "Kaohsiung", "Taichung", "Tainan", "Taoyuan", "Hsinchu", "Keelung", "Chiayi", "Changhua", "Pingtung",
      "Zhongli", "Banqiao", "Sanchong", "Xinzhuang", "Zhonghe", "Yonghe", "Tucheng", "Xindian", "Luzhou", "Yilan",
      "Hualien", "Taitung", "Nantou", "Miaoli", "Yunlin", "Penghu", "Kinmen", "Lienchiang", "Jiufen", "Sun Moon Lake"
    ])
  },
  {
    name: "Hong Kong",
    code: "hk",
    slug: "hk",
    flag: "🇭🇰",
    region: "East Asia",
    continent: "Asia",
    cities: createCities([
      "Central", "Kowloon", "Tsim Sha Tsui", "Mong Kok", "Causeway Bay", "Wan Chai", "Admiralty", "Sheung Wan", "Sai Ying Pun", "Kennedy Town",
      "Happy Valley", "North Point", "Quarry Bay", "Tai Koo", "Sha Tin", "Tsuen Wan", "Tuen Mun", "Yuen Long", "Tai Po", "Fanling",
      "Lantau Island", "Discovery Bay", "Tung Chung", "Repulse Bay", "Stanley", "Aberdeen", "Lamma Island", "Cheung Chau", "Sai Kung", "Clear Water Bay"
    ])
  },
  {
    name: "Macau",
    code: "mo",
    slug: "mo",
    flag: "🇲🇴",
    region: "East Asia",
    continent: "Asia",
    cities: createCities([
      "Macau Peninsula", "Taipa", "Coloane", "Cotai", "NAPE", "Old Taipa Village", "Hac Sa", "Cheoc Van", "Fishermans Wharf", "Outer Harbour",
      "Inner Harbour", "Santo Antonio", "Sao Lazaro", "Se", "Sao Lourenco", "Nossa Senhora de Fatima", "Macau Tower", "Ruins of St Paul", "Senado Square", "A-Ma Temple"
    ])
  },
  // ==================== PART 2: Additional European Countries ====================
  {
    name: "Ukraine",
    code: "ua",
    slug: "ua",
    flag: "🇺🇦",
    region: "Eastern Europe",
    continent: "Europe",
    cities: createCities([
      "Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol",
      "Luhansk", "Vinnytsia", "Makiivka", "Sevastopol", "Simferopol", "Kherson", "Poltava", "Chernihiv", "Cherkasy", "Sumy",
      "Zhytomyr", "Khmelnytskyi", "Rivne", "Ivano-Frankivsk", "Ternopil", "Lutsk", "Uzhhorod", "Chernivtsi", "Kropyvnytskyi", "Bila Tserkva"
    ])
  },
  {
    name: "Czech Republic",
    code: "cz",
    slug: "cz",
    flag: "🇨🇿",
    region: "Central Europe",
    continent: "Europe",
    cities: createCities([
      "Prague", "Brno", "Ostrava", "Plzen", "Liberec", "Olomouc", "Usti nad Labem", "Hradec Kralove", "Ceske Budejovice", "Pardubice",
      "Zlin", "Havirov", "Kladno", "Most", "Opava", "Frydek-Mistek", "Karvina", "Jihlava", "Teplice", "Decin",
      "Karlovy Vary", "Chomutov", "Jablonec nad Nisou", "Mlada Boleslav", "Prostejov", "Trinec", "Cesky Krumlov", "Kutna Hora", "Telc", "Trebic"
    ])
  },
  {
    name: "Hungary",
    code: "hu",
    slug: "hu",
    flag: "🇭🇺",
    region: "Central Europe",
    continent: "Europe",
    cities: createCities([
      "Budapest", "Debrecen", "Szeged", "Miskolc", "Pecs", "Gyor", "Nyiregyhaza", "Kecskemet", "Szekesfehervar", "Szombathely",
      "Szolnok", "Tatabanya", "Kaposvar", "Bekescsaba", "Veszprem", "Zalaegerszeg", "Sopron", "Eger", "Nagykanizsa", "Dunaujvaros",
      "Hodmezovasarhely", "Erd", "Szentendre", "Visegrad", "Esztergom", "Siofok", "Balatonfured", "Keszthely", "Heviz", "Tokaj"
    ])
  },
  {
    name: "Romania",
    code: "ro",
    slug: "ro",
    flag: "🇷🇴",
    region: "Eastern Europe",
    continent: "Europe",
    cities: createCities([
      "Bucharest", "Cluj-Napoca", "Timisoara", "Iasi", "Constanta", "Craiova", "Brasov", "Galati", "Ploiesti", "Oradea",
      "Braila", "Arad", "Pitesti", "Sibiu", "Bacau", "Targu Mures", "Baia Mare", "Buzau", "Botosani", "Satu Mare",
      "Ramnicu Valcea", "Drobeta-Turnu Severin", "Suceava", "Piatra Neamt", "Targoviste", "Focsani", "Bistrita", "Tulcea", "Alba Iulia", "Deva"
    ])
  },
  {
    name: "Bulgaria",
    code: "bg",
    slug: "bg",
    flag: "🇧🇬",
    region: "Eastern Europe",
    continent: "Europe",
    cities: createCities([
      "Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich", "Shumen",
      "Pernik", "Haskovo", "Yambol", "Pazardzhik", "Blagoevgrad", "Veliko Tarnovo", "Vratsa", "Gabrovo", "Vidin", "Asenovgrad",
      "Kazanlak", "Kyustendil", "Montana", "Targovishte", "Kardzhali", "Dimitrovgrad", "Lovech", "Silistra", "Razgrad", "Smolyan"
    ])
  },
  {
    name: "Croatia",
    code: "hr",
    slug: "hr",
    flag: "🇭🇷",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Pula", "Slavonski Brod", "Karlovac", "Varazdin", "Sibenik",
      "Sisak", "Vinkovci", "Velika Gorica", "Dubrovnik", "Bjelovar", "Koprivnica", "Vukovar", "Pozega", "Cakovec", "Samobor",
      "Rovinj", "Porec", "Opatija", "Makarska", "Trogir", "Hvar", "Korcula", "Brac", "Vis", "Plitvice"
    ])
  },
  {
    name: "Serbia",
    code: "rs",
    slug: "rs",
    flag: "🇷🇸",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Belgrade", "Novi Sad", "Nis", "Kragujevac", "Subotica", "Zrenjanin", "Pancevo", "Cacak", "Leskovac", "Kraljevo",
      "Smederevo", "Valjevo", "Uzice", "Vranje", "Sabac", "Sombor", "Pozarevac", "Pirot", "Zajecar", "Kikinda",
      "Sremska Mitrovica", "Jagodina", "Vrsac", "Bor", "Prokuplje", "Novi Pazar", "Loznica", "Paracin", "Aleksinac", "Arandelovac"
    ])
  },
  {
    name: "Slovakia",
    code: "sk",
    slug: "sk",
    flag: "🇸🇰",
    region: "Central Europe",
    continent: "Europe",
    cities: createCities([
      "Bratislava", "Kosice", "Presov", "Zilina", "Nitra", "Banska Bystrica", "Trnava", "Martin", "Trencin", "Poprad",
      "Prievidza", "Zvolen", "Povazska Bystrica", "Nove Zamky", "Michalovce", "Spisska Nova Ves", "Komarno", "Levice", "Humenne", "Bardejov",
      "Liptovsky Mikulas", "Piestany", "Lucenec", "Ruzomberok", "Dunajska Streda", "Pezinok", "Hlohovec", "Sala", "Dolny Kubin", "Svidnik"
    ])
  },
  {
    name: "Slovenia",
    code: "si",
    slug: "si",
    flag: "🇸🇮",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Ljubljana", "Maribor", "Celje", "Kranj", "Koper", "Velenje", "Novo Mesto", "Ptuj", "Trbovlje", "Kamnik",
      "Jesenice", "Nova Gorica", "Domzale", "Skofja Loka", "Murska Sobota", "Izola", "Piran", "Postojna", "Bled", "Bohinj",
      "Kranjska Gora", "Bovec", "Portoroz", "Rogaska Slatina", "Radovljica", "Tolmin", "Idrija", "Kocevje", "Litija", "Sentjur"
    ])
  },
  {
    name: "Bosnia and Herzegovina",
    code: "ba",
    slug: "ba",
    flag: "🇧🇦",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar", "Bijeljina", "Brcko", "Prijedor", "Doboj", "Cazin",
      "Zivinice", "Trebinje", "Visoko", "Gorazde", "Travnik", "Gradacac", "Lukavac", "Sanski Most", "Konjic", "Gracanica",
      "Jajce", "Bihac", "Neum", "Medjugorje", "Pocitelj", "Blagaj", "Visegrad", "Stolac", "Capljina", "Livno"
    ])
  },
  {
    name: "North Macedonia",
    code: "mk",
    slug: "mk",
    flag: "🇲🇰",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Skopje", "Bitola", "Kumanovo", "Prilep", "Tetovo", "Veles", "Ohrid", "Gostivar", "Strumica", "Stip",
      "Kavadarci", "Kocani", "Kicevo", "Struga", "Radovis", "Gevgelija", "Debar", "Krusevo", "Sveti Nikole", "Negotino",
      "Delcevo", "Vinica", "Berovo", "Probistip", "Kratovo", "Resen", "Demir Kapija", "Valandovo", "Makedonski Brod", "Pehcevo"
    ])
  },
  {
    name: "Albania",
    code: "al",
    slug: "al",
    flag: "🇦🇱",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Tirana", "Durres", "Vlore", "Elbasan", "Shkoder", "Fier", "Kamez", "Korce", "Berat", "Lushnje",
      "Pogradec", "Kavaje", "Gjirokaster", "Lac", "Sarande", "Kukes", "Peshkopi", "Burrel", "Lezhe", "Kruje",
      "Himara", "Permet", "Tepelene", "Bajram Curri", "Erseke", "Librazhd", "Gramsh", "Bulqize", "Kucove", "Polican"
    ])
  },
  {
    name: "Montenegro",
    code: "me",
    slug: "me",
    flag: "🇲🇪",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Podgorica", "Niksic", "Herceg Novi", "Pljevlja", "Bijelo Polje", "Cetinje", "Bar", "Budva", "Kotor", "Ulcinj",
      "Berane", "Tivat", "Rozaje", "Danilovgrad", "Plav", "Kolasin", "Mojkovac", "Zabljak", "Petrovac", "Sveti Stefan",
      "Perast", "Risan", "Prcanj", "Dobrota", "Stoliv", "Lastva Grbaljska", "Jaz Beach", "Becici", "Rafailovici", "Przno"
    ])
  },
  {
    name: "Kosovo",
    code: "xk",
    slug: "xk",
    flag: "🇽🇰",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Pristina", "Prizren", "Ferizaj", "Peja", "Gjakova", "Gjilan", "Mitrovica", "Podujeva", "Vushtrri", "Suhareka",
      "Rahovec", "Malisheva", "Lipjan", "Drenas", "Decan", "Istog", "Kamenica", "Dragash", "Fushe Kosove", "Kacanik",
      "Viti", "Kline", "Shtime", "Obiliq", "Gracanica", "Novo Brdo", "Skenderaj", "Zubin Potok", "Leposavic", "Zvecan"
    ])
  },
  {
    name: "Moldova",
    code: "md",
    slug: "md",
    flag: "🇲🇩",
    region: "Eastern Europe",
    continent: "Europe",
    cities: createCities([
      "Chisinau", "Tiraspol", "Balti", "Bender", "Ribnita", "Cahul", "Ungheni", "Soroca", "Orhei", "Comrat",
      "Dubasari", "Ceadir-Lunga", "Edinet", "Straseni", "Causeni", "Drochia", "Hancesti", "Floresti", "Nisporeni", "Rezina",
      "Cimislia", "Criuleni", "Stefan Voda", "Ialoveni", "Singerei", "Falesti", "Glodeni", "Briceni", "Ocnita", "Donduseni"
    ])
  },
  {
    name: "Belarus",
    code: "by",
    slug: "by",
    flag: "🇧🇾",
    region: "Eastern Europe",
    continent: "Europe",
    cities: createCities([
      "Minsk", "Gomel", "Mogilev", "Vitebsk", "Grodno", "Brest", "Bobruisk", "Baranovichi", "Borisov", "Pinsk",
      "Orsha", "Mozyr", "Novopolotsk", "Soligorsk", "Lida", "Molodechno", "Polotsk", "Zhlobin", "Svetlogorsk", "Rechitsa",
      "Slutsk", "Zhodino", "Kobrin", "Slonim", "Volkovysk", "Kalinkavichy", "Rogachev", "Osipovichi", "Gorki", "Krichev"
    ])
  },
  {
    name: "Lithuania",
    code: "lt",
    slug: "lt",
    flag: "🇱🇹",
    region: "Northern Europe",
    continent: "Europe",
    cities: createCities([
      "Vilnius", "Kaunas", "Klaipeda", "Siauliai", "Panevezys", "Alytus", "Marijampole", "Mazeikiai", "Jonava", "Utena",
      "Kedainiai", "Telsiai", "Visaginas", "Taurage", "Ukmerge", "Plunge", "Silute", "Kretinga", "Radviliskis", "Druskininkai",
      "Palanga", "Gargzdai", "Rokiskis", "Birzai", "Kuršėnai", "Elektrenai", "Garliava", "Vilkaviskis", "Raseiniai", "Prienai"
    ])
  },
  {
    name: "Latvia",
    code: "lv",
    slug: "lv",
    flag: "🇱🇻",
    region: "Northern Europe",
    continent: "Europe",
    cities: createCities([
      "Riga", "Daugavpils", "Liepaja", "Jelgava", "Jurmala", "Ventspils", "Rezekne", "Valmiera", "Jekabpils", "Ogre",
      "Tukums", "Salaspils", "Cesis", "Kuldiga", "Olaine", "Sigulda", "Saldus", "Talsi", "Dobele", "Kraslava",
      "Bauska", "Ludza", "Limbazi", "Aizkraukle", "Preili", "Madona", "Gulbene", "Aluksne", "Balvi", "Valka"
    ])
  },
  {
    name: "Estonia",
    code: "ee",
    slug: "ee",
    flag: "🇪🇪",
    region: "Northern Europe",
    continent: "Europe",
    cities: createCities([
      "Tallinn", "Tartu", "Narva", "Parnu", "Kohtla-Jarve", "Viljandi", "Rakvere", "Maardu", "Sillamae", "Kuressaare",
      "Valga", "Voru", "Johvi", "Haapsalu", "Keila", "Paide", "Tapa", "Polva", "Kivioli", "Elva",
      "Rapla", "Saue", "Kardla", "Jogeva", "Kunda", "Tori", "Otepaa", "Saaremaa", "Hiiumaa", "Lahemaa"
    ])
  },
  {
    name: "Iceland",
    code: "is",
    slug: "is",
    flag: "🇮🇸",
    region: "Northern Europe",
    continent: "Europe",
    cities: createCities([
      "Reykjavik", "Kopavogur", "Hafnarfjordur", "Akureyri", "Reykjanesbaer", "Gardabaer", "Mosfellsbaer", "Arborg", "Akranes", "Fjarðabyggð",
      "Selfoss", "Seltjarnarnes", "Vestmannaeyjar", "Grindavik", "Isafjordur", "Husavik", "Egilsstadir", "Hofn", "Vik", "Stykkisholmur",
      "Siglufjordur", "Dalvik", "Blonduos", "Saudarkrokur", "Olafsvik", "Budardalur", "Reykholt", "Hveragerdi", "Thorlakshofn", "Keflavik"
    ])
  },
  {
    name: "Luxembourg",
    code: "lu",
    slug: "lu",
    flag: "🇱🇺",
    region: "Western Europe",
    continent: "Europe",
    cities: createCities([
      "Luxembourg City", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck", "Diekirch", "Wiltz", "Echternach", "Rumelange", "Grevenmacher",
      "Remich", "Vianden", "Clervaux", "Mondorf-les-Bains", "Mersch", "Bettembourg", "Schifflange", "Kayl", "Rodange", "Mamer",
      "Strassen", "Bertrange", "Hesperange", "Sandweiler", "Niederanven", "Walferdange", "Steinfort", "Junglinster", "Mondercange", "Petange"
    ])
  },
  {
    name: "Malta",
    code: "mt",
    slug: "mt",
    flag: "🇲🇹",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Valletta", "Birkirkara", "Qormi", "Mosta", "Zabbar", "Sliema", "San Pawl il-Bahar", "Hamrun", "Zebbug", "Fgura",
      "San Gwann", "Zejtun", "Rabat", "Attard", "Naxxar", "Msida", "Birgu", "Mdina", "Victoria", "Marsaxlokk",
      "Mellieha", "Bugibba", "St. Julians", "Paceville", "Gzira", "Ta Xbiex", "Floriana", "Cospicua", "Senglea", "Gozo"
    ])
  },
  {
    name: "Cyprus",
    code: "cy",
    slug: "cy",
    flag: "🇨🇾",
    region: "Southern Europe",
    continent: "Europe",
    cities: createCities([
      "Nicosia", "Limassol", "Larnaca", "Famagusta", "Paphos", "Kyrenia", "Paralimni", "Strovolos", "Aglantzia", "Lakatamia",
      "Morphou", "Aradippou", "Latsia", "Engomi", "Kato Polemidia", "Agios Dometios", "Germasogeia", "Polis", "Ayia Napa", "Protaras",
      "Troodos", "Pissouri", "Coral Bay", "Kato Paphos", "Peyia", "Tala", "Emba", "Chlorakas", "Kissonerga", "Kathikas"
    ])
  },
  // ==================== PART 3: African Countries ====================
  {
    name: "Kenya",
    code: "ke",
    slug: "ke",
    flag: "🇰🇪",
    region: "East Africa",
    continent: "Africa",
    cities: createCities([
      "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Ruiru", "Thika", "Malindi", "Kitale", "Garissa",
      "Nyeri", "Machakos", "Meru", "Lamu", "Naivasha", "Kakamega", "Bungoma", "Kisii", "Kericho", "Nanyuki",
      "Embu", "Migori", "Homa Bay", "Kilifi", "Isiolo", "Kapenguria", "Voi", "Lodwar", "Marsabit", "Wajir"
    ])
  },
  {
    name: "Morocco",
    code: "ma",
    slug: "ma",
    flag: "🇲🇦",
    region: "North Africa",
    continent: "Africa",
    cities: createCities([
      "Casablanca", "Rabat", "Fes", "Marrakech", "Tangier", "Meknes", "Agadir", "Oujda", "Kenitra", "Tetouan",
      "Safi", "El Jadida", "Beni Mellal", "Nador", "Taza", "Settat", "Khouribga", "Mohammedia", "Larache", "Ksar el-Kebir",
      "Essaouira", "Ouarzazate", "Errachidia", "Chefchaouen", "Ifrane", "Zagora", "Tinghir", "Merzouga", "Asilah", "Moulay Idriss"
    ])
  },
  {
    name: "Ghana",
    code: "gh",
    slug: "gh",
    flag: "🇬🇭",
    region: "West Africa",
    continent: "Africa",
    cities: createCities([
      "Accra", "Kumasi", "Tamale", "Takoradi", "Ashaiman", "Cape Coast", "Tema", "Sunyani", "Koforidua", "Ho",
      "Wa", "Bolgatanga", "Techiman", "Obuasi", "Tarkwa", "Winneba", "Nkawkaw", "Hohoe", "Aflao", "Elmina",
      "Axim", "Berekum", "Akim Oda", "Nsawam", "Dunkwa", "Agona Swedru", "Suhum", "Kpandu", "Sogakope", "Navrongo"
    ])
  },
  {
    name: "Tanzania",
    code: "tz",
    slug: "tz",
    flag: "🇹🇿",
    region: "East Africa",
    continent: "Africa",
    cities: createCities([
      "Dar es Salaam", "Mwanza", "Arusha", "Dodoma", "Mbeya", "Morogoro", "Tanga", "Zanzibar City", "Kigoma", "Tabora",
      "Moshi", "Iringa", "Shinyanga", "Songea", "Musoma", "Bukoba", "Lindi", "Mtwara", "Sumbawanga", "Singida",
      "Stone Town", "Nungwi", "Paje", "Mikumi", "Selous", "Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara", "Kilwa"
    ])
  },
  {
    name: "Tunisia",
    code: "tn",
    slug: "tn",
    flag: "🇹🇳",
    region: "North Africa",
    continent: "Africa",
    cities: createCities([
      "Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte", "Gabes", "Ariana", "Gafsa", "Monastir", "Ben Arous",
      "Kasserine", "Medenine", "Nabeul", "Tataouine", "Beja", "Jendouba", "Mahdia", "Sidi Bouzid", "Tozeur", "Siliana",
      "Hammamet", "Djerba", "Tabarka", "Ain Draham", "Kerkennah", "Douz", "Matmata", "El Jem", "Dougga", "Carthage"
    ])
  },
  {
    name: "Algeria",
    code: "dz",
    slug: "dz",
    flag: "🇩🇿",
    region: "North Africa",
    continent: "Africa",
    cities: createCities([
      "Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa", "Setif", "Sidi Bel Abbes", "Biskra",
      "Tebessa", "El Oued", "Skikda", "Tiaret", "Bechar", "Tlemcen", "Bejaia", "Mostaganem", "Bordj Bou Arreridj", "Chlef",
      "Ghardaia", "Ouargla", "Tamanrasset", "Tizi Ouzou", "Medea", "Mascara", "Saida", "Jijel", "Tipaza", "Timgad"
    ])
  },
  {
    name: "Ethiopia",
    code: "et",
    slug: "et",
    flag: "🇪🇹",
    region: "East Africa",
    continent: "Africa",
    cities: createCities([
      "Addis Ababa", "Dire Dawa", "Mekelle", "Gondar", "Bahir Dar", "Hawassa", "Adama", "Jimma", "Harar", "Dessie",
      "Jijiga", "Shashamane", "Debre Birhan", "Arba Minch", "Dilla", "Nekemte", "Asosa", "Gambela", "Semera", "Assosa",
      "Axum", "Lalibela", "Simien Mountains", "Omo Valley", "Danakil", "Lake Tana", "Bale Mountains", "Sof Omar", "Erta Ale", "Tigray"
    ])
  },
  {
    name: "Uganda",
    code: "ug",
    slug: "ug",
    flag: "🇺🇬",
    region: "East Africa",
    continent: "Africa",
    cities: createCities([
      "Kampala", "Gulu", "Lira", "Mbarara", "Jinja", "Mbale", "Mukono", "Masaka", "Kasese", "Hoima",
      "Fort Portal", "Soroti", "Arua", "Entebbe", "Moroto", "Kabale", "Tororo", "Iganga", "Mityana", "Masindi",
      "Bwindi", "Queen Elizabeth NP", "Murchison Falls", "Lake Bunyonyi", "Rwenzori", "Kidepo", "Sipi Falls", "Ssese Islands", "Jinja Source", "Kibale"
    ])
  },
  {
    name: "Senegal",
    code: "sn",
    slug: "sn",
    flag: "🇸🇳",
    region: "West Africa",
    continent: "Africa",
    cities: createCities([
      "Dakar", "Thies", "Kaolack", "Mbour", "Saint-Louis", "Rufisque", "Ziguinchor", "Tambacounda", "Kolda", "Louga",
      "Diourbel", "Fatick", "Matam", "Kedougou", "Sedhiou", "Kaffrine", "Touba", "Goree Island", "Saly", "Cap Skirring",
      "Lac Rose", "Petite Cote", "Casamance", "Djoudj", "Niokolo-Koba", "Joal-Fadiouth", "Palmarin", "Sine-Saloum", "Bandia", "Ngor"
    ])
  },
  {
    name: "Ivory Coast",
    code: "ci",
    slug: "ci",
    flag: "🇨🇮",
    region: "West Africa",
    continent: "Africa",
    cities: createCities([
      "Abidjan", "Bouake", "Daloa", "Yamoussoukro", "Korhogo", "San-Pedro", "Man", "Divo", "Gagnoa", "Abengourou",
      "Anyama", "Agboville", "Bondoukou", "Dabou", "Duekoue", "Grand-Bassam", "Issia", "Odienne", "Sinfra", "Soubre",
      "Sassandra", "Tai", "Comoe", "Assinie", "Jacqueville", "Grand-Lahou", "Tiagba", "Bingerville", "Adjame", "Cocody"
    ])
  },
  {
    name: "Cameroon",
    code: "cm",
    slug: "cm",
    flag: "🇨🇲",
    region: "Central Africa",
    continent: "Africa",
    cities: createCities([
      "Douala", "Yaounde", "Garoua", "Bamenda", "Maroua", "Bafoussam", "Ngaoundere", "Bertoua", "Kumba", "Limbe",
      "Ebolowa", "Kribi", "Buea", "Edea", "Nkongsamba", "Mbalmayo", "Dschang", "Foumban", "Tiko", "Sangmelima",
      "Mount Cameroon", "Waza", "Korup", "Ring Road", "Rhumsiki", "Lobe Falls", "Campo Beach", "Lobeke", "Dja Reserve", "Mandara Mountains"
    ])
  },
  {
    name: "Zimbabwe",
    code: "zw",
    slug: "zw",
    flag: "🇿🇼",
    region: "Southern Africa",
    continent: "Africa",
    cities: createCities([
      "Harare", "Bulawayo", "Chitungwiza", "Mutare", "Gweru", "Epworth", "Kwekwe", "Kadoma", "Masvingo", "Chinhoyi",
      "Marondera", "Norton", "Chegutu", "Bindura", "Zvishavane", "Beitbridge", "Redcliff", "Victoria Falls", "Hwange", "Kariba",
      "Nyanga", "Chimanimani", "Great Zimbabwe", "Mana Pools", "Matusadona", "Gonarezhou", "Matobo", "Eastern Highlands", "Lake Kariba", "Zambezi"
    ])
  },
  {
    name: "Zambia",
    code: "zm",
    slug: "zm",
    flag: "🇿🇲",
    region: "Southern Africa",
    continent: "Africa",
    cities: createCities([
      "Lusaka", "Kitwe", "Ndola", "Kabwe", "Chingola", "Mufulira", "Livingstone", "Luanshya", "Kasama", "Chipata",
      "Chililabombwe", "Mansa", "Solwezi", "Mongu", "Kalulushi", "Mazabuka", "Choma", "Kafue", "Kapiri Mposhi", "Monze",
      "Victoria Falls", "South Luangwa", "Lower Zambezi", "Kafue NP", "Lake Kariba", "Blue Lagoon", "Lochinvar", "Bangweulu", "Shiwa Ngandu", "Kasanka"
    ])
  },
  {
    name: "Botswana",
    code: "bw",
    slug: "bw",
    flag: "🇧🇼",
    region: "Southern Africa",
    continent: "Africa",
    cities: createCities([
      "Gaborone", "Francistown", "Molepolole", "Serowe", "Selibe Phikwe", "Maun", "Kanye", "Mahalapye", "Mochudi", "Mogoditshane",
      "Lobatse", "Palapye", "Kasane", "Jwaneng", "Orapa", "Letlhakane", "Ramotswa", "Tlokweng", "Ghanzi", "Tshabong",
      "Okavango Delta", "Chobe", "Makgadikgadi", "Moremi", "Savuti", "Nxai Pan", "Central Kalahari", "Khama Rhino", "Tuli Block", "Mashatu"
    ])
  },
  {
    name: "Namibia",
    code: "na",
    slug: "na",
    flag: "🇳🇦",
    region: "Southern Africa",
    continent: "Africa",
    cities: createCities([
      "Windhoek", "Walvis Bay", "Swakopmund", "Rundu", "Oshakati", "Katima Mulilo", "Grootfontein", "Rehoboth", "Otjiwarongo", "Okahandja",
      "Keetmanshoop", "Tsumeb", "Ondangwa", "Mariental", "Gobabis", "Karibib", "Usakos", "Outjo", "Omaruru", "Luderitz",
      "Sossusvlei", "Etosha", "Fish River Canyon", "Skeleton Coast", "Damaraland", "Caprivi Strip", "Spitzkoppe", "Twyfelfontein", "Kolmanskop", "Cape Cross"
    ])
  },
  {
    name: "Mozambique",
    code: "mz",
    slug: "mz",
    flag: "🇲🇿",
    region: "Southern Africa",
    continent: "Africa",
    cities: createCities([
      "Maputo", "Matola", "Beira", "Nampula", "Chimoio", "Nacala", "Quelimane", "Tete", "Xai-Xai", "Lichinga",
      "Pemba", "Mocuba", "Gurué", "Inhambane", "Maxixe", "Angoche", "Cuamba", "Montepuez", "Chokwe", "Chibuto",
      "Bazaruto", "Quirimbas", "Gorongosa", "Ilha de Mozambique", "Tofo Beach", "Vilankulo", "Ponta do Ouro", "Niassa Reserve", "Maputo Special Reserve", "Limpopo"
    ])
  },
  {
    name: "Rwanda",
    code: "rw",
    slug: "rw",
    flag: "🇷🇼",
    region: "East Africa",
    continent: "Africa",
    cities: createCities([
      "Kigali", "Butare", "Gitarama", "Ruhengeri", "Gisenyi", "Byumba", "Cyangugu", "Nyanza", "Kibungo", "Kibuye",
      "Muhanga", "Huye", "Musanze", "Rubavu", "Rusizi", "Nyagatare", "Kayonza", "Rwamagana", "Karongi", "Ngoma",
      "Volcanoes NP", "Nyungwe Forest", "Akagera", "Lake Kivu", "Kigali Genocide Memorial", "Murambi", "Ntarama", "Bisesero", "Gisozi", "King Palace Museum"
    ])
  },
  {
    name: "Mauritius",
    code: "mu",
    slug: "mu",
    flag: "🇲🇺",
    region: "East Africa",
    continent: "Africa",
    cities: createCities([
      "Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe", "Quatre Bornes", "Triolet", "Goodlands", "Centre de Flacq", "Bel Air Rivière Sèche", "Mahebourg",
      "Saint Pierre", "Le Hochet", "Bambous", "Chemin Grenier", "Souillac", "Rivière du Rempart", "Grand Baie", "Pereybere", "Flic en Flac", "Belle Mare",
      "Le Morne", "Black River Gorges", "Chamarel", "Ile aux Cerfs", "Blue Bay", "Trou aux Biches", "Mont Choisy", "Tamarin", "La Preneuse", "Rodrigues Island"
    ])
  },
  {
    name: "Madagascar",
    code: "mg",
    slug: "mg",
    flag: "🇲🇬",
    region: "East Africa",
    continent: "Africa",
    cities: createCities([
      "Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana", "Ambovombe", "Morondava", "Ihosy",
      "Ambanja", "Manakara", "Ambositra", "Sambava", "Nosy Be", "Antalaha", "Moramanga", "Fenerive Est", "Maevatanana", "Farafangana",
      "Avenue of the Baobabs", "Tsingy de Bemaraha", "Isalo", "Ranomafana", "Andasibe", "Ile Sainte Marie", "Diego Suarez", "Ifaty", "Anakao", "Lokobe"
    ])
  },
  {
    name: "Libya",
    code: "ly",
    slug: "ly",
    flag: "🇱🇾",
    region: "North Africa",
    continent: "Africa",
    cities: createCities([
      "Tripoli", "Benghazi", "Misrata", "Tarhuna", "Al Khums", "Az Zawiyah", "Zliten", "Ajdabiya", "Sabha", "Sirte",
      "Al Bayda", "Tobruk", "Derna", "Gharyan", "Bani Walid", "Al Marj", "Nalut", "Ghadames", "Ubari", "Murzuq",
      "Leptis Magna", "Sabratha", "Cyrene", "Ghadames Old Town", "Akakus Mountains", "Waw an Namus", "Garama", "Tadrart Acacus", "Ubari Lakes", "Sahara Desert"
    ])
  },
  {
    name: "Sudan",
    code: "sd",
    slug: "sd",
    flag: "🇸🇩",
    region: "North Africa",
    continent: "Africa",
    cities: createCities([
      "Khartoum", "Omdurman", "Port Sudan", "Kassala", "El Obeid", "Nyala", "Wad Medani", "El Fasher", "Kosti", "Gedaref",
      "Ad Damazin", "Al Qadarif", "Rabak", "Atbara", "Sennar", "Singa", "Ed Damer", "Dongola", "Wadi Halfa", "Shendi",
      "Meroe", "Naga", "Musawwarat", "Jebel Barkal", "Kerma", "Naqa", "Suakin", "Sanganeb", "Dinder", "Radom"
    ])
  },
  {
    name: "Angola",
    code: "ao",
    slug: "ao",
    flag: "🇦🇴",
    region: "Southern Africa",
    continent: "Africa",
    cities: createCities([
      "Luanda", "Huambo", "Lobito", "Benguela", "Lucapa", "Kuito", "Lubango", "Malanje", "Namibe", "Soyo",
      "Cabinda", "Uíge", "Saurimo", "Sumbe", "N'dalatando", "Menongue", "Ondjiva", "Caxito", "Cuito Cuanavale", "Tombwa",
      "Kissama", "Kalandula Falls", "Tunda Vala", "Serra da Leba", "Mupa", "Bicuar", "Quicama", "Iona", "Cangandala", "Luando"
    ])
  },
  // ==================== PART 4: Middle Eastern Countries ====================
  {
    name: "Israel",
    code: "il",
    slug: "il",
    flag: "🇮🇱",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Tel Aviv", "Jerusalem", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beer Sheva", "Holon", "Bnei Brak",
      "Ramat Gan", "Ashkelon", "Rehovot", "Bat Yam", "Herzliya", "Kfar Saba", "Hadera", "Modi'in", "Nazareth", "Lod",
      "Eilat", "Tiberias", "Acre", "Safed", "Caesarea", "Masada", "Dead Sea", "Ein Gedi", "Rosh HaNikra", "Jaffa"
    ])
  },
  {
    name: "Jordan",
    code: "jo",
    slug: "jo",
    flag: "🇯🇴",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Amman", "Zarqa", "Irbid", "Russeifa", "Quwaysimah", "Aqaba", "Madaba", "Salt", "Mafraq", "Jerash",
      "Ajloun", "Karak", "Ma'an", "Tafilah", "Wadi Musa", "Sahab", "Fuhais", "Ramtha", "Baqa'a", "Sweileh",
      "Petra", "Wadi Rum", "Dead Sea Jordan", "Mount Nebo", "Kerak Castle", "Dana", "Umm Qais", "Bethany Beyond Jordan", "Azraq", "Shobak"
    ])
  },
  {
    name: "Kuwait",
    code: "kw",
    slug: "kw",
    flag: "🇰🇼",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Kuwait City", "Hawalli", "Salmiya", "Al Farwaniyah", "Sabah Al-Salem", "Al Ahmadi", "Al Jahra", "Fahaheel", "Mangaf", "Abu Halifa",
      "Fintas", "Mahboula", "Jleeb Al-Shuyoukh", "Khaitan", "Salwa", "Rumaithiya", "Bayan", "Mishref", "Shaab", "Dasma",
      "Failaka Island", "Kuwait Towers", "Grand Mosque", "Souk Al-Mubarakiya", "Scientific Center", "Seif Palace", "Liberation Tower", "Green Island", "Marina Mall", "The Avenues"
    ])
  },
  {
    name: "Qatar",
    code: "qa",
    slug: "qa",
    flag: "🇶🇦",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Doha", "Al Rayyan", "Al Wakrah", "Al Khor", "Umm Salal", "Al Shamal", "Madinat ash Shamal", "Al Daayen", "Lusail", "Dukhan",
      "Mesaieed", "Al Wukair", "Al Kharrara", "Al Ghuwariyah", "Fuwayrit", "Al Ruwais", "Ras Laffan", "Simaisma", "Al Thakhira", "Zubarah",
      "The Pearl", "Katara", "Souq Waqif", "Museum of Islamic Art", "Aspire Zone", "Education City", "Al Zubarah Fort", "Banana Island", "Inland Sea", "Film City"
    ])
  },
  {
    name: "Bahrain",
    code: "bh",
    slug: "bh",
    flag: "🇧🇭",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Budaiya", "Jidhafs", "Al Hidd",
      "Sanabis", "Zinj", "Adliya", "Juffair", "Seef", "Amwaj Islands", "Durrat Al Bahrain", "Bahrain Bay", "Diyar Al Muharraq", "Dilmunia",
      "Bahrain Fort", "Al Fateh Mosque", "Tree of Life", "Bab Al Bahrain", "Al Areen", "Bahrain National Museum", "Oil Museum", "Al Jasra House", "Barbar Temple", "Qal'at al-Bahrain"
    ])
  },
  {
    name: "Oman",
    code: "om",
    slug: "om",
    flag: "🇴🇲",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Muscat", "Seeb", "Salalah", "Bawshar", "Sohar", "As Suwayq", "Ibri", "Saham", "Barka", "Rustaq",
      "Nizwa", "Sur", "Bahla", "Al Buraimi", "Khasab", "Duqm", "Ibra", "Bidiyah", "Adam", "Shinas",
      "Jebel Shams", "Wadi Shab", "Wahiba Sands", "Jabrin Castle", "Nakhal Fort", "Al Hoota Cave", "Misfat Al Abriyyin", "Jebel Akhdar", "Daymaniyat Islands", "Ras Al Jinz"
    ])
  },
  {
    name: "Iran",
    code: "ir",
    slug: "ir",
    flag: "🇮🇷",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Tehran", "Mashhad", "Isfahan", "Karaj", "Shiraz", "Tabriz", "Qom", "Ahvaz", "Kermanshah", "Urmia",
      "Rasht", "Zahedan", "Hamadan", "Kerman", "Yazd", "Ardabil", "Bandar Abbas", "Arak", "Eslamshahr", "Zanjan",
      "Persepolis", "Pasargadae", "Naqsh-e Rostam", "Nasir al-Mulk Mosque", "Imam Square", "Golestan Palace", "Vank Cathedral", "Chogha Zanbil", "Tabriz Bazaar", "Alamut Castle"
    ])
  },
  {
    name: "Iraq",
    code: "iq",
    slug: "iq",
    flag: "🇮🇶",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Baghdad", "Basra", "Mosul", "Erbil", "Sulaymaniyah", "Kirkuk", "Najaf", "Karbala", "Nasiriyah", "Amarah",
      "Duhok", "Hillah", "Diwaniyah", "Kut", "Ramadi", "Samarra", "Fallujah", "Tikrit", "Baqubah", "Zakho",
      "Babylon", "Ur", "Nineveh", "Hatra", "Ashur", "Samarra Minaret", "Erbil Citadel", "Imam Ali Mosque", "Ctesiphon", "Marshlands"
    ])
  },
  {
    name: "Yemen",
    code: "ye",
    slug: "ye",
    flag: "🇾🇪",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Sanaa", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Mukalla", "Dhamar", "Amran", "Sayyan", "Zinjibar",
      "Saywun", "Shibam", "Marib", "Hajjah", "Lahij", "Al Bayda", "Ataq", "Rada", "Yarim", "Al Mahwit",
      "Old Sanaa", "Shibam Hadramaut", "Socotra Island", "Marib Dam", "Kawkaban", "Thula", "Al Janad Mosque", "Cisterns of Tawila", "Dar al-Hajar", "Queen of Sheba Temple"
    ])
  },
  {
    name: "Lebanon",
    code: "lb",
    slug: "lb",
    flag: "🇱🇧",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Beirut", "Tripoli", "Sidon", "Tyre", "Jounieh", "Zahle", "Byblos", "Baalbek", "Nabatieh", "Aley",
      "Broummana", "Beit Mery", "Batroun", "Ehden", "Bcharre", "Deir el Qamar", "Harissa", "Faraya", "Mzaar", "The Cedars",
      "Baalbek Temples", "Jeita Grotto", "Pigeon Rocks", "Beiteddine Palace", "Qadisha Valley", "Tyre Beach", "Byblos Castle", "Anjar", "Moussa Castle", "Mleeta"
    ])
  },
  {
    name: "Syria",
    code: "sy",
    slug: "sy",
    flag: "🇸🇾",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Damascus", "Aleppo", "Homs", "Latakia", "Hama", "Raqqa", "Deir ez-Zor", "Hasakah", "Qamishli", "Tartus",
      "Idlib", "Daraa", "Suwayda", "Manbij", "Douma", "Jaramana", "Salamiyah", "Jableh", "Afrin", "Azaz",
      "Palmyra", "Bosra", "Krak des Chevaliers", "Umayyad Mosque", "Citadel of Aleppo", "Apamea", "Dead Cities", "Qalat Salah El-Din", "Maaloula", "Seidnaya"
    ])
  },
  {
    name: "Palestine",
    code: "ps",
    slug: "ps",
    flag: "🇵🇸",
    region: "Middle East",
    continent: "Asia",
    cities: createCities([
      "Gaza City", "Hebron", "Nablus", "Ramallah", "Khan Yunis", "Rafah", "Bethlehem", "Jenin", "Tulkarm", "Qalqilya",
      "Jericho", "Beit Lahia", "Deir al-Balah", "Jabalia", "Al-Bireh", "Beit Hanoun", "Yatta", "Dura", "Tubas", "Salfit",
      "Church of Nativity", "Old City Hebron", "Jacob's Well", "Tell es-Sultan", "Hisham's Palace", "Al-Aqsa Mosque", "Sebastia", "Mount Gerizim", "Battir", "Mar Saba"
    ])
  },
  // ==================== PART 5: American Countries (Latin America & Caribbean) ====================
  {
    name: "Peru",
    code: "pe",
    slug: "pe",
    flag: "🇵🇪",
    region: "South America",
    continent: "South America",
    cities: createCities([
      "Lima", "Arequipa", "Trujillo", "Chiclayo", "Piura", "Cusco", "Iquitos", "Huancayo", "Chimbote", "Tacna",
      "Juliaca", "Ica", "Pucallpa", "Cajamarca", "Ayacucho", "Puno", "Sullana", "Huaraz", "Chincha Alta", "Tarapoto",
      "Machu Picchu", "Sacred Valley", "Lake Titicaca", "Nazca Lines", "Colca Canyon", "Amazon Rainforest", "Rainbow Mountain", "Huacachina", "Mancora", "Paracas"
    ])
  },
  {
    name: "Venezuela",
    code: "ve",
    slug: "ve",
    flag: "🇻🇪",
    region: "South America",
    continent: "South America",
    cities: createCities([
      "Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Maracay", "Ciudad Guayana", "Barcelona", "Maturín", "Petare", "San Cristóbal",
      "Ciudad Bolívar", "Cumaná", "Mérida", "Los Teques", "Barinas", "Cabimas", "Puerto La Cruz", "Punto Fijo", "Guarenas", "Acarigua",
      "Angel Falls", "Los Roques", "Isla Margarita", "Canaima", "Morrocoy", "Gran Sabana", "Orinoco Delta", "Medanos de Coro", "Mount Roraima", "Choroni"
    ])
  },
  {
    name: "Ecuador",
    code: "ec",
    slug: "ec",
    flag: "🇪🇨",
    region: "South America",
    continent: "South America",
    cities: createCities([
      "Quito", "Guayaquil", "Cuenca", "Santo Domingo", "Machala", "Durán", "Manta", "Portoviejo", "Loja", "Ambato",
      "Riobamba", "Esmeraldas", "Ibarra", "Latacunga", "Quevedo", "Milagro", "Babahoyo", "La Libertad", "Tulcán", "Sangolquí",
      "Galapagos Islands", "Banos", "Cotopaxi", "Otavalo", "Montanita", "Puerto Lopez", "Quilotoa", "Ingapirca", "Amazon Basin", "Mindo"
    ])
  },
  {
    name: "Panama",
    code: "pa",
    slug: "pa",
    flag: "🇵🇦",
    region: "Central America",
    continent: "North America",
    cities: createCities([
      "Panama City", "San Miguelito", "Tocumen", "David", "Colón", "La Chorrera", "Santiago", "Chitré", "Penonomé", "Changuinola",
      "Aguadulce", "Las Tablas", "La Concepción", "Chepo", "Bocas del Toro", "Arraiján", "Pacora", "Capira", "El Coco", "Coronado",
      "Panama Canal", "Casco Viejo", "Bocas del Toro Islands", "San Blas Islands", "Boquete", "Santa Catalina", "Portobelo", "Gamboa", "El Valle", "Amador Causeway"
    ])
  },
  {
    name: "Costa Rica",
    code: "cr",
    slug: "cr",
    flag: "🇨🇷",
    region: "Central America",
    continent: "North America",
    cities: createCities([
      "San José", "Limón", "San Francisco", "Alajuela", "Liberia", "Paraíso", "Desamparados", "Puntarenas", "San Isidro", "Curridabat",
      "San Rafael", "Heredia", "Cartago", "Escazú", "Santa Ana", "Quepos", "Jacó", "Tamarindo", "La Fortuna", "Puerto Viejo",
      "Arenal Volcano", "Manuel Antonio", "Monteverde", "Tortuguero", "Corcovado", "Rincón de la Vieja", "Poás Volcano", "Cahuita", "Papagayo", "Drake Bay"
    ])
  },
  {
    name: "Cuba",
    code: "cu",
    slug: "cu",
    flag: "🇨🇺",
    region: "Caribbean",
    continent: "North America",
    cities: createCities([
      "Havana", "Santiago de Cuba", "Camagüey", "Holguín", "Santa Clara", "Guantánamo", "Bayamo", "Las Tunas", "Cienfuegos", "Pinar del Río",
      "Matanzas", "Sancti Spíritus", "Ciego de Ávila", "Manzanillo", "Artemisa", "Trinidad", "Morón", "Nuevitas", "Güines", "Cárdenas",
      "Varadero", "Viñales", "Old Havana", "Trinidad Colonial", "Baracoa", "Cayo Coco", "Cayo Largo", "Jardines del Rey", "Playa Girón", "Sierra Maestra"
    ])
  },
  {
    name: "Jamaica",
    code: "jm",
    slug: "jm",
    flag: "🇯🇲",
    region: "Caribbean",
    continent: "North America",
    cities: createCities([
      "Kingston", "Montego Bay", "Spanish Town", "Portmore", "Mandeville", "May Pen", "Old Harbour", "Savanna-la-Mar", "Ocho Rios", "Negril",
      "Port Antonio", "Morant Bay", "Lucea", "St. Ann's Bay", "Falmouth", "Black River", "Port Maria", "Runaway Bay", "Discovery Bay", "Treasure Beach",
      "Blue Mountains", "Dunn's River Falls", "Bob Marley Museum", "Rose Hall", "Rick's Cafe", "YS Falls", "Luminous Lagoon", "Mystic Mountain", "Devon House", "Appleton Estate"
    ])
  },
  {
    name: "Dominican Republic",
    code: "do",
    slug: "do",
    flag: "🇩🇴",
    region: "Caribbean",
    continent: "North America",
    cities: createCities([
      "Santo Domingo", "Santiago", "Santo Domingo Este", "Santo Domingo Norte", "San Pedro de Macorís", "La Romana", "San Francisco de Macorís", "San Cristóbal", "Puerto Plata", "La Vega",
      "Higüey", "Moca", "Bonao", "Baní", "Azua", "Barahona", "Monte Plata", "Cotuí", "Nagua", "Samaná",
      "Punta Cana", "Zona Colonial", "Los Haitises", "Lago Enriquillo", "Jarabacoa", "Constanza", "Bahía de las Águilas", "Saona Island", "Altos de Chavón", "27 Waterfalls"
    ])
  },
  {
    name: "Puerto Rico",
    code: "pr",
    slug: "pr",
    flag: "🇵🇷",
    region: "Caribbean",
    continent: "North America",
    cities: createCities([
      "San Juan", "Bayamón", "Carolina", "Ponce", "Caguas", "Guaynabo", "Arecibo", "Mayagüez", "Toa Baja", "Trujillo Alto",
      "Fajardo", "Vega Baja", "Aguadilla", "Humacao", "Guayama", "Dorado", "Manatí", "Río Grande", "Isabela", "Rincón",
      "Old San Juan", "El Yunque", "Bioluminescent Bays", "Culebra", "Vieques", "Flamenco Beach", "Camuy Caves", "Castillo San Felipe", "La Parguera", "Condado"
    ])
  },
  {
    name: "Haiti",
    code: "ht",
    slug: "ht",
    flag: "🇭🇹",
    region: "Caribbean",
    continent: "North America",
    cities: createCities([
      "Port-au-Prince", "Cap-Haïtien", "Gonaïves", "Les Cayes", "Pétion-Ville", "Delmas", "Carrefour", "Port-de-Paix", "Saint-Marc", "Jacmel",
      "Limbé", "Jérémie", "Miragoâne", "Hinche", "Fort-Liberté", "Léogâne", "Petit-Goâve", "Aquin", "Ouanaminthe", "Croix-des-Bouquets",
      "Citadelle Laferrière", "Sans-Souci Palace", "Labadee", "Bassin Bleu", "Île-à-Vache", "Kenscoff", "Saut-Mathurine", "Pic la Selle", "Parc National la Visite", "Furcy"
    ])
  },
  {
    name: "Trinidad and Tobago",
    code: "tt",
    slug: "tt",
    flag: "🇹🇹",
    region: "Caribbean",
    continent: "North America",
    cities: createCities([
      "Port of Spain", "San Fernando", "Chaguanas", "Arima", "Point Fortin", "Scarborough", "Sangre Grande", "Princes Town", "Siparia", "Rio Claro",
      "Couva", "Diego Martin", "Tunapuna", "Morvant", "Marabella", "Penal", "San Juan", "Barataria", "Curepe", "Laventille",
      "Maracas Beach", "Pigeon Point", "Caroni Swamp", "Pitch Lake", "Nylon Pool", "Asa Wright", "Temple in the Sea", "Fort George", "Buccoo Reef", "Main Ridge Forest"
    ])
  },
  {
    name: "Guatemala",
    code: "gt",
    slug: "gt",
    flag: "🇬🇹",
    region: "Central America",
    continent: "North America",
    cities: createCities([
      "Guatemala City", "Villa Nueva", "Mixco", "Quetzaltenango", "San Miguel Petapa", "Villa Canales", "Escuintla", "Chinautla", "Amatitlán", "Huehuetenango",
      "Cobán", "Chimaltenango", "Antigua Guatemala", "Santa Lucía Cotzumalguapa", "Puerto Barrios", "Jalapa", "Retalhuleu", "Sololá", "San Marcos", "Mazatenango",
      "Tikal", "Lake Atitlán", "Antigua", "Semuc Champey", "Chichicastenango", "Flores", "Pacaya Volcano", "Livingston", "Río Dulce", "El Mirador"
    ])
  },
  {
    name: "Honduras",
    code: "hn",
    slug: "hn",
    flag: "🇭🇳",
    region: "Central America",
    continent: "North America",
    cities: createCities([
      "Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba", "El Progreso", "Comayagua", "Choluteca", "Villanueva", "Danlí", "Juticalpa",
      "Puerto Cortés", "Tela", "Catacamas", "Olanchito", "Santa Rosa de Copán", "Tocoa", "Siguatepeque", "Yoro", "Cofradía", "Nacaome",
      "Copán Ruins", "Roatán", "Utila", "Cayos Cochinos", "Pico Bonito", "La Tigra", "Lago de Yojoa", "Omoa", "Gracias", "Río Plátano"
    ])
  },
  {
    name: "El Salvador",
    code: "sv",
    slug: "sv",
    flag: "🇸🇻",
    region: "Central America",
    continent: "North America",
    cities: createCities([
      "San Salvador", "Santa Ana", "San Miguel", "Mejicanos", "Soyapango", "Apopa", "Santa Tecla", "Delgado", "Ilopango", "Usulután",
      "Ahuachapán", "Chalatenango", "Cojutepeque", "Zacatecoluca", "San Vicente", "Sensuntepeque", "San Francisco Gotera", "La Unión", "Antiguo Cuscatlán", "Nejapa",
      "El Tunco", "Joya de Cerén", "San Andrés", "Tazumal", "Ruta de las Flores", "Lake Coatepeque", "Santa Ana Volcano", "El Boquerón", "Suchitoto", "El Imposible"
    ])
  },
  {
    name: "Nicaragua",
    code: "ni",
    slug: "ni",
    flag: "🇳🇮",
    region: "Central America",
    continent: "North America",
    cities: createCities([
      "Managua", "León", "Masaya", "Matagalpa", "Chinandega", "Estelí", "Granada", "Tipitapa", "Ciudad Sandino", "Jinotega",
      "Juigalpa", "Bluefields", "Rivas", "Nueva Guinea", "Diriamba", "Jinotepe", "Ocotal", "Somoto", "Boaco", "Chichigalpa",
      "Granada Colonial", "León Cathedral", "Ometepe Island", "San Juan del Sur", "Masaya Volcano", "Corn Islands", "Mombacho", "Apoyo Lagoon", "Indio Maíz", "Bosawás"
    ])
  },
  {
    name: "Bolivia",
    code: "bo",
    slug: "bo",
    flag: "🇧🇴",
    region: "South America",
    continent: "South America",
    cities: createCities([
      "Santa Cruz", "La Paz", "El Alto", "Cochabamba", "Oruro", "Sucre", "Tarija", "Potosí", "Sacaba", "Quillacollo",
      "Montero", "Trinidad", "Riberalta", "Yacuiba", "Warnes", "Cobija", "Colcapirhua", "Viacha", "Tiquipaya", "Bermejo",
      "Salar de Uyuni", "Lake Titicaca", "Tiwanaku", "Death Road", "Amazon Jungle", "Madidi", "Noel Kempff", "Cerro Rico", "Isla del Sol", "Yungas Road"
    ])
  },
  {
    name: "Paraguay",
    code: "py",
    slug: "py",
    flag: "🇵🇾",
    region: "South America",
    continent: "South America",
    cities: createCities([
      "Asunción", "Ciudad del Este", "San Lorenzo", "Luque", "Capiatá", "Lambaré", "Fernando de la Mora", "Limpio", "Ñemby", "Encarnación",
      "Mariano Roque Alonso", "Pedro Juan Caballero", "Villa Elisa", "Caaguazú", "Coronel Oviedo", "Presidente Franco", "Itauguá", "Villarrica", "Caacupé", "Concepción",
      "Jesuit Missions", "Itaipu Dam", "Ñeembucú Wetlands", "Cerro Corá", "Ybycuí", "San Bernardino", "Areguá", "Ypacaraí Lake", "Chaco", "Defensores del Chaco"
    ])
  },
  {
    name: "Uruguay",
    code: "uy",
    slug: "uy",
    flag: "🇺🇾",
    region: "South America",
    continent: "South America",
    cities: createCities([
      "Montevideo", "Salto", "Paysandú", "Las Piedras", "Rivera", "Maldonado", "Tacuarembó", "Melo", "Mercedes", "Artigas",
      "Minas", "San José de Mayo", "Durazno", "Florida", "Treinta y Tres", "Rocha", "Trinidad", "Carmelo", "Colonia del Sacramento", "Fray Bentos",
      "Punta del Este", "Colonia del Sacramento", "Cabo Polonio", "Punta del Diablo", "José Ignacio", "Carmelo Wine Country", "Piriápolis", "La Paloma", "Santa Teresa", "Quebrada de los Cuervos"
    ])
  },
  {
    name: "Barbados",
    code: "bb",
    slug: "bb",
    flag: "🇧🇧",
    region: "Caribbean",
    continent: "North America",
    cities: createCities([
      "Bridgetown", "Speightstown", "Oistins", "Bathsheba", "Holetown", "Crane", "Hastings", "Worthing", "Rockley", "St. Lawrence Gap",
      "Paynes Bay", "Mullins", "Six Men's", "Bottom Bay", "Cattlewash", "Martin's Bay", "Barclays Park", "Welchman Hall", "Cherry Tree Hill", "Farley Hill",
      "Harrison's Cave", "Animal Flower Cave", "Barbados Wildlife Reserve", "St. Nicholas Abbey", "Hunte's Gardens", "Andromeda Gardens", "Gun Hill Signal Station", "George Washington House", "Carlisle Bay", "Sunbury Plantation"
    ])
  },
  {
    name: "Bahamas",
    code: "bs",
    slug: "bs",
    flag: "🇧🇸",
    region: "Caribbean",
    continent: "North America",
    cities: createCities([
      "Nassau", "Freeport", "West End", "Coopers Town", "Marsh Harbour", "Freetown", "High Rock", "Andros Town", "Spanish Wells", "Clarence Town",
      "George Town", "Dunmore Town", "Alice Town", "Matthew Town", "Rock Sound", "Governor's Harbour", "Arthur's Town", "Cockburn Town", "Colonel Hill", "Port Nelson",
      "Paradise Island", "Atlantis", "Exuma Cays", "Swimming Pigs", "Pig Beach", "Thunderball Grotto", "Dean's Blue Hole", "Pink Sands Beach", "Glass Window Bridge", "Andros Barrier Reef"
    ])
  },
];

// Helper function to get all countries
export function getAllCountries(): Country[] {
  return countries;
}

// Helper function to get country by code
export function getCountryByCode(code: string): Country | undefined {
  return countries.find(c => c.code.toLowerCase() === code.toLowerCase() || c.slug.toLowerCase() === code.toLowerCase());
}

// Helper function to get country by slug
export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}

// Helper function to get cities by country code
export function getCitiesByCountryCode(countryCode: string): City[] {
  const country = getCountryByCode(countryCode);
  return country?.cities || [];
}

// Helper function to get all city slugs for a country
export function getCitySlugs(countryCode: string): string[] {
  const cities = getCitiesByCountryCode(countryCode);
  return cities.map(city => city.slug);
}

// Helper function for semantic grouping by continent
export function getCountriesByContinent(continent: string): Country[] {
  return countries.filter(c => c.continent?.toLowerCase() === continent.toLowerCase());
}

// Helper function for semantic grouping by region
export function getCountriesByRegion(region: string): Country[] {
  return countries.filter(c => c.region?.toLowerCase() === region.toLowerCase());
}

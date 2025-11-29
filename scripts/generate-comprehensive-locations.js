const fs = require('fs');
const path = require('path');

// Helper to create city slug
function createSlug(name) {
  return name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/'/g, '');
}

// Helper to create city with areas
function createCity(name, customAreas = null) {
  const areas = customAreas || [
    'Downtown', 'City Center', 'Business District', 'Old Town', 'Suburbs',
    'North Side', 'South Side', 'East End', 'West End', 'Waterfront'
  ];
  
  return {
    name,
    slug: createSlug(name),
    areas: areas.map(area => ({
      name: area,
      slug: createSlug(area)
    }))
  };
}

// Major cities for different countries (50+ cities each)
const countryCities = {
  'United States': [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
    'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington',
    'Boston', 'El Paso', 'Nashville', 'Detroit', 'Oklahoma City', 'Portland', 'Las Vegas', 'Memphis', 'Louisville', 'Baltimore',
    'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Kansas City', 'Mesa', 'Atlanta', 'Omaha', 'Raleigh',
    'Miami', 'Long Beach', 'Virginia Beach', 'Oakland', 'Minneapolis', 'Tulsa', 'Tampa', 'New Orleans', 'Cleveland', 'Wichita',
    'Arlington', 'Bakersfield', 'Aurora', 'Anaheim', 'Santa Ana', 'St. Louis', 'Corpus Christi', 'Riverside', 'Lexington', 'Pittsburgh'
  ],
  'Pakistan': [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala',
    'Hyderabad', 'Sargodha', 'Bahawalpur', 'Sukkur', 'Larkana', 'Sheikhupura', 'Rahim Yar Khan', 'Jhang', 'Dera Ghazi Khan', 'Gujrat',
    'Kasur', 'Mardan', 'Mingora', 'Nawabshah', 'Chiniot', 'Kotri', 'Khanpur', 'Hafizabad', 'Kohat', 'Jacobabad',
    'Shikarpur', 'Muzaffargarh', 'Khanewal', 'Gojra', 'Bahawalnagar', 'Abbottabad', 'Muridke', 'Pakpattan', 'Chakwal', 'Gujranwala',
    'Sadiqabad', 'Sahiwal', 'Okara', 'Turbat', 'Dera Ismail Khan', 'Chaman', 'Zhob', 'Mehrabpur', 'Parachinar', 'Gwadar',
    'Nowshera', 'Charsadda', 'Jamshoro', 'Pattoki', 'Mandi Bahauddin', 'Hassan Abdal', 'Muzaffarabad', 'Mirpur', 'Gilgit', 'Skardu'
  ],
  'India': [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur',
    'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad',
    'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi', 'Srinagar', 'Amritsar', 'Noida',
    'Ranchi', 'Howrah', 'Jabalpur', 'Gwalior', 'Coimbatore', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 'Kota',
    'Guwahati', 'Chandigarh', 'Solapur', 'Hubli', 'Tiruchirappalli', 'Bareilly', 'Moradabad', 'Mysore', 'Gurgaon', 'Aligarh',
    'Jalandhar', 'Bhubaneswar', 'Salem', 'Warangal', 'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur', 'Bikaner', 'Amravati'
  ],
  'United Kingdom': [
    'London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Edinburgh', 'Bristol', 'Newcastle', 'Sheffield',
    'Cardiff', 'Leicester', 'Coventry', 'Belfast', 'Nottingham', 'Kingston upon Hull', 'Plymouth', 'Stoke-on-Trent', 'Wolverhampton', 'Derby',
    'Southampton', 'Portsmouth', 'Reading', 'Northampton', 'Luton', 'Bolton', 'Bournemouth', 'Norwich', 'Swindon', 'Ipswich',
    'Middlesbrough', 'Peterborough', 'Cambridge', 'Oxford', 'Brighton', 'Exeter', 'Gloucester', 'Bath', 'York', 'Durham',
    'Canterbury', 'Lincoln', 'Hereford', 'Worcester', 'Ely', 'Ripon', 'Truro', 'Wells', 'Salisbury', 'Winchester',
    'Carlisle', 'Lancaster', 'Chester', 'Shrewsbury', 'Lichfield', 'Wells', 'St. Albans', 'Chichester', 'Rochester', 'Guildford'
  ],
  'Canada': [
    'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Halifax',
    'London', 'Victoria', 'Windsor', 'Oshawa', 'Saskatoon', 'Regina', 'Kitchener', 'St. Catharines', 'Sudbury', 'Barrie',
    'Abbotsford', 'Sherbrooke', 'Guelph', 'Cambridge', 'Coquitlam', 'Saanich', 'Saguenay', 'Laval', 'Longueuil', 'Burnaby',
    'Richmond', 'Surrey', 'Markham', 'Mississauga', 'Brampton', 'Oakville', 'Burlington', 'Thunder Bay', 'St. John\'s', 'Moncton',
    'Fredericton', 'Charlottetown', 'Yellowknife', 'Whitehorse', 'Iqaluit', 'Red Deer', 'Lethbridge', 'Kamloops', 'Nanaimo', 'Prince George',
    'Kelowna', 'Chilliwack', 'Penticton', 'Vernon', 'Courtenay', 'Campbell River', 'Duncan', 'Port Alberni', 'Powell River', 'Terrace'
  ],
  'Australia': [
    'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Sunshine Coast', 'Wollongong',
    'Hobart', 'Geelong', 'Townsville', 'Cairns', 'Toowoomba', 'Darwin', 'Ballarat', 'Bendigo', 'Albury', 'Launceston',
    'Mackay', 'Rockhampton', 'Bunbury', 'Bundaberg', 'Coffs Harbour', 'Wagga Wagga', 'Hervey Bay', 'Port Macquarie', 'Shepparton', 'Gladstone',
    'Mildura', 'Tamworth', 'Traralgon', 'Orange', 'Geraldton', 'Dubbo', 'Nowra', 'Bathurst', 'Lismore', 'Kalgoorlie',
    'Broome', 'Alice Springs', 'Mount Isa', 'Whyalla', 'Mount Gambier', 'Warrnambool', 'Port Lincoln', 'Broken Hill', 'Ceduna', 'Karratha',
    'Newman', 'Kununurra', 'Esperance', 'Carnarvon', 'Exmouth', 'Port Hedland', 'Tom Price', 'Paraburdoo', 'Onslow', 'Derby'
  ],
  'Germany': [
    'Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig',
    'Bremen', 'Dresden', 'Hannover', 'Nuremberg', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster',
    'Karlsruhe', 'Mannheim', 'Augsburg', 'Wiesbaden', 'Gelsenkirchen', 'Mönchengladbach', 'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen',
    'Halle', 'Magdeburg', 'Freiburg', 'Krefeld', 'Lübeck', 'Oberhausen', 'Erfurt', 'Mainz', 'Rostock', 'Kassel',
    'Hagen', 'Hamm', 'Saarbrücken', 'Mülheim', 'Potsdam', 'Ludwigshafen', 'Oldenburg', 'Leverkusen', 'Osnabrück', 'Solingen',
    'Heidelberg', 'Herne', 'Neuss', 'Darmstadt', 'Paderborn', 'Regensburg', 'Ingolstadt', 'Würzburg', 'Fürth', 'Wolfsburg'
  ],
  'France': [
    'Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille',
    'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Grenoble', 'Dijon', 'Angers', 'Nîmes', 'Villeurbanne',
    'Saint-Denis', 'Le Mans', 'Aix-en-Provence', 'Clermont-Ferrand', 'Brest', 'Limoges', 'Tours', 'Amiens', 'Perpignan', 'Metz',
    'Besançon', 'Boulogne-Billancourt', 'Orléans', 'Mulhouse', 'Caen', 'Rouen', 'Nancy', 'Saint-Denis', 'Argenteuil', 'Montreuil',
    'Roubaix', 'Tourcoing', 'Nanterre', 'Avignon', 'Créteil', 'Dunkirk', 'Poitiers', 'Asnières-sur-Seine', 'Versailles', 'Courbevoie',
    'Vitry-sur-Seine', 'Colombes', 'Aulnay-sous-Bois', 'La Rochelle', 'Bourges', 'Chartres', 'Blois', 'Évreux', 'Alençon', 'Cherbourg'
  ],
  'Italy': [
    'Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari', 'Catania',
    'Venice', 'Verona', 'Messina', 'Padua', 'Trieste', 'Brescia', 'Parma', 'Taranto', 'Prato', 'Modena',
    'Reggio Calabria', 'Reggio Emilia', 'Perugia', 'Livorno', 'Ravenna', 'Cagliari', 'Foggia', 'Rimini', 'Salerno', 'Ferrara',
    'Sassari', 'Latina', 'Giugliano', 'Monza', 'Syracuse', 'Pescara', 'Bergamo', 'Forlì', 'Trento', 'Vicenza',
    'Terni', 'Bolzano', 'Novara', 'Piacenza', 'Ancona', 'Andria', 'Arezzo', 'Udine', 'Cesena', 'Lecce',
    'Pesaro', 'La Spezia', 'Como', 'Pisa', 'Brindisi', 'Treviso', 'Busto Arsizio', 'Varese', 'Alessandria', 'Cremona'
  ],
  'Spain': [
    'Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao',
    'Alicante', 'Córdoba', 'Valladolid', 'Vigo', 'Gijón', 'Hospitalet', 'Granada', 'Vitoria', 'A Coruña', 'Elche',
    'Santa Cruz', 'Oviedo', 'Móstoles', 'Cartagena', 'Terrassa', 'Jerez', 'Sabadell', 'Marbella', 'Mataró', 'Alcalá de Henares',
    'León', 'Cádiz', 'Badalona', 'Reus', 'Tarragona', 'Lleida', 'Marbella', 'Fuenlabrada', 'Leganés', 'Getafe',
    'Donostia', 'Burgos', 'Albacete', 'Santander', 'Castellón', 'Logroño', 'Badajoz', 'Salamanca', 'Huelva', 'Lorca',
    'Cáceres', 'Pamplona', 'Girona', 'Almería', 'León', 'Santiago', 'Ourense', 'Pontevedra', 'Lugo', 'Vitoria-Gasteiz'
  ],
  'Brazil': [
    'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre',
    'Belém', 'Goiânia', 'Guarulhos', 'Campinas', 'São Luís', 'São Gonçalo', 'Maceió', 'Duque de Caxias', 'Natal', 'Teresina',
    'Campo Grande', 'Nova Iguaçu', 'São Bernardo', 'João Pessoa', 'Santo André', 'Osasco', 'Jaboatão', 'São José', 'Ribeirão Preto', 'Uberlândia',
    'Sorocaba', 'Contagem', 'Aracaju', 'Feira de Santana', 'Cuiabá', 'Joinville', 'Aparecida', 'Londrina', 'Juiz de Fora', 'Ananindeua',
    'Porto Velho', 'Serra', 'Niterói', 'Caxias do Sul', 'Campos', 'Macapá', 'Vila Velha', 'Florianópolis', 'São João de Meriti', 'Diadema',
    'Campina Grande', 'Mauá', 'Carapicuíba', 'Olinda', 'Cariacica', 'Bauru', 'Vitória', 'Canoas', 'Petrolina', 'Caruaru'
  ],
  'Mexico': [
    'Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León', 'Juárez', 'Torreón', 'Querétaro', 'San Luis Potosí',
    'Mérida', 'Mexicali', 'Aguascalientes', 'Tlalnepantla', 'Chihuahua', 'Naucalpan', 'Cancún', 'Saltillo', 'Hermosillo', 'Morelia',
    'Reynosa', 'Tlaquepaque', 'Playa del Carmen', 'Culiacán', 'Villahermosa', 'Mazatlán', 'Irapuato', 'Matamoros', 'Pachuca', 'Veracruz',
    'Toluca', 'Xalapa', 'Tepic', 'Oaxaca', 'Campeche', 'Chilpancingo', 'Tuxtla Gutiérrez', 'Durango', 'Zacatecas', 'Colima',
    'Tlaxcala', 'La Paz', 'Chetumal', 'San Cristóbal', 'Tapachula', 'Villahermosa', 'Coatzacoalcos', 'Poza Rica', 'Tampico', 'Ciudad Victoria',
    'Monclova', 'Piedras Negras', 'Nuevo Laredo', 'Reynosa', 'Matamoros', 'Ciudad Juárez', 'Chihuahua', 'Durango', 'Mazatlán', 'Tepic'
  ],
  'China': [
    'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Hangzhou', 'Wuhan', 'Xi\'an', 'Nanjing', 'Tianjin',
    'Suzhou', 'Chongqing', 'Dongguan', 'Foshan', 'Jinan', 'Hefei', 'Dalian', 'Xiamen', 'Kunming', 'Zhengzhou',
    'Changsha', 'Shijiazhuang', 'Qingdao', 'Harbin', 'Fuzhou', 'Changchun', 'Wuxi', 'Ningbo', 'Nanchang', 'Taiyuan',
    'Shantou', 'Zhongshan', 'Guiyang', 'Lanzhou', 'Urumqi', 'Haikou', 'Hohhot', 'Yinchuan', 'Xining', 'Lhasa',
    'Baotou', 'Anshan', 'Tangshan', 'Handan', 'Jilin', 'Qiqihar', 'Daqing', 'Fushun', 'Luoyang', 'Xuzhou',
    'Wenzhou', 'Nantong', 'Yangzhou', 'Zhenjiang', 'Taizhou', 'Jiaxing', 'Huzhou', 'Shaoxing', 'Jinhua', 'Quzhou'
  ],
  'Japan': [
    'Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kawasaki', 'Kyoto', 'Saitama',
    'Hiroshima', 'Sendai', 'Chiba', 'Kitakyushu', 'Sakai', 'Niigata', 'Hamamatsu', 'Kumamoto', 'Sagamihara', 'Shizuoka',
    'Okayama', 'Kagoshima', 'Hachioji', 'Utsunomiya', 'Matsuyama', 'Kanazawa', 'Nagano', 'Toyama', 'Gifu', 'Fukushima',
    'Takamatsu', 'Tokushima', 'Kochi', 'Matsue', 'Tottori', 'Yamaguchi', 'Oita', 'Miyazaki', 'Kagoshima', 'Naha',
    'Asahikawa', 'Hakodate', 'Aomori', 'Akita', 'Yamagata', 'Fukushima', 'Mito', 'Utsunomiya', 'Maebashi', 'Saitama',
    'Chiba', 'Yokohama', 'Kawasaki', 'Sagamihara', 'Hachioji', 'Tachikawa', 'Musashino', 'Mitaka', 'Ome', 'Hino'
  ]
};

// Countries with flags
const countriesData = [
  { name: 'United States', code: 'us', slug: 'us', flag: '🇺🇸' },
  { name: 'Pakistan', code: 'pk', slug: 'pk', flag: '🇵🇰' },
  { name: 'India', code: 'in', slug: 'in', flag: '🇮🇳' },
  { name: 'United Kingdom', code: 'uk', slug: 'uk', flag: '🇬🇧' },
  { name: 'Canada', code: 'ca', slug: 'ca', flag: '🇨🇦' },
  { name: 'Australia', code: 'au', slug: 'au', flag: '🇦🇺' },
  { name: 'Germany', code: 'de', slug: 'de', flag: '🇩🇪' },
  { name: 'France', code: 'fr', slug: 'fr', flag: '🇫🇷' },
  { name: 'Italy', code: 'it', slug: 'it', flag: '🇮🇹' },
  { name: 'Spain', code: 'es', slug: 'es', flag: '🇪🇸' },
  { name: 'Brazil', code: 'br', slug: 'br', flag: '🇧🇷' },
  { name: 'Mexico', code: 'mx', slug: 'mx', flag: '🇲🇽' },
  { name: 'China', code: 'cn', slug: 'cn', flag: '🇨🇳' },
  { name: 'Japan', code: 'jp', slug: 'jp', flag: '🇯🇵' },
  { name: 'South Korea', code: 'kr', slug: 'kr', flag: '🇰🇷' },
  { name: 'Russia', code: 'ru', slug: 'ru', flag: '🇷🇺' },
  { name: 'Turkey', code: 'tr', slug: 'tr', flag: '🇹🇷' },
  { name: 'Indonesia', code: 'id', slug: 'id', flag: '🇮🇩' },
  { name: 'Saudi Arabia', code: 'sa', slug: 'sa', flag: '🇸🇦' },
  { name: 'United Arab Emirates', code: 'ae', slug: 'ae', flag: '🇦🇪' },
  { name: 'South Africa', code: 'za', slug: 'za', flag: '🇿🇦' },
  { name: 'Egypt', code: 'eg', slug: 'eg', flag: '🇪🇬' },
  { name: 'Nigeria', code: 'ng', slug: 'ng', flag: '🇳🇬' },
  { name: 'Argentina', code: 'ar', slug: 'ar', flag: '🇦🇷' },
  { name: 'Chile', code: 'cl', slug: 'cl', flag: '🇨🇱' },
  { name: 'Colombia', code: 'co', slug: 'co', flag: '🇨🇴' },
  { name: 'Peru', code: 'pe', slug: 'pe', flag: '🇵🇪' },
  { name: 'Netherlands', code: 'nl', slug: 'nl', flag: '🇳🇱' },
  { name: 'Belgium', code: 'be', slug: 'be', flag: '🇧🇪' },
  { name: 'Switzerland', code: 'ch', slug: 'ch', flag: '🇨🇭' },
  { name: 'Austria', code: 'at', slug: 'at', flag: '🇦🇹' },
  { name: 'Sweden', code: 'se', slug: 'se', flag: '🇸🇪' },
  { name: 'Norway', code: 'no', slug: 'no', flag: '🇳🇴' },
  { name: 'Denmark', code: 'dk', slug: 'dk', flag: '🇩🇰' },
  { name: 'Finland', code: 'fi', slug: 'fi', flag: '🇫🇮' },
  { name: 'Poland', code: 'pl', slug: 'pl', flag: '🇵🇱' },
  { name: 'Czech Republic', code: 'cz', slug: 'cz', flag: '🇨🇿' },
  { name: 'Greece', code: 'gr', slug: 'gr', flag: '🇬🇷' },
  { name: 'Portugal', code: 'pt', slug: 'pt', flag: '🇵🇹' },
  { name: 'Ireland', code: 'ie', slug: 'ie', flag: '🇮🇪' },
  { name: 'New Zealand', code: 'nz', slug: 'nz', flag: '🇳🇿' },
  { name: 'Bangladesh', code: 'bd', slug: 'bd', flag: '🇧🇩' },
  { name: 'Philippines', code: 'ph', slug: 'ph', flag: '🇵🇭' },
  { name: 'Vietnam', code: 'vn', slug: 'vn', flag: '🇻🇳' },
  { name: 'Thailand', code: 'th', slug: 'th', flag: '🇹🇭' },
  { name: 'Malaysia', code: 'my', slug: 'my', flag: '🇲🇾' },
  { name: 'Singapore', code: 'sg', slug: 'sg', flag: '🇸🇬' },
  { name: 'Israel', code: 'il', slug: 'il', flag: '🇮🇱' },
  { name: 'Iran', code: 'ir', slug: 'ir', flag: '🇮🇷' },
  { name: 'Iraq', code: 'iq', slug: 'iq', flag: '🇮🇶' },
  { name: 'Kuwait', code: 'kw', slug: 'kw', flag: '🇰🇼' },
  { name: 'Qatar', code: 'qa', slug: 'qa', flag: '🇶🇦' },
  { name: 'Oman', code: 'om', slug: 'om', flag: '🇴🇲' },
  { name: 'Jordan', code: 'jo', slug: 'jo', flag: '🇯🇴' },
  { name: 'Lebanon', code: 'lb', slug: 'lb', flag: '🇱🇧' },
  { name: 'Kenya', code: 'ke', slug: 'ke', flag: '🇰🇪' },
  { name: 'Ghana', code: 'gh', slug: 'gh', flag: '🇬🇭' },
  { name: 'Morocco', code: 'ma', slug: 'ma', flag: '🇲🇦' },
  { name: 'Algeria', code: 'dz', slug: 'dz', flag: '🇩🇿' },
  { name: 'Tunisia', code: 'tn', slug: 'tn', flag: '🇹🇳' },
  { name: 'Ethiopia', code: 'et', slug: 'et', flag: '🇪🇹' },
  { name: 'Tanzania', code: 'tz', slug: 'tz', flag: '🇹🇿' },
  { name: 'Uganda', code: 'ug', slug: 'ug', flag: '🇺🇬' },
  { name: 'Zimbabwe', code: 'zw', slug: 'zw', flag: '🇿🇼' },
  { name: 'Zambia', code: 'zm', slug: 'zm', flag: '🇿🇲' },
  { name: 'Botswana', code: 'bw', slug: 'bw', flag: '🇧🇼' },
  { name: 'Mozambique', code: 'mz', slug: 'mz', flag: '🇲🇿' },
  { name: 'Angola', code: 'ao', slug: 'ao', flag: '🇦🇴' },
  { name: 'Venezuela', code: 've', slug: 've', flag: '🇻🇪' },
  { name: 'Ecuador', code: 'ec', slug: 'ec', flag: '🇪🇨' },
  { name: 'Uruguay', code: 'uy', slug: 'uy', flag: '🇺🇾' },
  { name: 'Paraguay', code: 'py', slug: 'py', flag: '🇵🇾' },
  { name: 'Bolivia', code: 'bo', slug: 'bo', flag: '🇧🇴' },
  { name: 'Romania', code: 'ro', slug: 'ro', flag: '🇷🇴' },
  { name: 'Hungary', code: 'hu', slug: 'hu', flag: '🇭🇺' },
  { name: 'Bulgaria', code: 'bg', slug: 'bg', flag: '🇧🇬' },
  { name: 'Croatia', code: 'hr', slug: 'hr', flag: '🇭🇷' },
  { name: 'Serbia', code: 'rs', slug: 'rs', flag: '🇷🇸' },
  { name: 'Ukraine', code: 'ua', slug: 'ua', flag: '🇺🇦' },
  { name: 'Belarus', code: 'by', slug: 'by', flag: '🇧🇾' }
];

// Generate cities for countries that don't have predefined lists
function generateCitiesForCountry(countryName, count = 50) {
  const cities = [];
  const prefixes = ['North', 'South', 'East', 'West', 'New', 'Old', 'Upper', 'Lower', 'Central', 'Great'];
  const suffixes = ['City', 'Town', 'Port', 'Bay', 'Harbor', 'Valley', 'Hill', 'Springs', 'Beach', 'Park'];
  const baseNames = ['Green', 'Blue', 'Red', 'White', 'Black', 'Golden', 'Silver', 'Sunny', 'Bright', 'Clear'];
  
  for (let i = 0; i < count; i++) {
    const prefix = prefixes[i % prefixes.length];
    const base = baseNames[Math.floor(i / 10) % baseNames.length];
    const suffix = suffixes[Math.floor(i / 5) % suffixes.length];
    const cityName = i < 20 ? `${prefix} ${base}${suffix}` : `${base}${suffix} ${i + 1}`;
    cities.push(cityName);
  }
  
  return cities;
}

// Build the countries array
const countries = countriesData.map(country => {
  const cityList = countryCities[country.name] || generateCitiesForCountry(country.name, 50);
  return {
    ...country,
    cities: cityList.map(cityName => createCity(cityName))
  };
});

// Generate TypeScript file content
const fileContent = `export interface Area {
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
}

export const countries: Country[] = ${JSON.stringify(countries, null, 2)};
`;

// Write to file
const outputPath = path.join(__dirname, '../data/locations.ts');
fs.writeFileSync(outputPath, fileContent, 'utf8');

console.log(`✅ Generated locations.ts with ${countries.length} countries`);
console.log(`✅ Total cities: ${countries.reduce((sum, c) => sum + c.cities.length, 0)}`);


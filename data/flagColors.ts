// Official flag colors for each country
// Colors are in hex format for use in Tailwind CSS or inline styles

export interface FlagColors {
  primary: string;      // Main color(s) - can be gradient
  secondary: string;     // Secondary color(s)
  accent?: string;       // Accent color (if applicable)
  text: string;          // Text color for contrast on dark backgrounds
  textOnLight: string;   // Text color for contrast on light backgrounds
  gradient: string;      // Tailwind gradient classes
  gradientStyle?: string; // Inline style gradient
  heroText: string;      // Text color for hero section (ensures contrast)
  lightBg: string;       // Light background color for sections
  darkBg: string;       // Dark background color for sections
}

// Helper function to calculate relative luminance
function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0.5;
  
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Helper function to determine text color based on background
function getTextColor(backgroundColor: string): string {
  const luminance = getLuminance(backgroundColor);
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

// Helper function to get a darker version of a color for backgrounds
function darkenColor(hex: string, amount: number = 0.3): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  const r = Math.max(0, Math.floor(rgb.r * (1 - amount)));
  const g = Math.max(0, Math.floor(rgb.g * (1 - amount)));
  const b = Math.max(0, Math.floor(rgb.b * (1 - amount)));
  
  return `#${[r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
}

// Helper function to get a lighter version of a color for backgrounds
function lightenColor(hex: string, amount: number = 0.3): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  const r = Math.min(255, Math.floor(rgb.r + (255 - rgb.r) * amount));
  const g = Math.min(255, Math.floor(rgb.g + (255 - rgb.g) * amount));
  const b = Math.min(255, Math.floor(rgb.b + (255 - rgb.b) * amount));
  
  return `#${[r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
}

export const flagColors: Record<string, FlagColors> = {
  // Pakistan: Green and White - Official flag colors
  pk: {
    primary: '#01411C', // Pakistan Green (official)
    secondary: '#FFFFFF', // White
    accent: '#115740', // Complementary green
    text: '#FFFFFF',
    textOnLight: '#01411C',
    heroText: '#FFFFFF',
    lightBg: '#E8F5E9', // Soft green tint
    darkBg: '#0A2E14', // Deep forest green
    gradient: 'from-green-800 to-green-950',
    gradientStyle: 'linear-gradient(135deg, #01411C 0%, #0A2E14 50%, #052E16 100%)',
  },
  
  // United States: Red, White, and Blue - Old Glory colors
  us: {
    primary: '#B22234', // Old Glory Red
    secondary: '#FFFFFF', // White
    accent: '#3C3B6E', // Old Glory Blue
    text: '#FFFFFF',
    textOnLight: '#3C3B6E',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue-white tint
    darkBg: '#1E2A5E', // Deep navy
    gradient: 'from-blue-900 via-blue-800 to-red-700',
    gradientStyle: 'linear-gradient(135deg, #3C3B6E 0%, #1E2A5E 40%, #7B1E2D 100%)',
  },
  
  // India: Saffron, White, Green with Navy Blue (Ashoka Chakra)
  in: {
    primary: '#FF9933', // India Saffron
    secondary: '#FFFFFF', // White
    accent: '#138808', // India Green
    text: '#FFFFFF',
    textOnLight: '#B35900', // Deep saffron for readability
    heroText: '#FFFFFF',
    lightBg: '#FFF7ED', // Warm saffron tint
    darkBg: '#1A4D1A', // Deep green
    gradient: 'from-orange-500 via-orange-600 to-green-700',
    gradientStyle: 'linear-gradient(135deg, #FF9933 0%, #E67300 30%, #138808 100%)',
  },
  
  // United Kingdom: Red, White, and Blue (Union Jack)
  uk: {
    primary: '#012169', // Royal Blue
    secondary: '#FFFFFF', // White
    accent: '#C8102E', // Union Red
    text: '#FFFFFF',
    textOnLight: '#012169',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#00114D', // Deep royal blue
    gradient: 'from-blue-900 via-blue-800 to-red-700',
    gradientStyle: 'linear-gradient(135deg, #012169 0%, #00114D 60%, #8B0A1E 100%)',
  },
  
  // Canada: Red and White - Maple Leaf
  ca: {
    primary: '#FF0000', // Canadian Red
    secondary: '#FFFFFF', // White
    accent: '#C41E3A', // Deep red accent
    text: '#FFFFFF',
    textOnLight: '#C41E3A',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#8B0000', // Deep red
    gradient: 'from-red-600 via-red-700 to-red-900',
    gradientStyle: 'linear-gradient(135deg, #FF0000 0%, #C41E3A 50%, #8B0000 100%)',
  },
  
  // Australia: Blue, White, Red (Southern Cross)
  au: {
    primary: '#012169', // Australian Blue
    secondary: '#FFFFFF', // White
    accent: '#E4002B', // Australian Red
    text: '#FFFFFF',
    textOnLight: '#012169',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#000D3D', // Deep navy
    gradient: 'from-blue-900 via-blue-950 to-blue-800',
    gradientStyle: 'linear-gradient(135deg, #012169 0%, #000D3D 60%, #001A5E 100%)',
  },
  
  // Germany: Black, Red, and Gold
  de: {
    primary: '#000000', // Black
    secondary: '#DD0000', // Red
    accent: '#FFCC00', // Gold
    text: '#FFFFFF',
    textOnLight: '#1A1A1A',
    heroText: '#FFFFFF',
    lightBg: '#FFFBEB', // Soft gold tint
    darkBg: '#1A1A1A', // Near black
    gradient: 'from-gray-900 via-red-700 to-yellow-500',
    gradientStyle: 'linear-gradient(135deg, #000000 0%, #1A1A1A 40%, #DD0000 70%, #FFCC00 100%)',
  },
  
  // France: Blue, White, and Red (Tricolor)
  fr: {
    primary: '#002654', // French Blue
    secondary: '#FFFFFF', // White
    accent: '#ED2939', // French Red
    text: '#FFFFFF',
    textOnLight: '#002654',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#001538', // Deep blue
    gradient: 'from-blue-900 via-blue-800 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #002654 0%, #001538 50%, #B8222B 100%)',
  },
  
  // Italy: Green, White, and Red
  it: {
    primary: '#009246', // Italian Green
    secondary: '#FFFFFF', // White
    accent: '#CE2B37', // Italian Red
    text: '#FFFFFF',
    textOnLight: '#007339',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#005C2D', // Deep green
    gradient: 'from-green-600 via-green-700 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #009246 0%, #005C2D 50%, #A82130 100%)',
  },
  
  // Spain: Red and Yellow (Rojigualda)
  es: {
    primary: '#AA151B', // Spanish Red
    secondary: '#F1BF00', // Spanish Yellow
    accent: '#C8102E', // Deep red
    text: '#FFFFFF',
    textOnLight: '#AA151B',
    heroText: '#FFFFFF',
    lightBg: '#FFFBEB', // Soft yellow tint
    darkBg: '#7A0F14', // Deep crimson
    gradient: 'from-red-700 via-red-800 to-yellow-500',
    gradientStyle: 'linear-gradient(135deg, #AA151B 0%, #7A0F14 60%, #C9A800 100%)',
  },
  
  // Brazil: Green, Yellow, Blue
  br: {
    primary: '#009739', // Brazilian Green
    secondary: '#FEDD00', // Brazilian Yellow
    accent: '#012169', // Brazilian Blue
    text: '#FFFFFF',
    textOnLight: '#006B29',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#005222', // Deep green
    gradient: 'from-green-600 via-green-700 to-yellow-500',
    gradientStyle: 'linear-gradient(135deg, #009739 0%, #005222 50%, #CBAD00 100%)',
  },
  
  // Mexico: Green, White, and Red
  mx: {
    primary: '#006847', // Mexican Green
    secondary: '#FFFFFF', // White
    accent: '#CE1126', // Mexican Red
    text: '#FFFFFF',
    textOnLight: '#004D34',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#003D2A', // Deep green
    gradient: 'from-green-700 via-green-800 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #006847 0%, #003D2A 50%, #A50E1F 100%)',
  },
  
  // China: Red and Yellow
  cn: {
    primary: '#DE2910', // Chinese Red
    secondary: '#FFDE00', // Chinese Yellow
    accent: '#EE1C25', // Bright red
    text: '#FFFFFF',
    textOnLight: '#B8220D',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#9A1D0C', // Deep red
    gradient: 'from-red-600 via-red-700 to-yellow-500',
    gradientStyle: 'linear-gradient(135deg, #DE2910 0%, #9A1D0C 60%, #CBAD00 100%)',
  },
  
  // Japan: White and Red (Nisshōki)
  jp: {
    primary: '#BC002D', // Japanese Red
    secondary: '#FFFFFF', // White
    accent: '#8B0023', // Deep crimson
    text: '#FFFFFF',
    textOnLight: '#BC002D',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red-white tint
    darkBg: '#7A001E', // Deep crimson
    gradient: 'from-red-700 via-red-800 to-red-900',
    gradientStyle: 'linear-gradient(135deg, #BC002D 0%, #8B0023 50%, #5C0017 100%)',
  },
  
  // South Korea: White, Red, Blue, Black (Taegukgi)
  kr: {
    primary: '#CD2E3A', // Korean Red
    secondary: '#FFFFFF', // White
    accent: '#0047A0', // Korean Blue
    text: '#FFFFFF',
    textOnLight: '#003680',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue-white tint
    darkBg: '#002D66', // Deep blue
    gradient: 'from-blue-800 via-blue-900 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #0047A0 0%, #002D66 50%, #A3252F 100%)',
  },
  
  // Russia: White, Blue, and Red
  ru: {
    primary: '#0039A6', // Russian Blue
    secondary: '#FFFFFF', // White
    accent: '#D52B1E', // Russian Red
    text: '#FFFFFF',
    textOnLight: '#002D85',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#001F5C', // Deep blue
    gradient: 'from-blue-800 via-blue-900 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #0039A6 0%, #001F5C 60%, #A82218 100%)',
  },
  
  // Turkey: Red and White (Ay Yıldız)
  tr: {
    primary: '#E30A17', // Turkish Red
    secondary: '#FFFFFF', // White
    accent: '#C8102E', // Deep red
    text: '#FFFFFF',
    textOnLight: '#C8102E',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#990710', // Deep red
    gradient: 'from-red-600 via-red-700 to-red-900',
    gradientStyle: 'linear-gradient(135deg, #E30A17 0%, #B80812 50%, #7A050C 100%)',
  },
  
  // Indonesia: Red and White (Sang Saka Merah Putih)
  id: {
    primary: '#CE1126', // Indonesian Red
    secondary: '#FFFFFF', // White
    accent: '#A50E1F', // Deep red
    text: '#FFFFFF',
    textOnLight: '#A50E1F',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#8B0A19', // Deep red
    gradient: 'from-red-600 via-red-700 to-red-900',
    gradientStyle: 'linear-gradient(135deg, #CE1126 0%, #A50E1F 50%, #6B0912 100%)',
  },
  
  // Saudi Arabia: Green and White
  sa: {
    primary: '#006C35', // Saudi Green
    secondary: '#FFFFFF', // White
    accent: '#004D26', // Deep green
    text: '#FFFFFF',
    textOnLight: '#004D26',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#003D1D', // Deep green
    gradient: 'from-green-700 via-green-800 to-green-950',
    gradientStyle: 'linear-gradient(135deg, #006C35 0%, #004D26 50%, #002613 100%)',
  },
  
  // United Arab Emirates: Red, Green, White, Black
  ae: {
    primary: '#00732F', // UAE Green
    secondary: '#FFFFFF', // White
    accent: '#FF0000', // UAE Red
    text: '#FFFFFF',
    textOnLight: '#00521F',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#003D18', // Deep green
    gradient: 'from-green-700 via-green-800 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #00732F 0%, #003D18 50%, #CC0000 100%)',
  },
  
  // South Africa: Green, Yellow, Red, Blue, White, Black
  za: {
    primary: '#007A4D', // SA Green
    secondary: '#FFB612', // SA Gold
    accent: '#DE3831', // SA Red
    text: '#FFFFFF',
    textOnLight: '#005A39',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#004D30', // Deep green
    gradient: 'from-green-600 via-green-700 to-yellow-500',
    gradientStyle: 'linear-gradient(135deg, #007A4D 0%, #004D30 40%, #CC9200 80%, #B32D27 100%)',
  },
  
  // Egypt: Red, White, and Black
  eg: {
    primary: '#CE1126', // Egyptian Red
    secondary: '#FFFFFF', // White
    accent: '#000000', // Black
    text: '#FFFFFF',
    textOnLight: '#A50E1F',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#8B0A19', // Deep red
    gradient: 'from-red-700 via-red-800 to-gray-900',
    gradientStyle: 'linear-gradient(135deg, #CE1126 0%, #8B0A19 50%, #1A1A1A 100%)',
  },
  
  // Nigeria: Green and White
  ng: {
    primary: '#008751', // Nigerian Green
    secondary: '#FFFFFF', // White
    accent: '#006B40', // Deep green
    text: '#FFFFFF',
    textOnLight: '#005A36',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#004528', // Deep green
    gradient: 'from-green-600 via-green-700 to-green-900',
    gradientStyle: 'linear-gradient(135deg, #008751 0%, #005A36 50%, #003320 100%)',
  },
  
  // Argentina: Light Blue and White (Albiceleste)
  ar: {
    primary: '#74ACDF', // Argentina Blue
    secondary: '#FFFFFF', // White
    accent: '#5A93C8', // Deeper blue
    text: '#003366',
    textOnLight: '#2D5A8A',
    heroText: '#003366',
    lightBg: '#EEF6FF', // Soft blue tint
    darkBg: '#1E4A73', // Deep blue
    gradient: 'from-sky-400 via-sky-500 to-sky-700',
    gradientStyle: 'linear-gradient(135deg, #74ACDF 0%, #5A93C8 50%, #2D5A8A 100%)',
  },
  
  // Chile: Red, White, and Blue
  cl: {
    primary: '#0039A6', // Chilean Blue
    secondary: '#FFFFFF', // White
    accent: '#D52B1E', // Chilean Red
    text: '#FFFFFF',
    textOnLight: '#002D85',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#001F5C', // Deep blue
    gradient: 'from-blue-800 via-blue-900 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #0039A6 0%, #001F5C 60%, #A82218 100%)',
  },
  
  // Colombia: Yellow, Blue, and Red
  co: {
    primary: '#FCD116', // Colombian Yellow
    secondary: '#003893', // Colombian Blue
    accent: '#CE1126', // Colombian Red
    text: '#FFFFFF',
    textOnLight: '#002D75',
    heroText: '#1A1A1A',
    lightBg: '#FFFBEB', // Soft yellow tint
    darkBg: '#002260', // Deep blue
    gradient: 'from-yellow-400 via-blue-800 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #003893 0%, #002260 50%, #A50E1F 100%)',
  },
  
  // Netherlands: Red, White, and Blue (Prinsenvlag colors)
  nl: {
    primary: '#AE1C28', // Dutch Red
    secondary: '#FFFFFF', // White
    accent: '#21468B', // Dutch Blue
    text: '#FFFFFF',
    textOnLight: '#1A3570',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#152952', // Deep blue
    gradient: 'from-red-700 via-red-800 to-blue-800',
    gradientStyle: 'linear-gradient(135deg, #AE1C28 0%, #8A161F 40%, #21468B 100%)',
  },
  
  // Belgium: Black, Yellow, and Red
  be: {
    primary: '#000000', // Black
    secondary: '#FDDA24', // Belgian Yellow
    accent: '#EF3340', // Belgian Red
    text: '#FFFFFF',
    textOnLight: '#1A1A1A',
    heroText: '#FFFFFF',
    lightBg: '#FFFBEB', // Soft yellow tint
    darkBg: '#1A1A1A', // Near black
    gradient: 'from-gray-900 via-yellow-500 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #000000 0%, #1A1A1A 40%, #C9A800 70%, #C82A35 100%)',
  },
  
  // Switzerland: Red and White
  ch: {
    primary: '#FF0000', // Swiss Red
    secondary: '#FFFFFF', // White
    accent: '#CC0000', // Deep red
    text: '#FFFFFF',
    textOnLight: '#CC0000',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#990000', // Deep red
    gradient: 'from-red-600 via-red-700 to-red-900',
    gradientStyle: 'linear-gradient(135deg, #FF0000 0%, #CC0000 50%, #800000 100%)',
  },
  
  // Austria: Red and White
  at: {
    primary: '#ED2939', // Austrian Red
    secondary: '#FFFFFF', // White
    accent: '#C8102E', // Deep red
    text: '#FFFFFF',
    textOnLight: '#C8102E',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#990019', // Deep red
    gradient: 'from-red-600 via-red-700 to-red-900',
    gradientStyle: 'linear-gradient(135deg, #ED2939 0%, #C8102E 50%, #800019 100%)',
  },
  
  // Sweden: Blue and Yellow
  se: {
    primary: '#006AA7', // Swedish Blue
    secondary: '#FECC00', // Swedish Yellow
    accent: '#004F82', // Deep blue
    text: '#FFFFFF',
    textOnLight: '#004F82',
    heroText: '#FFFFFF',
    lightBg: '#EEF6FF', // Soft blue tint
    darkBg: '#003A61', // Deep blue
    gradient: 'from-blue-600 via-blue-700 to-yellow-500',
    gradientStyle: 'linear-gradient(135deg, #006AA7 0%, #003A61 60%, #C9A300 100%)',
  },
  
  // Norway: Red, White, and Blue
  no: {
    primary: '#BA0C2F', // Norwegian Red
    secondary: '#FFFFFF', // White
    accent: '#00205B', // Norwegian Blue
    text: '#FFFFFF',
    textOnLight: '#001540',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#001030', // Deep blue
    gradient: 'from-red-700 via-red-800 to-blue-900',
    gradientStyle: 'linear-gradient(135deg, #BA0C2F 0%, #8A0923 40%, #00205B 100%)',
  },
  
  // Denmark: Red and White (Dannebrog)
  dk: {
    primary: '#C8102E', // Danish Red
    secondary: '#FFFFFF', // White
    accent: '#990019', // Deep red
    text: '#FFFFFF',
    textOnLight: '#990019',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#800014', // Deep red
    gradient: 'from-red-600 via-red-700 to-red-900',
    gradientStyle: 'linear-gradient(135deg, #C8102E 0%, #990019 50%, #66000F 100%)',
  },
  
  // Finland: Blue and White
  fi: {
    primary: '#003580', // Finnish Blue
    secondary: '#FFFFFF', // White
    accent: '#002760', // Deep blue
    text: '#FFFFFF',
    textOnLight: '#002760',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#001940', // Deep blue
    gradient: 'from-blue-700 via-blue-800 to-blue-950',
    gradientStyle: 'linear-gradient(135deg, #003580 0%, #002760 50%, #001533 100%)',
  },
  
  // Poland: White and Red
  pl: {
    primary: '#DC143C', // Polish Red
    secondary: '#FFFFFF', // White
    accent: '#B01030', // Deep crimson
    text: '#FFFFFF',
    textOnLight: '#B01030',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#8A0C26', // Deep crimson
    gradient: 'from-red-600 via-red-700 to-red-900',
    gradientStyle: 'linear-gradient(135deg, #DC143C 0%, #B01030 50%, #6B0A1E 100%)',
  },
  
  // Greece: Blue and White
  gr: {
    primary: '#0D5EAF', // Greek Blue
    secondary: '#FFFFFF', // White
    accent: '#094A8C', // Deep blue
    text: '#FFFFFF',
    textOnLight: '#094A8C',
    heroText: '#FFFFFF',
    lightBg: '#EEF6FF', // Soft blue tint
    darkBg: '#063668', // Deep blue
    gradient: 'from-blue-600 via-blue-700 to-blue-900',
    gradientStyle: 'linear-gradient(135deg, #0D5EAF 0%, #094A8C 50%, #042244 100%)',
  },
  
  // Portugal: Green and Red
  pt: {
    primary: '#006600', // Portuguese Green
    secondary: '#FF0000', // Portuguese Red
    accent: '#004D00', // Deep green
    text: '#FFFFFF',
    textOnLight: '#004D00',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#003300', // Deep green
    gradient: 'from-green-700 via-green-800 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #006600 0%, #003300 50%, #CC0000 100%)',
  },
  
  // Ireland: Green, White, and Orange
  ie: {
    primary: '#169B62', // Irish Green
    secondary: '#FFFFFF', // White
    accent: '#FF883E', // Irish Orange
    text: '#FFFFFF',
    textOnLight: '#117A4E',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#0D5C3A', // Deep green
    gradient: 'from-green-600 via-green-700 to-orange-500',
    gradientStyle: 'linear-gradient(135deg, #169B62 0%, #0D5C3A 50%, #E67632 100%)',
  },
  
  // New Zealand: Blue, Red, and White
  nz: {
    primary: '#012169', // NZ Blue
    secondary: '#FFFFFF', // White
    accent: '#C8102E', // NZ Red
    text: '#FFFFFF',
    textOnLight: '#00114D',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#000D3D', // Deep navy
    gradient: 'from-blue-900 via-blue-950 to-red-700',
    gradientStyle: 'linear-gradient(135deg, #012169 0%, #000D3D 60%, #990019 100%)',
  },
  
  // Bangladesh: Green and Red
  bd: {
    primary: '#006A4E', // Bangladesh Green
    secondary: '#F42A41', // Bangladesh Red
    accent: '#00543E', // Deep green
    text: '#FFFFFF',
    textOnLight: '#00543E',
    heroText: '#FFFFFF',
    lightBg: '#ECFDF5', // Soft green tint
    darkBg: '#003D2D', // Deep green
    gradient: 'from-green-700 via-green-800 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #006A4E 0%, #003D2D 50%, #C22033 100%)',
  },
  
  // Philippines: Blue, Red, White, Yellow
  ph: {
    primary: '#0038A8', // Philippine Blue
    secondary: '#CE1126', // Philippine Red
    accent: '#FCD116', // Philippine Yellow
    text: '#FFFFFF',
    textOnLight: '#002D86',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#001F5C', // Deep blue
    gradient: 'from-blue-800 via-blue-900 to-red-600',
    gradientStyle: 'linear-gradient(135deg, #0038A8 0%, #001F5C 50%, #A50E1F 100%)',
  },
  
  // Vietnam: Red and Yellow
  vn: {
    primary: '#DA251D', // Vietnamese Red
    secondary: '#FFFF00', // Vietnamese Yellow
    accent: '#B01E18', // Deep red
    text: '#FFFFFF',
    textOnLight: '#B01E18',
    heroText: '#FFFFFF',
    lightBg: '#FEF2F2', // Soft red tint
    darkBg: '#8A1812', // Deep red
    gradient: 'from-red-600 via-red-700 to-yellow-400',
    gradientStyle: 'linear-gradient(135deg, #DA251D 0%, #8A1812 60%, #CCCC00 100%)',
  },
  
  // Thailand: Red, White, Blue
  th: {
    primary: '#A51931', // Thai Red
    secondary: '#FFFFFF', // White
    accent: '#2D2A4A', // Thai Blue
    text: '#FFFFFF',
    textOnLight: '#1F1D38',
    heroText: '#FFFFFF',
    lightBg: '#EEF2FF', // Soft blue tint
    darkBg: '#161428', // Deep purple-blue
    gradient: 'from-red-700 via-purple-900 to-blue-900',
    gradientStyle: 'linear-gradient(135deg, #A51931 0%, #2D2A4A 50%, #161428 100%)',
  },

  // --- Newly added countries (flag color fallbacks for recently added locations) ---
  my: createFlagColor('#012169', '#ED2939', '#FFD100'), // Malaysia
  sg: createFlagColor('#ED2939', '#FFFFFF', '#FFD100'), // Singapore
  lk: createFlagColor('#FFD100', '#8B0000', '#006400'), // Sri Lanka
  np: createFlagColor('#DC143C', '#FFFFFF', '#0033A0'), // Nepal
  mm: createFlagColor('#FBEC5D', '#34B233', '#D21034'), // Myanmar
  kh: createFlagColor('#002868', '#CE1126', '#FFFFFF'), // Cambodia
  la: createFlagColor('#002868', '#CE1126', '#FFFFFF'), // Laos
  mn: createFlagColor('#C4272F', '#0A3161', '#FFD700'), // Mongolia
  kz: createFlagColor('#00A3DE', '#FFDE00'), // Kazakhstan
  uz: createFlagColor('#1EB53A', '#0064B1', '#CE1126'), // Uzbekistan
  az: createFlagColor('#00A3E0', '#EF3340', '#3BAF42'), // Azerbaijan
  ge: createFlagColor('#FFFFFF', '#D7141A'), // Georgia
  am: createFlagColor('#D90012', '#0033A0', '#F2A800'), // Armenia
  tw: createFlagColor('#00247D', '#FF0000', '#FFFFFF'), // Taiwan
  hk: createFlagColor('#C8102E', '#FFFFFF'), // Hong Kong
  mo: createFlagColor('#006341', '#FFFFFF', '#FFD100'), // Macau

  ua: createFlagColor('#0057B7', '#FFD700'), // Ukraine
  cz: createFlagColor('#D7141A', '#11457E', '#FFFFFF'), // Czech Republic
  hu: createFlagColor('#CE1126', '#FFFFFF', '#00843D'), // Hungary
  ro: createFlagColor('#002B7F', '#FCD116', '#CE1126'), // Romania
  bg: createFlagColor('#00966E', '#FFFFFF', '#D62612'), // Bulgaria
  hr: createFlagColor('#FF0000', '#002B7F', '#FFFFFF'), // Croatia
  rs: createFlagColor('#C6363C', '#0B5EA6', '#FFCC00'), // Serbia
  sk: createFlagColor('#0B4094', '#FF0000', '#FFFFFF'), // Slovakia
  si: createFlagColor('#0B4EA2', '#FFFFFF', '#FF0000'), // Slovenia
  ba: createFlagColor('#00285E', '#FFD100', '#FFFFFF'), // Bosnia & Herzegovina
  mk: createFlagColor('#CD2A3E', '#FFD100'), // North Macedonia
  al: createFlagColor('#E41B17', '#000000'), // Albania
  me: createFlagColor('#C8102E', '#FFD100'), // Montenegro
  xk: createFlagColor('#273B7A', '#FFD100'), // Kosovo (XK)
  md: createFlagColor('#002B7F', '#FFD100', '#CE1126'), // Moldova
  by: createFlagColor('#E20B2C', '#006233'), // Belarus
  lt: createFlagColor('#FDB913', '#006A44', '#C1272D'), // Lithuania
  lv: createFlagColor('#9E0B0F', '#FFFFFF'), // Latvia
  ee: createFlagColor('#0072CE', '#000000', '#FFFFFF'), // Estonia
  is: createFlagColor('#003897', '#FFFFFF', '#D72828'), // Iceland
  lu: createFlagColor('#00A1DE', '#ED2939', '#FFFFFF'), // Luxembourg
  mt: createFlagColor('#FFFFFF', '#C8102E', '#FFD100'), // Malta
  cy: createFlagColor('#FFFFFF', '#FFB400', '#007849'), // Cyprus

  ke: createFlagColor('#000000', '#CE1126', '#007A3D'), // Kenya
  ma: createFlagColor('#C1272D', '#006233', '#FFD100'), // Morocco
  gh: createFlagColor('#FF0000', '#FCD116', '#006B3F'), // Ghana
  tz: createFlagColor('#007A33', '#000000', '#FDB913'), // Tanzania
  tn: createFlagColor('#E70013', '#FFFFFF'), // Tunisia
  dz: createFlagColor('#006233', '#FFFFFF', '#FF0000'), // Algeria
  et: createFlagColor('#078930', '#FCD116', '#CE1126'), // Ethiopia
  ug: createFlagColor('#000000', '#FF0000', '#FFD100'), // Uganda
  sn: createFlagColor('#00853F', '#FCD116', '#CE1126'), // Senegal
  ci: createFlagColor('#F77F00', '#FFFFFF', '#009E60'), // Ivory Coast (Côte d'Ivoire)
  cm: createFlagColor('#007A5E', '#FFCD00', '#D52B1E'), // Cameroon
  zw: createFlagColor('#006A4E', '#FFD100', '#CE1126'), // Zimbabwe
  zm: createFlagColor('#006E2E', '#FF7F00', '#000000'), // Zambia
  bw: createFlagColor('#0079C1', '#FFFFFF', '#000000'), // Botswana
  na: createFlagColor('#0077C8', '#D52B1E', '#FFCD00'), // Namibia
  mz: createFlagColor('#007A3D', '#FFCD00', '#CE1126'), // Mozambique
  rw: createFlagColor('#00A3DD', '#FFD100', '#14A046'), // Rwanda
  mu: createFlagColor('#0033A0', '#FF0000', '#FFD100'), // Mauritius
  mg: createFlagColor('#FF0000', '#FFFFFF', '#006B3F'), // Madagascar
  ly: createFlagColor('#000000', '#CE1126', '#007A3D'), // Libya
  sd: createFlagColor('#CE1126', '#000000', '#009639'), // Sudan
  ao: createFlagColor('#CE1126', '#000000', '#FFD100'), // Angola

  il: createFlagColor('#0038B8', '#FFFFFF'), // Israel
  jo: createFlagColor('#000000', '#FFFFFF', '#CE1126'), // Jordan
  kw: createFlagColor('#000000', '#007A3D', '#CE1126'), // Kuwait
  qa: createFlagColor('#8A1538', '#FFFFFF'), // Qatar
  bh: createFlagColor('#CE1126', '#FFFFFF'), // Bahrain
  om: createFlagColor('#CE1126', '#FFFFFF', '#007A3D'), // Oman
  ir: createFlagColor('#239F40', '#FFFFFF', '#DA0000'), // Iran
  iq: createFlagColor('#000000', '#FFFFFF', '#CE1126'), // Iraq
  ye: createFlagColor('#CE1126', '#FFFFFF', '#000000'), // Yemen
  lb: createFlagColor('#FFFFFF', '#CE1126', '#007A3D'), // Lebanon
  sy: createFlagColor('#CE1126', '#FFFFFF', '#000000'), // Syria
  ps: createFlagColor('#007A3D', '#CE1126', '#000000'), // Palestine

  pe: createFlagColor('#D91023', '#FFFFFF'), // Peru
  ve: createFlagColor('#FCD116', '#00247D', '#CE1126'), // Venezuela
  ec: createFlagColor('#FCD116', '#0033A0', '#CE1126'), // Ecuador
  pa: createFlagColor('#FFFFFF', '#CE1126', '#0033A0'), // Panama
  cr: createFlagColor('#002B7F', '#CE1126', '#FFFFFF'), // Costa Rica
  cu: createFlagColor('#002A8F', '#CE1126', '#FFFFFF'), // Cuba
  jm: createFlagColor('#009B3A', '#FFCD00', '#000000'), // Jamaica
  do: createFlagColor('#CE1126', '#002A8F', '#FFFFFF'), // Dominican Republic
  pr: createFlagColor('#002A8F', '#CE1126', '#FFFFFF'), // Puerto Rico
  ht: createFlagColor('#002664', '#CE1126', '#FFFFFF'), // Haiti
  tt: createFlagColor('#CE1126', '#000000', '#FFFFFF'), // Trinidad & Tobago
  gt: createFlagColor('#3C92D6', '#FFFFFF'), // Guatemala
  hn: createFlagColor('#0073CF', '#FFFFFF'), // Honduras
  sv: createFlagColor('#0073CF', '#FFFFFF'), // El Salvador
  ni: createFlagColor('#0093D0', '#FFFFFF'), // Nicaragua
  bo: createFlagColor('#CE1126', '#FFD100', '#00843D'), // Bolivia
  py: createFlagColor('#00247D', '#D52B1E', '#FFD100'), // Paraguay
  uy: createFlagColor('#0038A8', '#FFFFFF', '#FFD100'), // Uruguay
  bb: createFlagColor('#009DDC', '#FFD100', '#000000'), // Barbados
  bs: createFlagColor('#00A3E0', '#FFD100', '#000000'), // Bahamas
};

// Helper function to create flag colors with proper contrast
function createFlagColor(
  primary: string,
  secondary: string,
  accent?: string,
  customText?: string,
  customTextOnLight?: string
): FlagColors {
  const primaryLum = getLuminance(primary);
  const secondaryLum = getLuminance(secondary);
  
  // Determine text colors based on luminance
  const text = customText || (primaryLum < 0.5 ? '#FFFFFF' : '#000000');
  const textOnLight = customTextOnLight || (primaryLum < 0.5 ? primary : '#1F2937');
  const heroText = primaryLum < 0.5 ? '#FFFFFF' : '#000000';
  
  // Create backgrounds
  const lightBg = lightenColor(primaryLum < 0.5 ? primary : secondary, 0.9);
  const darkBg = darkenColor(primaryLum < 0.5 ? primary : (accent || primary), 0.2);
  
  // Create gradient - use darker version for better contrast
  const gradientStart = primaryLum < 0.5 ? primary : darkBg;
  const gradientEnd = accent ? (getLuminance(accent) < 0.5 ? accent : darkBg) : darkBg;
  const gradientStyle = accent 
    ? `linear-gradient(to bottom right, ${gradientStart}, ${gradientEnd})`
    : `linear-gradient(to bottom right, ${gradientStart}, ${darkBg})`;
  
  return {
    primary,
    secondary,
    accent,
    text,
    textOnLight,
    heroText,
    lightBg,
    darkBg,
    gradient: `from-${primaryLum < 0.5 ? 'blue' : 'slate'}-600 to-${primaryLum < 0.5 ? 'blue' : 'slate'}-800`,
    gradientStyle,
  };
}

// Default colors if country not found
export const defaultFlagColors: FlagColors = createFlagColor('#1E40AF', '#3B82F6');

// Helper function to get flag colors for a country
export function getFlagColors(countryCode: string): FlagColors {
  return flagColors[countryCode.toLowerCase()] || defaultFlagColors;
}



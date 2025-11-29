// Helper function to create a city with default areas
export function createCity(name: string, areas?: string[]): { name: string; slug: string; areas: { name: string; slug: string }[] } {
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const defaultAreas = areas || ['Downtown', 'City Center', 'Business District', 'Old Town', 'Suburbs'];
  
  return {
    name,
    slug,
    areas: defaultAreas.map(area => ({
      name: area,
      slug: area.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    }))
  };
}

// Helper function to create multiple cities from an array of names
export function createCities(cityNames: string[]): ReturnType<typeof createCity>[] {
  return cityNames.map(name => createCity(name));
}






















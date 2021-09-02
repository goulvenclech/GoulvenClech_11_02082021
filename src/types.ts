/**
 * Check if the housings objects are valid
 * @interface Housing
 */
 export interface Housing {
    id: string,
    title: string,
    cover: string, 
    pictures: string[], 
    description: string, 
    host: { name: string, picture: string, }, 
    rating: string, 
    location: string, 
    equipments: string[], 
    tags: string[],
  }
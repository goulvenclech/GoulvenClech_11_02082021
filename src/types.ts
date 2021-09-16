/**
 * Check if the housings objects are valid
 * @interface Housing
 */
 export interface Housing {
  id: string, // 8 hexadecimal digits
  title: string, 
  cover: string, 
  pictures: string[], 
  description: string, 
  host: { name: string, picture: string, }, 
  rating: string, // a number on a 5 scale 
  location: string, 
  equipments: string[], 
  tags: string[],
}
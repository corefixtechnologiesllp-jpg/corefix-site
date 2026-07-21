export interface Category {

  id:string;

  name:string;

  slug:string;

  image:string;

  description:string;

  showOnHome:boolean;

  homeStyle:"grid" | "slider";

}
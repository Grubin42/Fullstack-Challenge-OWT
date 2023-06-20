export default class Boat {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    name: string;
    description: string;
    picture: string;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        id: number,
        name: string,
        description: string,
        picture: string,
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
        this.id = id;
        this.name = name;
        this.description = description;
        this.picture = picture;
    }
   }
import { heroes } from "../data/heroes";


export const getHeroesByName = ( name = '' ) => {
    
    name = name.toLowerCase().trim();

    if ( name.length === 0 ) return [];

    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) )
    // si no se encuentran coincidencias el filter retorna un array vacio
}
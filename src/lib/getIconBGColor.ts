const iconColours = {
    normal: '#A0A29F',
    fire: '#FBA54C',
    water: '#539DDF',
    electric: '#F2D94E',
    grass: '#5FBD58',
    ice: '#75D0C1',
    fighting: '#D3425F',
    poison: '#A33EA1',
    ground: '#DA7C4D',
    flying: '#A1BBEC',
    psychic: '#FA8581',
    bug: '#92BC2C',
    rock: '#C9BB8A',
    ghost: '#5F6DBC',
    dragon: '#0C69C8',
    dark: '#595761',
    steel: '#5695A3',
    fairy: '#EE90E6',
  }
  
  export default function getBGColor(type: keyof typeof iconColours) {
    return iconColours[type]
  }
  
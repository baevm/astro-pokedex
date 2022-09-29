export async function getPokemon(name: string | number | undefined) {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  let fetchedPokemon
  let pokemon_data

  if (data.ok) {
    fetchedPokemon = await data.json()
    pokemon_data = {
      name: fetchedPokemon.name,
      id: fetchedPokemon.id,
      height: fetchedPokemon.height,
      weight: fetchedPokemon.weight,
      abilities: fetchedPokemon.abilities,
      stats: fetchedPokemon.stats,
      image: fetchedPokemon.sprites.other['official-artwork'].front_default,
      animated_image: fetchedPokemon.sprites.versions['generation-v']['black-white'].animated.front_default,
      type: fetchedPokemon.types[fetchedPokemon.types.length -1].type.name,
    }
  }

  return {
    pokemon_data,
    status: data.status,
  }
}

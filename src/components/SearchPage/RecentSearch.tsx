import { useEffect, useState } from 'react'
import { BiTime } from 'react-icons/bi/index.js'


interface Pokemon {
  name: string
  image: string
  id: number
}

const RecentSearch = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    let pokemonArr = localStorage.getItem('pokemonArr') as any
    pokemonArr = pokemonArr ? JSON.parse(pokemonArr) : []
    setPokemons(pokemonArr)
  }, [])



  return (
    <div className='relative w-full'>
      <div className='absolute top-16 flex w-full flex-col'>
        <div className='flex items-center'>
          <BiTime className='text-recent-search-color' size={24} />
          
          <h3 className='ml-2 font-extrabold text-recent-search-color'>Recent Searches</h3>
        </div>

        {pokemons ? (
          <div className='mt-8 flex w-full max-w-[820px] flex-row flex-wrap justify-center'>
            {pokemons.map((pokemon) => (
              <a
                key={pokemon.id}
                href={`/${pokemon.name}`}
                className='mr-[12px] mb-2 flex h-32 w-24 flex-col flex-wrap items-center rounded-lg border-2 border-border-color p-2 text-recent-search-color shadow-2xl'>
                <img src={pokemon.image} alt={pokemon.name} className='h-18 w-18' />
                <div>{pokemon.name}</div>
              </a>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default RecentSearch

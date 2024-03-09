import React, { useEffect, useState } from 'react'

export function Pokemon() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
           .then(response => response.json())
           .then(data => {
              const pokemons = data.results;
              setPokemonData(pokemons);
           })
           .catch(error => console.error('Error fetching Pokemon data:', error));
    }, []);
    
    return (
    <div className='Pokemon'>
      <h1>Pokemon Cards</h1>
      <div className="pokemon-container">
         {pokemonData.map(pokemon => (
            <div key={pokemon.name} className="pokemon-card">
                <img
                   className="pokemon-img"
                   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)}.png`} 
                   alt={pokemon.name}
                 />
                 <h2>{pokemon.name}</h2>
            </div>
         ))}
      </div>
    </div>
  );
}



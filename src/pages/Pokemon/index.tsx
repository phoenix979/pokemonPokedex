import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { getPokemon } from '../../services/pokemons.service';
import { Header, PokemonInfo, StatItem, StatsList } from './styles';

interface Pokemon {
  id: number;
  name: string;
  description?: string;
  height?: number;
  weight?: number;
  base_experience?: number;
  types?: Array<{ type: { name: string } }>;
  stats?: Array<{ stat: { name: string, base_stat: number }, base_stat: number }>;
}

interface PokemonParams {
  pokemon: string;
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { params } = useRouteMatch<PokemonParams>();

  const loadPokemon = async () => {
    const pokemon = await getPokemon(params.pokemon);
    setPokemon(pokemon);
  }

  useEffect(() => {
    loadPokemon();
  }, [params.pokemon]); // eslint-disable-line

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon - its the link that comes
  // from the api itself

  return(
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          back
        </Link>
      </Header>

      {pokemon && (
        <PokemonInfo>
          <header>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <div>
              <strong>{pokemon.name.toUpperCase()}</strong>
            </div>
          </header>
          <StatsList>
            {pokemon.stats ? pokemon.stats.map((statObj, i) => (
              <StatItem key={i}>
                <span>{statObj.stat.name}</span>
                <span>{statObj.base_stat}</span>
              </StatItem>
            )) : null}
          </StatsList>
        </PokemonInfo>
      )}
    </>
  );
}

export default Pokemon;

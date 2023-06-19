import React, { ChangeEvent, useEffect, useState } from 'react';
import { getAllPokemons } from '../../services/pokemons.service';
import GridPokemons from '../../components/GridPokemons';
import { CenteredInput, GridContainer } from './styles';


interface Pokemon {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [textTyped, setTextTyped] = useState('');
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState<Pokemon[]>([]);

  function filterByNamePrefix(prefix: string) {
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(prefix.toLowerCase()));
  }

  const loadAllPokemons = async () => {
    const pokemons = await getAllPokemons();
    setPokemons(pokemons);
    setPokemonsToDisplay(pokemons)
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      const prefixPokemons = filterByNamePrefix(textTyped)
      if (textTyped !== "") {
        setPokemonsToDisplay(prefixPokemons);
      } else {
        setPokemonsToDisplay(pokemons)
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [textTyped]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextTyped(event.target.value);
  };

  useEffect(() => {
    loadAllPokemons();
  }, []);

  return (
    <>
      <CenteredInput
        type="text"
        value={textTyped}
        onChange={handleInputChange}
        placeholder="pokemon name"
      />

      <GridContainer>
        <GridPokemons pokemons={pokemonsToDisplay} />
      </GridContainer>
    </>
  );
};

export default Home;
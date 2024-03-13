import { useEffect, useState } from "react";

const Card = ({ data, clicked }) => {
  const [pokemonCard, setPokemonCard] = useState("");

  useEffect(() => {
    const fetchPokemonCard = async () => {
      try {
        const pokemonURL = data.url;
        const response = await fetch(pokemonURL);
        const pokemonDetails = await response.json();
        setPokemonCard(pokemonDetails.sprites.front_default);
      } catch (error) {
        console.log("ERROR GETTING POKEMON IMAGE", error);
      }
    };
    fetchPokemonCard();
  }, [data]);

  return (
    <div onClick={() => clicked(pokemonCard)}>
      <div>
        <img src={pokemonCard} alt={data.name} />
      </div>
      <div className="name">
        <p>{data.name}</p>
      </div>
    </div>
  );
};

export default Card;

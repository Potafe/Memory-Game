import Card from "./Card";
import Score from "./Score";

const Game = ({ pokemon, score, hiScore, clicked }) => {
  return (
    <>
      <div>
        <Score score={score} hiScore={hiScore} />
        {pokemon.length > 0 ? (
          <div>
            {pokemon.slice(0, 20).map((pokemonData, index) => (
              <Card key={index} data={pokemonData} clicked={clicked}></Card>
            ))}
          </div>
        ) : (
          <p>No Pokemon Found Free</p>
        )}
      </div>
    </>
  );
};

export default Game;

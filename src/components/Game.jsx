import Card from "./Card";
import Score from "./Score";
import '../styles/Game.css'

const Game = ({ pokemon, score, hiScore, clicked }) => {
  return (
    <>
      <div className = "game-container">
        <Score score={score} hiScore={hiScore} />
        {pokemon.length > 0 ? (
          <div className="gamecards-container">
            {pokemon.slice(0, 5).map((pokemonData, index) => (
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

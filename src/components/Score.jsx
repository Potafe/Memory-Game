import '../styles/Score.css'

const Score = ({ score, hiScore }) => {
  return (
      <div className = "scorebar">
        <h1 className = "header">Memory Game</h1>
        <div className = "score-holder">
          <div className="current-score">
            <p>Current Score: {score}</p>
          </div>
          <div className="hi-score">
            <p>Highest Score: {hiScore}</p>
          </div>
        </div>
     </div>
  );
};

export default Score;

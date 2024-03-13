const Score = ({ score, hiScore }) => {
  return (
    <div>
      <div>
        <h1>Memory Game</h1>
      </div>
      <div>
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

import "./Lab3.css";
import Card from "./card";

function ScoreBoard() {
  return (
    <div className="score_board">
      <Card />
      <div id="score">
        <h1>0</h1>
      </div>
      <p>Round Score : 100</p>
    </div>
  );
}

export default ScoreBoard;

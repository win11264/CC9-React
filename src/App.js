import "./App.css";
import Top from "./component/top";
import Player1 from "./component/player1";
import Player2 from "./component/player2";
import ScoreBoard from "./component/scoreboard";

function App() {
  return (
    <div>
      <Top />
      <div id="main">
        <Player1 />
        <ScoreBoard />
        <Player2 />
      </div>
    </div>
  );
}

export default App;

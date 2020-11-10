import React,{ useState,useEffect } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import GameStart from "./sections/GameStart";
import './styles/index.scss';
import Question from "./sections/Question";

const App = () => {

    const [gameConfig,setGameConfig] = useState([]);

    useEffect(() => {
        fetch('./gameConfig.json')
            .then(response => response.json())
            .then(result => setGameConfig(result));
    });

  return (
      <HashRouter
          hashType={"slash"}
          basename={"/game"}
      >
          <>
              <Route exact path='/'>
                  <GameStart gameConfig={gameConfig}/>
              </Route>
              {gameConfig && gameConfig.map((elem,index) => {
                  return(
                      <Route path={`/question-${index+1}`} key={`${index}-route`}>
                          <Question
                              questionNumber={index+1}
                              key={index}
                              data={gameConfig}
                              {...elem}
                          />
                      </Route>
                  )
              })}
          </>
      </HashRouter>
  );
}

export default App;

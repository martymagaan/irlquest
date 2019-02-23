import React, { useState } from 'react';
import './App.css';
import QuestList from './components/QuestList';

function App() {
  const exampleQuests = [
    {name: 'Quest 1'},
    {name: 'Quest 2'},
    {name: 'Quest 3'}
  ];

  const [quests, setQuests] = useState(exampleQuests);

  return (
    <div className="App">
      <div className="container row">
        <QuestList quests={quests} />
      </div>
    </div>
  );
}

export default App;

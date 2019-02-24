import React, { useState } from 'react';
import './App.css';
import QuestList from './components/QuestList';
import QuestDetails from './components/QuestDetails';

function App() {
  const exampleQuests = [
    {title: 'Quest 1'},
    {title: 'Quest 2'},
    {title: 'Quest 3'}
  ];

  const [quests, setQuests] = useState(exampleQuests);
  const [currentQuest, setCurrentQuest] = useState(0);

  const copyQuests = () => quests.map(quest => ({...quest}));
  const addQuest = (quest) => setQuests([quest, ...quests]);

  const updateTitle = (title) => {
    const questsCopy = copyQuests();
    questsCopy[currentQuest].title = title;
    setQuests(questsCopy);
  };

  return (
    <div className="App">
      <div className="container row">
        <QuestList
          quests={quests}
          addQuest={addQuest}
        />
        <QuestDetails
          quest={quests[currentQuest]}
          updateTitle={updateTitle}
        />
      </div>
    </div>
  );
}

export default App;

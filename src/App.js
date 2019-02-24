import React, { useState } from 'react';
import './App.css';
import QuestList from './components/QuestList';
import QuestDetails from './components/QuestDetails';

function App() {
  const exampleQuests = [
    {title: 'Quest 1', details: 'Details of quest.'},
    {title: 'Quest 2', details: 'Details of quest.'},
    {title: 'Quest 3', details: 'Details of quest.'}
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

  const updateDetails = (details) => {
    const questsCopy = copyQuests();
    questsCopy[currentQuest].details = details;
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
          updateDetails={updateDetails}
        />
      </div>
    </div>
  );
}

export default App;

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

  const updateCurrentQuest = (quest) => {
    const questsCopy = copyQuests();
    questsCopy[currentQuest] = quest;
    setQuests(questsCopy);
  }

  const updateTitle = (title) => {
    updateCurrentQuest({...quests[currentQuest], title});
  };

  const updateDetails = (details) => {
    updateCurrentQuest({...quests[currentQuest], details});
  };

  return (
    <div className="App">
      <div className="container row">
        <QuestList
          quests={quests}
          addQuest={addQuest}
          setCurrentQuest={setCurrentQuest}
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

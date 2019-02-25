import React, { useState } from 'react';
import './App.css';
import QuestList from './components/QuestList';
import QuestDetails from './components/QuestDetails';
import Overlay from './components/Overlay';

function App() {
  const questTemplate = {
    title: 'New Quest',
    details: ''
  };

  const [quests, setQuests] = useState([questTemplate]);
  const [currentQuest, setCurrentQuest] = useState(0);
  const [toggle, setToggle] = useState({
    confirmDelete: false
  });

  const addQuest = () => {
    setQuests([questTemplate, ...quests]);
    setCurrentQuest(0);
  };

  const deleteQuest = () => {
    setQuests(
      quests.slice(0, currentQuest)
        .concat(quests.slice(currentQuest + 1))
    );
    if (quests.length < 2)
      setQuests([questTemplate]);
    setCurrentQuest(0);
  };

  const updateCurrentQuest = (quest) => {
    const questsCopy = quests.map(quest => ({...quest}));
    questsCopy[currentQuest] = quest;
    setQuests(questsCopy);
  };

  const updateTitle = (title) => {
    updateCurrentQuest({
      ...quests[currentQuest],
      title
    });
  };

  const updateDetails = (details) => {
    updateCurrentQuest({
      ...quests[currentQuest],
      details
    });
  };

  return (
    <div className="App">
      <div className="container row">
        <QuestList
          quests={quests}
          currentQuest= {currentQuest}
          setCurrentQuest={setCurrentQuest}
          addQuest={addQuest}
        />
        <QuestDetails
          quest={quests[currentQuest]}
          updateTitle={updateTitle}
          updateDetails={updateDetails}
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
      <Overlay
        deleteQuest={deleteQuest}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
}

export default App;

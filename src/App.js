import React, { useState } from 'react';
import './App.css';
import QuestList from './components/QuestList';
import QuestDetails from './components/QuestDetails';
import Overlay from './components/Overlay';

function App() {
  const newQuest = () => ({
    title: 'New Quest',
    details: '',
    started: new Date().toLocaleString(),
    updated: null
  });

  const [quests, setQuests] = useState([newQuest()]);
  const [currentQuest, setCurrentQuest] = useState(0);
  const [toggle, setToggle] = useState({
    confirmDelete: false
  });

  const addQuest = () => {
    setQuests([newQuest(), ...quests]);
    setCurrentQuest(0);
  };

  const deleteQuest = () => {
    setQuests(
      quests.slice(0, currentQuest)
        .concat(quests.slice(currentQuest + 1))
    );
    if (quests.length < 2)
      setQuests([newQuest()]);
    setCurrentQuest(0);
  };

  const updateQuest = (quest) => {
    const questsCopy = quests.map(quest => ({...quest}));
    questsCopy[currentQuest] = {
      ...quest,
      updated: new Date().toLocaleString()
    };
    setQuests(questsCopy);
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
          updateQuest={updateQuest}
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

import React, { useState, useEffect } from 'react';
import './App.css';
import QuestList from './components/QuestList';
import QuestDetails from './components/QuestDetails';
import Overlay from './components/Overlay';
import Welcome from './components/Welcome';

function App() {
  const newQuest = () => ({
    title: 'New Quest',
    details: '',
    started: new Date().toLocaleString(),
    updated: null,
    completed: null,
    status: 'In Progress'
  });

  const loadQuests = () => {
    const data = localStorage.getItem('quests');
    return data ? JSON.parse(data) : [];
  };

  const [quests, setQuests] = useState(loadQuests());
  const [currentQuest, setCurrentQuest] = useState(0);
  const [tab, setTab] = useState('In Progress');
  const [toggle, setToggle] = useState({
    confirmDelete: false,
    confirmComplete: false
  });

  useEffect(() => {
    const data = JSON.stringify(quests);
    localStorage.setItem('quests', data);
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

  const completeQuest = () => {
    updateQuest({
      ...quests[currentQuest],
      completed: new Date().toLocaleString(),
      status: 'Completed'
    });
    setTab('Completed');
  };

  return (
    <div className="App">
      <header>
        <img id="logo" src='img/irlquest.svg' alt="Logo" />
      </header>
      <div className="container row">
        <QuestList
          quests={quests}
          currentQuest={currentQuest}
          tab={tab}
          setTab={setTab}
          setCurrentQuest={setCurrentQuest}
          addQuest={addQuest}
        />
        {quests.length > 0 ? (
        <QuestDetails
          quest={quests[currentQuest]}
          updateQuest={updateQuest}
          toggle={toggle}
          setToggle={setToggle}
        />
        ) : <Welcome />}
      </div>
      <Overlay
        toggle={toggle}
        setToggle={setToggle}
        deleteQuest={deleteQuest}
        completeQuest={completeQuest}
      />
    </div>
  );
}

export default App;

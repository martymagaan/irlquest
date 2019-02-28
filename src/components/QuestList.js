import React from 'react';

function QuestList(props) {
  const listQuests = props.quests.map((quest, index) =>
    quest.status === props.tab ? (
    <li key={index.toString()}
      className={props.currentQuest === index ? "selected" : ""}
      onClick={() => props.setCurrentQuest(index)}
    >
      {quest.title}
    </li>
    ) : null
  );

  return (
    <div className="QuestList">
      <div className="quest-list-tabs">
        <div
          className="button row-item"
          onClick={() => props.setTab('In Progress')}
        >
          In Progress
        </div>
        <div
          className="button row-item"
          onClick={() => props.setTab('Completed')}
        >
          Completed
        </div>
      </div>
      {props.tab === 'In Progress' ? (<>
      <div className="list-section-head">
        Quests In Progress
      </div>
      <div className="side-button" onClick={props.addQuest}>
        + Start New Quest
      </div>
      </>) : (
      <div className="list-section-head">
        Completed Quests
      </div>)}
      {(listQuests.filter(item => item)).length > 0 ? (
      <ul>{listQuests}</ul>) : (
      <div className="message">
        Empty
      </div>)}
    </div>
  );
}

export default QuestList;

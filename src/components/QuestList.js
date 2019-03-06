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
      <div className="quest-tabs-bar row">
        <div
          className={props.tab === 'In Progress' ? "tab-selected" : ""}
          onClick={() => props.setTab('In Progress')}
        >
          In Progress
        </div>
        <div
          className={props.tab === 'Completed' ? "tab-selected" : ""}
          onClick={() => props.setTab('Completed')}
        >
          Completed
        </div>
      </div>
      {props.tab === 'In Progress' ? (
      <div className="side-button" onClick={props.addQuest}>
        <img className="icon-sm" src="img/plus.svg" alt="Plus icon"  />
        Start New Quest
      </div>
      ) : null}
      {(listQuests.filter(item => item)).length > 0 ? (
      <ul>{listQuests}</ul>) : (
      <div className="message">
        Empty
      </div>)}
    </div>
  );
}

export default QuestList;

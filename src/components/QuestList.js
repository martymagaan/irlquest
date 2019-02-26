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
        <div className="button row-item" onClick={() => props.setTab('In Progress')}>
          [ ]
        </div>
        <div className="button row-item" onClick={() => props.setTab('Completed')}>
          [v]
        </div>
      </div>
       <ul>
          {props.tab === 'In Progress' ? (
          <li onClick={props.addQuest}>
            + Start New Quest
          </li>
          ) : null}
         {(listQuests.filter(item => item)).length > 0 ? listQuests : (
         <li className="message">
           Empty
         </li>
         )}
       </ul>
    </div>
  );
}

export default QuestList;

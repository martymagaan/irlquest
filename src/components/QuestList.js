import React from 'react';

function QuestList(props) {
  const listQuests = props.quests.map((quest, index) =>
    <li key={index.toString()}
      className={props.currentQuest === index ? "selected" : ""}
      onClick={() => props.setCurrentQuest(index)}
    >
      {quest.title}
    </li>
  );

  return (
    <div className="QuestList">
      <div className="quest-list-tabs">
        <div
          className="button"
          onClick={props.addQuest}
        >
          + Add Quest
        </div>
      </div>
      {props.quests ? (
       <ul>{listQuests}</ul>
      ) : (
      <div className="note">
        No quests started
      </div>
      )}
    </div>
  );
}

export default QuestList;

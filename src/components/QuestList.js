import React from 'react';

function QuestList(props) {
  const newQuest = () => {
    props.addQuest({title: 'New Quest', details: ''})
  };

  const listQuests = props.quests.map((quest, index) =>
    <li key={index.toString()}
      onClick={() => props.setCurrentQuest(index)}
    >
      {quest.title}
    </li>
  );

  return (
    <div className="QuestList">
      <div className="quest-list-tabs">
        <span className="button" onClick={newQuest}>
          + Add Quest
        </span>
      </div>
      <ul>{listQuests}</ul>
    </div>
  );
}

export default QuestList;

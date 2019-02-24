import React from 'react';

function QuestList(props) {
  const newQuest = () => {
    props.addQuest({
      name: 'New Quest'
    });
  }

  const listQuests = props.quests.map((quest, index) =>
    <li key={index.toString()}>
      {quest.title}
    </li>
  );

  return (
    <div className="QuestList">
      <div className="button" onClick={newQuest}>
        + Add Quest
      </div>
      <ul>{listQuests}</ul>
    </div>
  );
}

export default QuestList;

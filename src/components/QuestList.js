import React from 'react';

function QuestList() {
  const quests = ['Quest 1', 'Quest 2', 'Quest3'];

  const listQuests = quests.map((quest, index) =>
    <li key={index}>
      {quest}
    </li>
  );

  return (
    <div className="QuestList">
      <ul>{listQuests}</ul>
    </div>
  );
}

export default QuestList;

import React from 'react';

function QuestList(props) {
  const listQuests = props.quests.map((quest) =>
    <li key={quest.name}>
      {quest.name}
    </li>
  );

  return (
    <div className="QuestList">
      <ul>{listQuests}</ul>
    </div>
  );
}

export default QuestList;

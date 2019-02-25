import React, { useState } from 'react';

function QuestList(props) {
  const [selected, setSelected] = useState(0);

  const newQuest = () => {
    props.addQuest({title: 'New Quest', details: ''});
    props.setCurrentQuest(0);
  };

  const selectQuest = (index) => {
    props.setCurrentQuest(index);
    setSelected(index);
  };

  const listQuests = props.quests.map((quest, index) =>
    <li key={index.toString()}
      className={selected === index ? "selected" : ""}
      onClick={() => selectQuest(index)}
    >
      {quest.title}
    </li>
  );

  return (
    <div className="QuestList">
      <div className="quest-list-tabs">
        <div className="button" onClick={newQuest}>
          + Add Quest
        </div>
      </div>
      {props.quests ? <ul>{listQuests}</ul>
        : <div className="note">No quests started</div>
      }
    </div>
  );
}

export default QuestList;

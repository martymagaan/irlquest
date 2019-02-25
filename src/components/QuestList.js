import React from 'react';

function QuestList(props) {
  const newQuest = () => {
    props.addQuest({title: 'New Quest', details: ''});
    props.setCurrentQuest(0);
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

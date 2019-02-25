import React from 'react';

function QuestDetails(props) {
  const handleTitleChange = (event) => {
    props.updateTitle(event.target.value);
  };

  const handleDetailsChange = (event) => {
    props.updateDetails(event.target.value);
  };

  const deleteQuest = () => {
    props.deleteQuest(props.quest);
  };

  return (
    <div className="QuestDetails">
      <input className="quest-title-input input"
        value={props.quest.title}
        onChange={handleTitleChange}
      />
      <textarea className="quest-details input"
        placeholder="Describe quest details"
        value={props.quest.details}
        onChange={handleDetailsChange}
      />
      <div className="quest-options-bar row">
        <div className="button" onClick={deleteQuest}>
          - Delete Quest
        </div>
      </div>
    </div>
  );
}

export default QuestDetails;

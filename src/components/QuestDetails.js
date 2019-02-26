import React from 'react';

function QuestDetails(props) {
  const handleTitleChange = (event) => {
    props.updateQuest({
      ...props.quest,
      title: event.target.value
    });
  };

  const handleDetailsChange = (event) => {
    props.updateQuest({
      ...props.quest,
      details: event.target.value
    });
  };

  const confirmDelete = () => {
    props.setToggle(
      {...props.toggle, confirmDelete: true}
    );
  };

  return (
    <div className="QuestDetails">
      <input className="quest-title-input input"
        value={props.quest.title}
        onChange={handleTitleChange}
      />
      <div className="quest-time-info row">
        <div className="row-item">
          Date Embarked:&nbsp;
          <span className="timestamp">
            {props.quest.started}
          </span>
        </div>
        {props.quest.updated ? (
        <div className="row-item">
          Last Update:&nbsp; 
          <span className="timestamp">
            {props.quest.updated}
          </span>
        </div>
        ) : null}
      </div>
      <textarea className="quest-details input"
        placeholder="Describe quest details"
        value={props.quest.details}
        onChange={handleDetailsChange}
      />
      <div className="quest-options-bar row">
        <div className="button" onClick={confirmDelete}>
          - Delete Quest
        </div>
      </div>
    </div>
  );
}

export default QuestDetails;

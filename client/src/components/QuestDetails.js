import React from 'react';

function QuestDetails(props) {
  const handleTitleChange = (event) => {
    if (event.target.value.length < 100) {
      props.updateQuest({
        ...props.quest,
        title: event.target.value
      });
    }
  };

  const handleDetailsChange = (event) => {
    if (event.target.value.length < 100000) {
      props.updateQuest({
        ...props.quest,
        details: event.target.value
      });
    }
  };

  const confirmDelete = () => {
    props.setToggle(
      {...props.toggle, confirmDelete: true}
    );
  };

  const confirmComplete = () => {
    props.setToggle(
      {...props.toggle, confirmComplete: true}
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
        {props.quest.completed ? (
        <div className="row-item">
          Date Completed:&nbsp; 
          <span className="timestamp">
            {props.quest.completed}
          </span>
        </div>
        ) : null}
      </div>
      <textarea className="quest-details input"
        placeholder="Describe quest details"
        value={props.quest.details}
        onChange={handleDetailsChange}
      />
      <div className="quest-options-bar">
        <div className="button" onClick={confirmDelete}>
          <img className="icon-sm" src="img/minus.svg" alt="Minus icon" />
          Delete Quest
        </div>
        {props.quest.status === 'In Progress' ? (
        <div className="button right" onClick={confirmComplete}>
          <img className="icon-sm" src="img/check.svg" alt="Check icon" />
          Complete Quest
        </div>
        ) : null}
      </div>
    </div>
  );
}

export default QuestDetails;

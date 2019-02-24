import React, { useState } from 'react';

function QuestDetails(props) {
  const handleTitleChange = (event) => {
    props.updateTitle(event.target.value);
  };

  const handleDetailsChange = (event) => {
    props.updateDetails(event.target.value);
  };

  return (
    <div className="QuestDetails">
      <input className="quest-title-input input"
        value={props.quest.title}
        onChange={handleTitleChange}
      />
      <textarea className="quest-details input"
        placeholder="Describe quest details"
        onChante={handleDetailsChange}
      />
    </div>
  );
}

export default QuestDetails;

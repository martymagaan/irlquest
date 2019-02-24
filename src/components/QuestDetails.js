import React, { useState } from 'react';

function QuestDetails(props) {
  const handleTitleChange = event => {
    props.updateTitle(event.target.value);
  };

  return (
    <div className="QuestDetails">
      <input className="quest-title-input"
        value={props.quest.title}
        onChange={handleTitleChange}
      />
    </div>
  );
}

export default QuestDetails;

import React from 'react';

function Overlay (props) {
  const untoggle = () => {
    const toggle = {...props.toggle};
    for (let key in toggle)
      toggle[key] = false;
    props.setToggle(toggle);
  };

  return (
    <div className="Overlay">
      {props.toggle.confirmDelete ? (
      <div className="overlay-shade" onClick={untoggle}>
        <div className="overlay-panel">
          <p>Delete quest?</p>
          <button className="overlay-button"
            onClick={props.deleteQuest}
          >
            Yes
          </button>
          <button className="overlay-button" onClick={untoggle}>
            No
          </button>
        </div>
      </div>
      ) : null }
      {props.toggle.confirmComplete ? (
      <div className="overlay-shade" onClick={untoggle}>
        <div className="overlay-panel">
          <p>Quest Completed?</p>
          <button className="overlay-button"
            onClick={props.completeQuest}
          >
            Yes
          </button>
          <button className="overlay-button" onClick={untoggle}>
            No
          </button>
        </div>
      </div>
      ) : null }
    </div>
  );
}

export default Overlay;

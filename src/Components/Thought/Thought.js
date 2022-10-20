import React, { useState, useEffect } from "react";

export function Thought(props) {
  const { thought, removeThought } = props;
  const [time, setTime] = useState(15);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  }, [removeThought, thought]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
      <div className="timer">Time Remaining: {time}</div>
    </li>
  );
}

import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "../Utilities/Utilities";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = ({ target }) => setText(target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };
    if (text.length > 0) props.addThought(thought);
    setText("");
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}

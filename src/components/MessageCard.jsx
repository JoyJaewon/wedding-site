// MessageCard.jsx
import React from "react";

export default function MessageCard({ message }) {
  const { name, message: messageText } = message;

  return (
    <li className="bg-white rounded-lg shadow-md overflow-hidden p-4 my-2">
      <h5 className="text-lg font-bold">{name}</h5>
      <p>{messageText}</p>
    </li>
  );
}

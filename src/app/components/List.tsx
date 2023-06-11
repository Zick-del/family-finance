import { useState } from "react";

export default function List() {
  const [creator, setCreator] = useState("");
  const [listName, setListName] = useState("");
  const listUrl = "/lists/" + creator;
  return (
    <form action={listUrl} className="list-form">
      <label htmlFor="list-name">List name:</label>
      <input
        type="text"
        id="list-name"
        required
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      <label htmlFor="creator">Created by:</label>
      <input
        type="text"
        id="creator"
        name="creator"
        required
        value={creator}
        onChange={(e) => setCreator(e.target.value)}
      />
      <button type="submit" id="create-button">
        Create
      </button>
    </form>
  );
}

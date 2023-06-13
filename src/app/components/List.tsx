import { useRouter } from "next/navigation";
import { useState } from "react";

export default function List() {
  const [data, setData] = useState({});
  const router = useRouter();
  console.log(data);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const res = fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  return (
    <form className="list-form" onSubmit={handleSubmit}>
      <label htmlFor="listName">List name:</label>
      <input
        type="text"
        id="listName"
        name="listName"
        required
        onChange={handleChange}
      />
      <label htmlFor="creator">Created by:</label>
      <input
        type="text"
        id="creator"
        name="creator"
        required
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
}

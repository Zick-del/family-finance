"use client";
import { useState } from "react";
import List from "@/app/components/List";
import { Plus } from "lucide-react";

export default function Home() {
  const [list, setList] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <main className="main">
      <div className={isActive ? "mainContainer active" : "mainContainer"}>
        <p>Welcome to the expenses-control-app!</p>
        <p>Create a new list</p>
        <div
          className={isActive ? "icon icon-active" : "icon"}
          onClick={(e) => {
            setIsActive((current) => (current = true));
            setList(true);
          }}
        >
          <Plus width={50} height={50} />
        </div>
      </div>
      {list ? <List /> : " "}
    </main>
  );
}

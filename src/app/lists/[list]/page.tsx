"use client";
import { useParams, usePathname } from "next/navigation";
import path from "path";

export default function List() {
  const params = useParams().list;

  return <p>{params}: add your expenses</p>;
}

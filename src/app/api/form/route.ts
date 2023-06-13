import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const sql = require("mssql");
const config = {
  user: "SA",
  password: "",
  server: "localhost", // You can use 'localhost\\instance' to connect to named instance
  database: "",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  console.dir(body);
  console.dir(typeof body.listName);

  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("input_parameter1", sql.NVarChar(50), body.listName)
      .input("input_parameter2", sql.NVarChar(50), body.creator)
      .query(
        "insert into Lists (Name, CreatedBy) Values (@input_parameter1, @input_parameter2)"
      );
    return NextResponse.json("Erfolg");
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
    console.dir(err);
  }
}

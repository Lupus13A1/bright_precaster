// import { Pool } from "pg";
import { NextResponse } from "next/server";
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "from_data",
//   password: "symphoniga4416and339",
//   port: 5432,
// });

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     try {
//       const client = await pool.connect();
//       const query =
//         "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)";
//       const values = [name, email, message];
//       await client.query(query, values);
//       client.release();

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, error: "Database error" });
//     }
//   } else {
//     res.status(405).json({ success: false, error: "Method not allowed" });
//   }
// }
export async function GET() {
  return NextResponse.json({
    hllo: "world",
  });
}

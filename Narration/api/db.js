import mysql from "mysql";

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Tush@r011220",
  database:"blog"
})
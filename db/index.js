const { createConnection } = require("mongoose");
const { initProject } = require("./models/project");

const conn = createConnection(process.env.DB_CONN);

const db = {}

db.project = initProject(conn);

module.exports = {
    db,
}
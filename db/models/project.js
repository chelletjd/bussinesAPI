const { default: mongoose, Schema } = require("mongoose");

const ProjectsSchema = new Schema({
    _id: Number,
    name: String,
    description: String,
    season: String,
    owner: String,
    files: Array
});

function initProject(conn) {
    return conn.model('project',ProjectsSchema)
}

module.exports = {
    initProject
}
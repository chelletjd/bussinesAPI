const { db } = require('../db');

async function getAllProjects() {
    const projects = await db.project.find();

    return projects;
}

async function getProjectById(id) {
    const project = await db.project.findOne({_id: id})

    return project
}

function createProject(project) {
    const projectUpdate = new db.project({
        _id: project.id,
        name: project.name,
        description: project.description,
        season: project.season,
        owner: project.owner,
    });
    projectUpdate.save();

    return project;
}

async function attachFilesToProject(id, files) {
    const project = await db.project.findOne({_id: id})
    const filesUpdate = project.files
    filesUpdate.push(files)
    
    await db.project.updateOne({_id: id}, {files: filesUpdate});
    return project;
}

async function updateProjectById(id, projectUpdate) {
    let project = await db.project.updateOne({_id: id}, projectUpdate);
    return project;
}

async function deleteProjectById(id) {
    const project = db.project.deleteOne({_id: id});

    return project;
}

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProjectById,
    deleteProjectById,
    attachFilesToProject
}
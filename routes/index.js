const express = require('express');
const router = express.Router();
const { 
    getAllProjects, 
    getProjectById, 
    createProject, 
    updateProjectById, 
    deleteProjectById, 
    attachFilesToProject
} = require("../controller/projectController");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

//GET all projects
router.get('/projects', async function(req,res) {
    try {
        const response = await getAllProjects();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

//GET projects by id
router.get('/projects/:id', async function(req,res) {
    try {
        const response = await getProjectById(req.params.id);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

//ATTACH files top project
router.patch('/projects/files/:id', upload.single('file'), async function(req,res) {
    try {
        const response = await attachFilesToProject(req.params.id, req.file);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

//CREATE project
router.post('/projects', async function(req,res) {
    try {
        const response = await createProject(req.body);
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

//UPDATE project by ID
router.patch('/projects/:id', async function(req,res) {
    try {
        const response = await updateProjectById(req.params.id, req.body);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE project by ID
router.delete('/projects/:id', async function(req,res) {
    try {
        const response = await deleteProjectById(req.params.id);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = {
    router,
}
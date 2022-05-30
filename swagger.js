const { getAllProjects, getProjectById, attachFilesToProject, createProject, updateProjectById, deleteProjectById } = require("./src/openAPI/business.swagger")

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Business',
        description: 'business challenge to know information about projects',
        termsOfService: '',
        contact: {
            name: 'Michelle Torres',
            email: 'chellet.jd@gmail.com',
            url: 'https://www.linkedin.com/in/michelle-torres-9301a69b/'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server'
        },
    ],
    paths: {
        "/projects": {
            "get": getAllProjects,
            "post": createProject
        },
        "/projects/files/{id}": {
            "patch": attachFilesToProject
        },
       "/projects/{id}": {
            "delete": deleteProjectById,
            "patch": updateProjectById,
            "get": getProjectById
        },
    }
}

module.exports = {
    swaggerDocument
}
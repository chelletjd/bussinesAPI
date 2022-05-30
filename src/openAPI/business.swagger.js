const getAllProjects = {
    tags: ['ProjectsAll'],
    description: "Get all projects from the database",
    operationId: 'getAllProjects',
    responses: {
        "200": {          
            description: "Get all projects",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items:{
                            type: "object",
                            properties:{
                                id: {
                                    type: 'number',
                                    description: 'Project id'
                                },
                                name: {
                                    type: 'string',
                                    description: 'Project Name'
                                },
                                description: {
                                    type: 'string',
                                    description: 'Project description'
                                },
                                owner: {
                                    type: 'string',
                                    description: 'Project owner'
                                },
                                files: {
                                    type: 'array',
                                    description: 'Project files',
                                    items:{
                                        type: "object",
                                        properties:{
                                            fieldname: {
                                                type: 'string',
                                                description: 'Field name'
                                            },
                                            originalname: {
                                                type: 'string',
                                                description: 'original file name'
                                            },
                                            encoding: {
                                                type: 'string',
                                                description: 'file encoding'
                                            },
                                            mimetype: {
                                                type: 'string',
                                                description: 'file mimetype'
                                            },
                                            destination: {
                                                type: 'string',
                                                description: 'file destination'
                                            },
                                            path: {
                                                type: 'string',
                                                description: 'file path'
                                            },
                                            fiesizeldname: {
                                                type: 'string',
                                                description: 'file size'
                                            },
                                        }
                                    }
                                },
                            }
                        }
                    }
                }
            }
        }
    }
}

const getProjectById = {
    tags: ['getProjectById'],
    description: "Get project by id",
    operationId: 'getProjectById',
    parameters: [{
        name: ":id",
        in: "path",
        description: "project id",
        type: "number",
        
    }],
    responses: {
        "200": {          
            description: "Get project by id",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties:{
                            id: {
                                type: 'number',
                                description: 'Project id'
                            },
                            name: {
                                type: 'string',
                                description: 'Project Name'
                            },
                            description: {
                                type: 'string',
                                description: 'Project description'
                            },
                            owner: {
                                type: 'string',
                                description: 'Project owner'
                            },
                            files: {
                                type: 'array',
                                description: 'Project files',
                                items:{
                                    type: "object",
                                    properties:{
                                        fieldname: {
                                            type: 'string',
                                            description: 'Field name'
                                        },
                                        originalname: {
                                            type: 'string',
                                            description: 'original file name'
                                        },
                                        encoding: {
                                            type: 'string',
                                            description: 'file encoding'
                                        },
                                        mimetype: {
                                            type: 'string',
                                            description: 'file mimetype'
                                        },
                                        destination: {
                                            type: 'string',
                                            description: 'file destination'
                                        },
                                        path: {
                                            type: 'string',
                                            description: 'file path'
                                        },
                                        fiesizeldname: {
                                            type: 'string',
                                            description: 'file size'
                                        },
                                    }
                                }
                            },
                        }
                    }
                }
            }
        }
    }
}

const attachFilesToProject = {
    tags: ['attachFilesToProject'],
    description: "Attach files to project",
    operationId: 'attachFilesToProject',
    parameters: [{
        name: "id",
        in: "path",
        description: "project id",
        type: "number",
        
    }],
    requestBody: {
        required: true,
        "content": {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties:{
                        file: {
                            type: "string",
                            format: "binary"
                        }
                    }
                }
            }
        }
    },
    responses: {
        "200": {          
            description: "attach files to project",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties:{
                            id: {
                                type: 'number',
                                description: 'Project id'
                            },
                            name: {
                                type: 'string',
                                description: 'Project Name'
                            },
                            description: {
                                type: 'string',
                                description: 'Project description'
                            },
                            owner: {
                                type: 'string',
                                description: 'Project owner'
                            },
                            files: {
                                type: 'array',
                                description: 'Project files',
                                items:{
                                    type: "object",
                                    properties:{
                                        fieldname: {
                                            type: 'string',
                                            description: 'Field name'
                                        },
                                        originalname: {
                                            type: 'string',
                                            description: 'original file name'
                                        },
                                        encoding: {
                                            type: 'string',
                                            description: 'file encoding'
                                        },
                                        mimetype: {
                                            type: 'string',
                                            description: 'file mimetype'
                                        },
                                        destination: {
                                            type: 'string',
                                            description: 'file destination'
                                        },
                                        path: {
                                            type: 'string',
                                            description: 'file path'
                                        },
                                        fiesizeldname: {
                                            type: 'string',
                                            description: 'file size'
                                        },
                                    }
                                }
                            },
                        }
                    }
                }
            }
        }
    }
}

const createProject = {
    tags: ['createProject'],
    description: "Create a project",
    operationId: 'createProject',
    requestBody: {
        required: true,
        "content": {
            "application/json": {
                schema: {
                    type: "object",
                    properties:{
                        id: {
                            type: 'number',
                            description: 'Project id'
                        },
                        name: {
                            type: 'string',
                            description: 'Project Name'
                        },
                        description: {
                            type: 'string',
                            description: 'Project description'
                        },
                        owner: {
                            type: 'string',
                            description: 'Project owner'
                        }
                    }
                }
            }
        }
    },
    responses: {
        "200": {          
            description: "create project",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties:{
                            id: {
                                type: 'number',
                                description: 'Project id'
                            },
                            name: {
                                type: 'string',
                                description: 'Project Name'
                            },
                            description: {
                                type: 'string',
                                description: 'Project description'
                            },
                            owner: {
                                type: 'string',
                                description: 'Project owner'
                            }
                        }
                    }
                }
            }
        }
    }
}

const updateProjectById = {
    tags: ['updateProjectById'],
    description: "updateProjectById",
    operationId: 'updateProjectById',
    parameters: [{
        name: "id",
        in: "path",
        description: "project id",
        type: "number",
        
    }],
    requestBody: {
        required: false,
        "content": {
            "application/json": {
                schema: {
                    type: "object",
                    properties:{
                        name: {
                            type: 'string',
                            description: 'Project Name'
                        },
                        description: {
                            type: 'string',
                            description: 'Project description'
                        },
                        owner: {
                            type: 'string',
                            description: 'Project owner'
                        }
                    }
                }
            }
        }
    },
    responses: {
        "200": {          
            description: "Update project by id",
            "content": {
                "application/json": {
                    schema: {
                        type: "string",
                    }
                }
            }
        }
    }
}


const deleteProjectById = {
    tags: ['deleteProjectById'],
    description: "deleteProjectById",
    operationId: 'deleteProjectById',
    parameters: [{
        name: "id",
        in: "path",
        description: "project id",
        type: "number",
        
    }],
    responses: {
        "200": {          
            description: "Delete project by id",
            "content": {
                "application/json": {
                    schema: {
                        type: "string",
                    }
                }
            }
        }
    }
}

module.exports = {
    getAllProjects,
    getProjectById,
    attachFilesToProject,
    createProject,
    updateProjectById,
    deleteProjectById

}
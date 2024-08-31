import swaggerJSDoc from "swagger-jsdoc"

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Js API Project',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:8000/'
      }
    ]
  },
  apis: ['./view/routes.js']
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
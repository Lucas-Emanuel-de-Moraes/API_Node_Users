import express from "express"
import cors from 'cors'
import { conect } from "./postgres/postgres.js"
import router from "./view/routes.js"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger.js"

const app = express()

app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(cors())
app.use(router)

app.listen(8000, () => {
  console.log('Server is running at PORT 8000')
})

conect()
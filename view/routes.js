import express from "express"
import { deleteUser, getUser, postUser, updateUser } from "../controller/userController.js"

const router = express.Router()


/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operations related to users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     description: Retrieve a list of all users from the database.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   empId:
 *                     type: string
 *                     description: The user ID.
 *                   name:
 *                     type: string
 *                     description: The user's name.
 *                   email:
 *                     type: string
 *                     description: The user's email.
 *                   designation:
 *                     type: string
 *                     description: The user's designation.
 *       404:
 *         description: No users found.
 *       500:
 *         description: Internal server error.
 */
router.get('/users', getUser)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     description: Create a new user with the given details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - designation
 *               - empId
 *             properties:
 *               empId:
 *                 type: string
 *                 description: The user ID.
 *               name:
 *                 type: string
 *                 description: The user's name.
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               designation:
 *                 type: string
 *                 description: The user's designation.
 *     responses:
 *       201:
 *         description: User added successfully.
 *       409:
 *         description: User already exists.
 *       400:
 *         description: Invalid request parameters.
 *       500:
 *         description: Internal server error.
 */
router.post('/users', postUser)

/**
 * @swagger
 * /users/{empId}:
 *   put:
 *     summary: Update an existing user
 *     tags: [Users]
 *     description: Update the details of an existing user by their ID.
 *     parameters:
 *       - in: path
 *         name: empId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               designation:
 *                 type: string
 *                 description: The user's designation.
 *     responses:
 *       200:
 *         description: Update successful.
 *       404:
 *         description: Record not found.
 *       400:
 *         description: Invalid request parameters.
 *       500:
 *         description: Internal server error.
 */
router.put('/users/:empId', updateUser)

/**
 * @swagger
 * /users/{empId}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     description: Delete a user by their ID.
 *     parameters:
 *       - in: path
 *         name: empId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID.
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: Record not found.
 *       400:
 *         description: Invalid request parameters.
 *       500:
 *         description: Internal server error.
 */
router.delete('/users/:empId', deleteUser)

export default router
import { UserModel } from "../postgres/postgres.js"

export const getUser = async(req, res) => {
  try {
    const users = await UserModel.findAll()
    if (users.length === 0) {
      return res.status(404).json({ error: 'No users found' })
    }
    return res.status(200).json(users)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export const postUser = async(req, res) => {
  const { name, email, designation, empId } = req.body
  if (name !== undefined && email !== undefined && designation !== undefined) {
    try {
      const emp = await UserModel.findOne({ where: { empId: empId } })
      if (emp === null) {
        await UserModel.create(req.body)
        return res.status(201).json({ message: 'User added successfully' })
      }
      return res.status(409).json({ message: 'User already exists' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    return res.status(400).json({ error: 'Invalid request parameters' })
  }
}

export const updateUser = async(req, res) => {
  const { empId } = req.params
  const body = { ...req.body, empId: empId }
  if (empId !== undefined) {
    try {
      const emp = await UserModel.findOne({ where: { empId: empId } })
      if (emp !== null) {
        const empAtt = await UserModel.update(body, { where: { empId: empId } })
        console.log(empAtt)
        if (empAtt[0] === 0) {
          return res.status(200).json({ message: 'No changes made to the record' })
        }
        return res.status(200).json({ message: 'Update successful' })
      } else {
        return res.status(404).json({ message: 'Record not found' })
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    return res.status(400).json({ error: 'Invalid request parameters' })
  }
}

export const deleteUser = async(req, res) => {
  const { empId } = req.params
  if (empId !== undefined) {
    try {
      const emp = await UserModel.findOne({ where: { empId: empId }})
      if(emp !== null) {
        await UserModel.destroy({ where: { empId: empId }})
        return res.status(200).json({ message: 'User deleted successful' })
      } else {
        return res.status(404).json({ message: 'Record not found' })
      }
    } catch(error) {
      console.log(error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    return res.status(400).json({ error: 'Invalid request parameters' })
  }
}
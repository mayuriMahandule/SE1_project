import Users from '../models/users.js'

export const createUser = async (req, res) => {
    const userData = req.body;
    const newUser = Users(userData)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch {
        
    }
    //res.send(`Creating user`)
}

export const getUser = async (req, res) => {
    try {
        const user = await Users.find()
        res.status(200).json(user);
    } catch {
        res.status(404).json({message : error.message});
    }
    //res.send(`Creating user`)
}
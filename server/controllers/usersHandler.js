import Users from '../models/users.js'
import UserSession from '../models/userSession.js';

export const userSignUp = async (req, res) => {
    const userData = req.body;
    console.log('userData', userData)
    const newUser = new Users(userData)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch {
        res.status(404).json({message : error.message});
    }
}

export const userSignIn = async (req, res) => {
    try {
        const reqData = req.body
        const users = await Users.find({_id: reqData.userId})
        if(users.length != 1) {
            res.status(404).json({message : "Invalid User"})
        } else {
            const user = users[0]
            const newUSerSession = new UserSession()
            newUSerSession.userId = user._id
            newUSerSession.isDeleted = false
            const sessionRes = await newUSerSession.save()
            res.status(200).json({token : sessionRes._id});
        }
       
    } catch {
        res.status(404).json({message : error.message});
    }
}

export const verifySession = async (req, res) => {
    try {
        const reqData = req.body
        console.log(reqData)
        const users = await UserSession.find({_id: reqData.token, 'isDeleted' : false})
        const user = users[0]
        if(users.length == 1){
            res.status(200).json(user)
        }else {
            res.status(404).json({"error" : "Session Invalid"});
        }
        
    } catch {
        res.status(404).json({message : error.message});
    }
}
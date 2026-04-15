import fs from 'fs'

export const Login = (req,res)=>{
    const{ name, password }=req.body;
    const users=JSON.parse(fs.readFileSync("./users.json","utf-8"));
    const user=users.find((u) => u.name === name && u.password ===password);

    if (!user){
        return res.status(404).json({message:"user not found"});
    }
    if (user.password !== password){
        return res.status(400).json({message:"invalid password"});
    }
    res.json({
        message:"login successful",
        user,
    });
};
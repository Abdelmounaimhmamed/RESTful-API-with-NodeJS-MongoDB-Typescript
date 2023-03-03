import { Express , Response , Request, NextFunction } from "express";
import Author from "../models/Author.model";
import mongoose from "mongoose";

const createAuthor  = async (req : Request,res: Response , next :NextFunction) => {
    const {name } = req.body;
    const author = new Author({
        _id :new  mongoose.Types.ObjectId,
        name 
    });
    try {
        await author.save();
        return res.status(200).json({message : "Author Created " , author : author})
    } catch (error) {
        return res.status(400).json({message : "Error creating author", error});
    }
}   

const getAllAuthor = async (req:Request,res:Response,next:NextFunction) => {
    const users = await Author.find();
    if (!users){
        return res.status(404).json({message : "No Author in the database"});
    }
    return res.status(200).json({message  : "all fetched users" , users : users} );
}
const getOnlyOneAuthor = async (req : Request ,res:Response,next:NextFunction) => {
    const AuthorId =  req.params.id;
    try {
        const author = await Author.findById(AuthorId);
        if (!author){
            return res.status(404).json({message : "No author in the database"})
        }
        return res.status(200).json({author : author});
    } catch (error) {
        return res.json(400).json({message : error})
    }
}

const updateAuhtor = async  (req:Request,res:Response,next : NextFunction) => {
    const AuthorId = req.params.id;
    return  await Author.findById(AuthorId)
    .then((author) => {
        if (author){
            author.set(req.body);
            return author.save().then((author) => {
                res.status(200).json({author : author});
        }).catch((err) => {
            res.status(400).json({err : err});
        })

        }else{
            res.status(400).json({message : "No Author found to update ! "});
        }
    })
}


const deleteAuthor = async (req: Request , res: Response , next : NextFunction) => {
    const AuthorId = req.params.id;
    try {
        const author = await Author.findByIdAndDelete(AuthorId);
        if (!author){
            return res.status(404).json({message : "No user found to delete"});
        }
        return res.status(200).json({message :"user deleted"})
    } catch (error) {
        console.log(error);
    }
}

export default {
    createAuthor ,
    getAllAuthor ,
    getOnlyOneAuthor ,
    updateAuhtor ,
    deleteAuthor};



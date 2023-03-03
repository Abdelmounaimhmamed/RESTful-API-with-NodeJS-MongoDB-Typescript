import mongoose from 'mongoose';
import { Schema , Document } from 'mongoose';

export interface IAuthor { 
    name : string;
}

export interface IAuthorModel extends IAuthor , Document {};

const AuthorSchema : Schema = new Schema({
    name :  {
        type : String,
        required : true
    }
},{
    timestamps : true
});
const Author =  mongoose.model<IAuthorModel>("Author" ,AuthorSchema );


export default Author;

import mongoose , {Document , Schema, mongo} from "mongoose";


export  interface IBooks {
    title : string,
    author : string
}

export interface IBooksModel extends IBooks , Document {};

const BookSchema : Schema = new Schema({
    title :{
        type : String,
        required : true
    },
    author : {
        type : new mongoose.Types.ObjectId,
        required : true,
        ref : "Author"
    }
}, {
    timestamps : true
});
const Books = mongoose.model<IBooksModel>("Books" , BookSchema);

export default Books;
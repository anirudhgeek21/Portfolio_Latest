import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
    first_name:{
        type: String,
        required : true,
    },
    last_name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }
    
    },
    {
        timestamp: true,
    }

);

export const Contact = mongoose.model('Contact',ContactSchema);
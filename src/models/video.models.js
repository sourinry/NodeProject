import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema({
    vidoeFile:{
        type: String,
        required: true
    },
    thumnail:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    }, 
    description:{
        type: String,
        required: true
    },
    durection:{
        type: Number,
        required: true
    },
    view:{
        type: Number,
        default: 0
    },
    isPublic:{
        type: Boolean,
        default: false
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
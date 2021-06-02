import mongoose, { Schema } from "mongoose";
import IPicture from "../interfaces/IPicture";

const PictureSchema: Schema = new Schema({
  fileName: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  fileExtension: {
    type: String,
    required: true
  }
});

export default mongoose.model<IPicture>('Picture', PictureSchema);

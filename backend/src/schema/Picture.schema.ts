import mongoose, { Document, Schema } from "mongoose";

export interface IPicture extends Document {
  fileName: String;
  mimeType: String;
  fileExtension: String;
}

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

import { Document } from "mongoose";

export default interface IPicture extends Document {
  fileName: string;
  mimeType: string;
  fileExtension: string;
} 

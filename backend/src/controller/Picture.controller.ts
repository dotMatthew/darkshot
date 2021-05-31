import { Request, Router } from "express";
import multer from "multer";
import environment from "../environment";
import { FileSystem } from "../util/FileSystem";

const router: Router = Router();

const storage = multer.diskStorage({
  destination: environment.data_storage,

  filename: function (req, file, cb) {
    cb(null, Math.floor(Math.random() * (1000000 - 1) + 1) + ".jpg")
  }

})

const upload = multer({
  storage: storage
})


/**
 * 
 * Get a picture via id
 * 
 */
router.get("/:id", async (req: Request, res) => {

  var id: string = req.params.id;

  if (FileSystem.isExists("/storage/" + id + ".jpg")) {
    res.writeHead(404);
    res.write("id not found!");
  }

  if (id) {
    res.sendFile("/storage/" + id + ".jpg");
  }

});

/**
 * 
 * Post a picture
 * 
 */
router.post("/", upload.single('upload_image'), async (req: Request, res) => {
  console.log("File uploaded...");
  console.log("id: " + req.file.filename);
  res.sendStatus(200);
});

export const PictureController = router;

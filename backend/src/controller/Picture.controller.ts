import { Request, Router } from 'express';
import multer from 'multer';
import path from 'path';
import environment from '../environment';
import PictureModel from '../schema/Picture.schema';

const router: Router = Router();

const storage = multer.diskStorage({
  destination: environment.data_storage,
});

const upload = multer({ storage });

/**
 *
 * Get a picture via id
 *
 */
router.get('/:id', async (req: Request, res) => {
  const id = req.params.id;

  if(id.length > 24 || id.length < 24) {
    res.write("error at parsing id");
    res.end();
  } else {
    const model = await PictureModel.findOne({}).exec();
  
    if(model == null) {
      res.write("id not found!");
      res.end();
    } else {
      res.sendFile(`/storage/${model.fileName}.${model.fileExtension}`);
    }
  }

  
});

/**
 *
 * Post a picture
 *
 */
router.post('/', upload.single('upload_image'), async (req: Request, res) => {

  await PictureModel.create({
    fileName: req.file.filename,
    mimeType: req.file.mimetype,
    fileExtension: path.extname(req.file.originalname)
  }).then(model =>
    res.sendStatus(200))
    .catch(error => res.json(error));

});

export const PictureController: Router = router;

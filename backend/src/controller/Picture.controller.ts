import { Request, Router } from 'express';
import multer from 'multer';
import path from 'path';
import environment from '../environment';
import PictureModel from '../schema/Picture.schema';

const router: Router = Router();

const storage = multer.diskStorage({
  destination: environment.data_storage,
});

const upload = multer({
  storage,
});

/**
 *
 * Get a picture via id
 *
 */
router.get('/:id', async (req: Request, res) => {
  const id = req.params.id;

  /* if (!(await FileSystem.isExists("/storage/" + id))) {
    res.writeHead(404);
    res.write("id not found!");
  } */

  res.sendFile(`/storage/${id}.jpg`);
});

/**
 *
 * Post a picture
 *
 */
router.post('/', upload.single('upload_image'), async (req: Request, res) => {

  PictureModel.create({
    fileName: req.file.filename,
    mimeType: req.file.mimetype,
    fileExtension: path.extname(req.file.originalname)
  }).then(model => res.sendStatus(200)).catch(error => res.json(error));

});

router.get('/test/test', async (req: Request, res) => {

  PictureModel.create({
    fileName: 'test',
    mimeType: 'image/jpeg',
    fileExtension: 'jpg'
  }).then(model => {
    res.sendStatus(200);
  }).catch(err => res.json(err));

});

export const PictureController: Router = router;

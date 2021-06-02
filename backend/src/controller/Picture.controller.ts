import { Request, Router } from 'express';
import multer from 'multer';
import path from 'path';
import environment from '../environment';

const router: Router = Router();

const storage = multer.diskStorage({
  destination: environment.data_storage,

  filename(req, file, cb) {
    cb(null, Math.floor(Math.random() * (1000000 - 1) + 1) + path.extname(file.originalname));
  },

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
  /* console.log('File uploaded...');
  console.log(`id: ${req.file.filename}`); */
  res.sendStatus(200);
});

export const PictureController: Router = router;

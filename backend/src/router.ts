import { Router } from 'express';
import { PictureController, UploadController } from './controller';

const router: Router = Router();

router.use("/post-picture", UploadController);
router.use("/picture", PictureController);

export const MainRouter: Router = router;

import { Router } from 'express';
import { StatusController } from './controller/Status.controller';
import { UploadController } from './controller/Upload.controller';

const router: Router = Router();

router.use("/", StatusController)
router.use("/post-picture", UploadController);

export const MainRouter: Router = router;
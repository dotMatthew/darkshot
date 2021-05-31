import { Router } from 'express';
import { UploadController } from './controller/Upload.controller';

const router: Router = Router();

router.use("/post-picture", UploadController);

export const MainRouter: Router = Router();
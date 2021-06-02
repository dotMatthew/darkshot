import { Router } from 'express';
import { PictureController } from './controller';

const router: Router = Router();

router.use('/picture', PictureController);

export const MainRouter: Router = router;

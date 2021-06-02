import { Router } from 'express';
import { PictureController, UserController } from './controller';

const router: Router = Router();

router.use('/picture', PictureController);
router.use('/user', UserController);

export const MainRouter: Router = router;

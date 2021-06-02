import { Request, Router } from 'express';

const router: Router = Router();

/**
 * Get list of ids of the pictures
*/
router.get('/', async (req: Request, res) => {
  res.write('Hello there ');
});

export const PicturesController: Router = router;

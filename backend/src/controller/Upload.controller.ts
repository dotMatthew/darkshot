import { Router, Request } from "express";
import multer from "multer";

const router: Router = Router();

const upload = multer({ dest: 'images/' });

router.post("/", upload.single('upload_image'), async (req: Request, res) => {
    console.log(req.file);
    res.sendStatus(200);
});

export const UploadController: Router = router;
import { Request, Router } from "express";
import multer from "multer";
import environment from "../environment";

const router: Router = Router();

const storage = multer.diskStorage({
    destination: environment.data_storage,
})

const upload = multer({ storage: storage });

router.post("/", upload.single('upload_image'), async (req: Request, res) => {
    console.log(req.file);
    res.sendStatus(200);
});

export const UploadController: Router = router;

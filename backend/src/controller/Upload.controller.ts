import { Router, Request } from "express";

const router: Router = Router();

router.post("/", async (req: Request, res) => {
    console.log('Got body', req.body);
    res.sendStatus(200);
});

export const UploadController: Router = router;
import { Router, Request } from "express";

const router: Router = Router();

router.get("/", async (req: Request, res) => {
    res.send("Hello World!");
});

export const StatusController: Router = router;
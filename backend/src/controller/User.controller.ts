import { Request, Router } from "express";
import UserModel from "../schema/User.schema";

const router: Router = Router();

router.post("/", async (req: Request, res, next) => {

  const user = await UserModel.create({
    uuid: "test-12435",
    name: "Mathias"
  });

  res.write(`Done ${user.id}`);

})

export const UserController: Router = router;

import fs from "fs";

export class FileSystem {

  static async isExists(path: string) {
    try {
      await fs.access(path, fs.constants.F_OK, () => { });
      return true;
    } catch {
      return false;
    }
  }

}
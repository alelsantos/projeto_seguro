import { firestore } from "../../configs/Firebase/FireStore";
import { doc, getDoc } from "firebase/firestore";

export class BaseDatabaseService {
  constructor(path, pathSegments = [], db = firestore) {
    this.ref = doc(db, path, ...pathSegments);
  }

  async create() {}

  async findAll() {
    try {
      const collection = await getDoc(this.ref);

      if (!collection.exists()) {
        throw new Error("Document Not Found");
      }

      return collection.data();
    } catch (err) {
      throw err;
    }
  }

  async findOne() {}

  async update() {}

  async delete() {}
}

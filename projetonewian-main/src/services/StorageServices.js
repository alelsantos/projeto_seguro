import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { storage } from "../configs/Firebase/Storage";
import { File } from "../utils/File";

export const StorageServices = {
  uploadImage: async (
    uri,
    node = `file - ${new Date().toISOString()}.jpg`
  ) => {
    const file = new File(uri)
    const blob = await file.toBlob();

    const uploadedFile = await uploadBytes(ref(storage, node), blob, {
      contentType: "image/jpeg",
    });
    const downloadURL = await getDownloadURL(uploadedFile.ref);
    return downloadURL;
  },
};

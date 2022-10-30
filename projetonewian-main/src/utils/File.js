export class File {

  constructor(uri) {
    this.uri = uri;
  }

  async toBlob() {
    const blobFile = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(new Error("Erro ao carregar arquivo."));
      xhr.responseType = "blob";
      xhr.open("GET", this.uri, true);
      xhr.send(null);
    });

    return blobFile;
  }
}

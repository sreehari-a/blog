import Pondicherry from "../posts/pondicherry";

export const postConfig: any = {
  1: {
    textFile: Pondicherry.TextContent,
    photoFiles: Pondicherry.getPhotos(),
  },
};

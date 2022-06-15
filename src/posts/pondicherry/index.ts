import importAll from "../../utils/importAll";
import TextContent from "./content.txt";


function getPhotos() {
  const images = importAll(
    require.context("./photos", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(images);
  return images;
}
export default {
  getPhotos,
  TextContent,
};

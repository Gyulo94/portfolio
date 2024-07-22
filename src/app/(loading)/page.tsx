import { Ellipsis } from "react-css-spinners";
import "./style.css";

export default function Loading() {
  return (
    <div id="loading-wrapper">
      <Ellipsis color="#7925d3" size={150} />
    </div>
  );
}

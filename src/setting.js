import { useState } from "react";
import Webcam from "react-webcam";
export default function WebcamSnap() {
  const [state,setState] = useState()
  return (
    <div>
      <h2>WEBCAM</h2>
      <input />
      {/* <Webcam audio={true} /> */}
    </div>
  );
}

import React from "react";

import Lottie from "react-lottie-player";

export default function Animation(props) {
  return (
    <Lottie loop animationData={props.lottieJson} play style={props.style} />
  );
}

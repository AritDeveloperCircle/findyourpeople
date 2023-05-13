import React from "react";
import CustomizableAvatar from "./customavatar/CustomizableAvatar";

function CustomizableAside({
  asideCustomClass,
  src,
  height,
  width,
  alt,
  headerText,
  paragraphText,
}) {
  return (
    <div className={asideCustomClass}>
      <CustomizableAvatar src={src} height={height} width={width} alt={alt} />
      <h2>{headerText}</h2>
      <p>{paragraphText}</p>
    </div>
  );
}

export default CustomizableAside;

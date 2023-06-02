import React from "react";
import CustomizableAvatar from "./customavatar/CustomizableAvatar";

function CustomizableAside({
  asideCustomClass,
  avatarCustomClass,
  src,
  height,
  width,
  alt,
  headerText,
  spanText,
  paragraphText,
  headerClassName,
  spanClassName,
  paragraphClassName,
}) {
  return (
    <div className={asideCustomClass}>
      <CustomizableAvatar
        src={src}
        height={height}
        width={width}
        alt={alt}
        avatarCustomClass={avatarCustomClass}
      />
      <h2 className={headerClassName}>
        {headerText}
        <span className={spanClassName}>{spanText}</span>
      </h2>
      <p className={paragraphClassName}>{paragraphText}</p>
    </div>
  );
}

export default CustomizableAside;

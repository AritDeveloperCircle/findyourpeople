import React from "react";
import CustomizableAvatar from "../common/customavatar/CustomizableAvatar";

function LoginAside({
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
      <h1 className={headerClassName}>
        {headerText}
        <span className={spanClassName}>{spanText}</span>
      </h1>
      <p className={paragraphClassName}>{paragraphText}</p>
      <CustomizableAvatar
        src={src}
        height={height}
        width={width}
        alt={alt}
        avatarCustomClass={avatarCustomClass}
      />
    </div>
  );
}

export default LoginAside;




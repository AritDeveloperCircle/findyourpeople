import Image from "next/image";

function CustomizableAvatar({
  avatarCustomClass,
  src,
  height,
  width,
  alt,
  avatarImage,
}) {
  return (
    <div className={avatarCustomClass}>
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
        className={avatarImage}
      />
    </div>
  );
}

export default CustomizableAvatar;

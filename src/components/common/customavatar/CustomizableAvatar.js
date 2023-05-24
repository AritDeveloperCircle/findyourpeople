import Image from "next/image";

function CustomizableAvatar({ avatarCustomClass, src, height, width, alt }) {
  return (
    <div className={avatarCustomClass}>
      <Image src={src} height={height} width={width} alt={alt} />
    </div>
  );
}

export default CustomizableAvatar;

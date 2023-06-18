import CustomizableAvatar from "./CustomizableAvatar";

function InfoCard({
  name,
  twitter,
  linkedin,
  avatarCustomClass,
  avatarImage,
  src,
  height,
  width,
  alt,
}) {
  return (
    <div>
      <div className={`${avatarCustomClass} relative `}>
        <CustomizableAvatar
          src={src}
          height={height}
          width={width}
          alt={alt}
          avatarCustomClass={avatarCustomClass}
          className={avatarImage}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{ clipPath: "circle(50%)" }}
        ></div>
      </div>

      <p className="text-semibold">{name}</p>
      <p>
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {twitter}
        </a>
      </p>
      <p>
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {name}
        </a>
      </p>
    </div>
  );
}

export default InfoCard;

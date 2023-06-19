import CustomizableAvatar from "./CustomizableAvatar";

function InfoCard({
  name,
  twitter,
  linkedin,

  avatarImage,
  src,
  height,
  width,
  alt,
}) {
  return (
    <div>
      <div>
        <CustomizableAvatar
          src={src}
          height={height}
          width={width}
          alt={alt}
          avatarCustomClass="flex justify-center"
          avatarImage="rounded-full"
          //   className={avatarImage}
        />
      </div>

      <p className="font-medium mb-1 text-center">{name}</p>
      <p className="text-center">
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {twitter}
        </a>
      </p>
      <p className="text-center">
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

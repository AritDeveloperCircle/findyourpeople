import Image from 'next/image'
function CustomizableAvatar({
  customClass,
  src,
  height,
  width,
  alt,
  ...props
}) {
  return (
    <div className={customClass}>
      <Image {...props} src={src} height={height} width={width} alt={alt} />
    </div>
  )
}

export default CustomizableAvatar

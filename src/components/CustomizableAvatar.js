import Image from 'next/image'
function CustomizableAvatar({ src, height, width, alt, ...props }) {
  return (
    <div>
      <Image {...props} src={src} height={height} width={width} alt={alt} />
    </div>
  )
}

export default CustomizableAvatar

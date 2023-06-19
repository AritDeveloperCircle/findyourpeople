import Image from "next/image";

const Loading = () => {
  const SPINNER_WIDTH = 50;
  const SPINNER_HEIGHT = 50;
  const Spinner = "/icons8-preloader-64.png";
  return (
    <div className="flex justify-center items-center  h-min p-12 my-44">
      <Image
        src={Spinner}
        alt="loading icon"
        className="animate-spin h-12 w-12"
        width={SPINNER_WIDTH}
        height={SPINNER_HEIGHT}
      />
    </div>
  );
};

export default Loading;

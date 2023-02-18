import Image from "next/image";

type props = {
  src: string;
  width: number;
  quality: number | 75;
};

const myLoader = ({ src, width, quality }: props) => {
  return `https://example.com/${src}?w=${width}&q=${quality}`;
};

const ImageContent = () => {
  return (
    <div>
      <Image
        // loader={myLoader}
        src="/images/container.png"
        alt="image"
        width={675.68}
        height={919}
      />
    </div>
  );
};

export default ImageContent;

import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { ImgContainer } from "./ImageRenderer.styles";

interface ImageRendererProps {
  alt: string;
  src: string;
}

const ImageRenderer = ({ alt, src }: ImageRendererProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (src.match(/.mp4$/)) {
    return (
      <ImgContainer className={inView ? "imgContainerAnim" : ""} ref={ref}>
        <video muted autoPlay src={inView ? src : ""}></video>
      </ImgContainer>
    );
  }

  return (
    <Link href={src}>
      <a target="_blank" rel="noopener noreferrer">
        <ImgContainer className={inView ? "imgContainerAnim" : ""} ref={ref}>
          <img srcSet={`${src} 2x`} alt={alt} />
        </ImgContainer>
      </a>
    </Link>
  );
};

export default ImageRenderer;

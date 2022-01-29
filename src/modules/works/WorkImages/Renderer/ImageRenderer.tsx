import { Box, HTMLChakraProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ClassAttributes, ComponentType, ImgHTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";
import { ReactMarkdownNames, ReactMarkdownProps } from "react-markdown/lib/ast-to-react";

// @ts-ignore
const MotionVideo = motion<HTMLChakraProps<"video">>(Box);

type ImageRendererFunction =
  | ReactMarkdownNames
  | ComponentType<
      ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement> & ReactMarkdownProps
    >;

const ImageRenderer: ImageRendererFunction = ({ alt, src }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  if (src?.match(/.mp4$/)) {
    return (
      <Box
        _hover={{
          transform: "scale(1.03)",
          boxShadow: "0px 5px 14px 0 rgba(97, 88, 97, 0.05)",
        }}
        transition="background-color 0.25s ease-in, transform 0.25s cubic-bezier(0.37, 1.05, 1, 1), box-shadow 0.1s ease;"
        borderRadius="3px"
        boxSizing="border-box"
        className={inView ? "imgContainerAnim" : ""}
        margin={{ base: "0 0", lg: "25px 0" }}
        maxWidth="100%"
        padding={{ base: "4px 0px", md: "10px 20px", lg: "auto" }}
        transform="translateY(80px)"
        sx={{
          ".imgContainerAnim": {
            transform: "translateY(0)",
          },
          ".imgContainerAnim img": {
            opacity: 1,
            transform: "scale(1) translateY(0)",
          },
          "img, video": {
            transition:
              "background-color 0.3s ease-in, transform 0.4s cubic-bezier(0.37, 1.05, 1, 1), opacity 0.2s ease-in",
            opacity: 0.8,
            maxWidth: "100%",
            boxShadow: "0px 1px 19px rgba(0, 0, 0, 0.05), 0px 1px 9px rgba(0, 0, 0, 0.06)",
          },
          "@media screen and (max-width: 600px)": {
            "img, video": {
              margin: "0 0",
              borderRadius: "3px",
            },
          },
        }}
        ref={ref}
      >
        <MotionVideo as="video" muted autoPlay src={inView ? src : ""} />
        {/* <motion.video muted autoPlay src={inView ? src : ""}></motion.video> */}
      </Box>
    );
  }

  return (
    <Link href={src!}>
      <a target="_blank" rel="noopener noreferrer">
        <Box
          _hover={{
            transform: "scale(1.03)",
            boxShadow: "0px 5px 14px 0 rgba(97, 88, 97, 0.05)",
          }}
          transition="background-color 0.25s ease-in, transform 0.25s cubic-bezier(0.37, 1.05, 1, 1), box-shadow 0.1s ease;"
          borderRadius="3px"
          boxSizing="border-box"
          className={inView ? "imgContainerAnim" : ""}
          margin={{ base: "0 0", lg: "25px 0" }}
          maxWidth="100%"
          padding={{ base: "4px 0px", md: "10px 20px", lg: "auto" }}
          transform="translateY(80px)"
          sx={{
            ".imgContainerAnim": {
              transform: "translateY(0)",
            },
            ".imgContainerAnim img": {
              opacity: 1,
              transform: "scale(1) translateY(0)",
            },
            "img, video": {
              transition:
                "background-color 0.3s ease-in, transform 0.4s cubic-bezier(0.37, 1.05, 1, 1), opacity 0.2s ease-in",
              opacity: 0.8,
              maxWidth: "100%",
              boxShadow: "0px 1px 19px rgba(0, 0, 0, 0.05), 0px 1px 9px rgba(0, 0, 0, 0.06)",
            },
            "@media screen and (max-width: 600px)": {
              "img, video": {
                margin: "0 0",
                borderRadius: "3px",
              },
            },
          }}
          ref={ref}
        >
          <img srcSet={`${src} 2x`} alt={alt} />
        </Box>
      </a>
    </Link>
  );
};

export default ImageRenderer;

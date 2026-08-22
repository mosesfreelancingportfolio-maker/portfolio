import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

const components: MDXComponents = {
  img: (props) => {
    const { alt = "Case study image", ...rest } = props as ImageProps;
    return (
      <Image
        sizes="100vw"
        src={rest.src}
        alt={alt}
        width={rest.width ?? 1200}
        height={rest.height ?? 800}
        style={{ width: "100%", height: "auto" }}
      />
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
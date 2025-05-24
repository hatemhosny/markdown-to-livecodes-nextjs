import createMDX from "@next/mdx";
import remarkLivecodes from "remark-livecodes";

const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      [
        remarkLivecodes,
        {
          /* options */
        },
      ],
    ],
  },
});

// @ts-expect-error export
export default withMDX(nextConfig);

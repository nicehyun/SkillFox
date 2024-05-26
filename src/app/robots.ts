import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.NODE_ENV === "production" ? "https://skill-analysis-fe.vercel.app" : "http://localhost:3000"}`,
  };
}

import { MetadataRoute } from "next";

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const classifications = ["FE", "BE", "DE", "DA", "ML"];
const paths = [
  "skillFrequency",
  "resion1Fenquency",
  "experienceRangeFenquency",
  "educationFenquency",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  classifications.forEach((classification) => {
    paths.forEach((path) => {
      urls.push({
        url: `${baseUrl}/${classification}/${path}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "weekly",
        priority: 1,
      });
    });
  });

  return urls;
}

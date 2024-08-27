import { BASE_URL } from "./config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

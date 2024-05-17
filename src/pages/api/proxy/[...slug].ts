import type { NextApiRequest, NextApiResponse } from "next";
import { createProxyMiddleware } from "http-proxy-middleware";
import { API_KEY, APT_URL } from "@/shared/const/api";

const proxy = createProxyMiddleware<NextApiRequest, NextApiResponse>({
  target: APT_URL as string,
  pathRewrite: {
    "^/api/proxy/": "/",
  },
  changeOrigin: true,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
  secure: false,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    proxy(req, res, (err: any) => {
      if (err) {
        reject(err);
      }

      return resolve(res);
    });
  });
}

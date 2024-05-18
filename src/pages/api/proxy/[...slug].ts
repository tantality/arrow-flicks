import type { NextApiRequest, NextApiResponse } from "next";
import { createProxyMiddleware } from "http-proxy-middleware";
import { API_KEY, APT_URL } from "@/shared/const/api";
import { validateMovieListQueryParams } from "./lib/validation/movies";
import { BadRequestException } from "./errors/bad-request";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const isRequestToGetMovieList = req.url?.includes("discover/movie");
    if (isRequestToGetMovieList) {
      validateMovieListQueryParams(req);
    }

    return new Promise((resolve, reject) => {
      proxy(req, res, (err: any) => {
        if (err) {
          reject(err);
        }

        return resolve(res);
      });
    });
  } catch (e) {
    if (e instanceof BadRequestException) {
      return res.status(e.statusCode).json(e);
    }

    return res.status(500).json(e);
  }
}

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

export default function MiddlewareNotFoundError(request: NextRequest) {
  const handle = createMiddleware({
    ...routing,
    localePrefix: "never",
  });

  const response = handle(request);

  return response;
}

export const config = {
  matcher: [],
};

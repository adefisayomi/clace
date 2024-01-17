import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Layout from "./sections/layout/layout";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  // { rel: "preconnect", href: "https://fonts.googleapis.com" },
  // { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: 'use-credentials' },
  // { rel: 'stylesheet',href: 'https://fonts.cdnfonts.com/css/helvetica-neue-5'},
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

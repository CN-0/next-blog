import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => NProgress.start();

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function Layout({ children, title }) {
  return (
    <div className="root">
      <Head>
        <title>Portfolio</title>
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hire me</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </header>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div className="main">{children}</div>
      <footer>&copy; Kongara {new Date().getFullYear()}</footer>
      <style jsx>
        {`
          .root {
            display: flex;
            width: 100%;
            height: 100vh;
            flex-direction: column;
          }
          header {
            background-color: darksalmon;
            padding: 20px 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;
            font-weight: 600;
          }
          a {
            text-decoration: none;
            color: #fff;
            margin: 0px 20px;
            cursor: pointer;
          }
          a:hover {
            color: #ccc;
          }
          .main {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: center;
            align-items: center;
          }
          footer {
            background-color: darksalmon;
            color: #fff;
            text-align: center;
            padding: 5px;
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            margin: 0;
            padding: 0;
            font-size: 18px;
          }
        `}
      </style>
    </div>
  );
}

export default Layout;

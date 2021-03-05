import Layout from "../components/Layout";
import Link from "next/link";

function blog() {
  return (
    <Layout title="Blog">
      <ol>
        <li>
          <Link as="/react-post" href="/post?title=react post">
            <a>React Post</a>
          </Link>
        </li>
        <li>
          <Link as="/angular-post" href="/post?title=angular post">
            <a>Angular Post</a>
          </Link>
        </li>
        <li>
          <Link as="/vue-post" href="/post?title=vue post">
            <a>Vue Post</a>
          </Link>
        </li>
      </ol>
    </Layout>
  );
}

export default blog;

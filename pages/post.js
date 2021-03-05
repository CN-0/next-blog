import Layout from "../components/Layout";
import { withRouter } from "next/router";

function post(props) {
  return (
    <Layout title={props.router.query.title}>
      <p style={{ width: "80vw" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut corporis,
        ducimus itaque fugiat iste numquam qui ipsum vitae voluptates nisi,
        magni explicabo quasi nemo adipisci quam quas quibusdam molestiae
        veniam.
      </p>
    </Layout>
  );
}

export default withRouter(post);

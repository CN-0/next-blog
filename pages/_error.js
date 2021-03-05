import Layout from "../components/Layout";

const Error = (props) => {
  return (
    <Layout title="Error">
      <h2>
        {props.statusCode
          ? `the request returns a status code of ${props.statusCode}`
          : "This page doesn't exist"}
      </h2>
    </Layout>
  );
};

export default Error;

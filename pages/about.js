import Layout from "../components/Layout";
import Error from "./_error";

const About = (props) => {
  const { data, statusCode } = props;
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout title="About">
      <h2>{data.name}</h2>
      <img
        src={data.avatar_url}
        alt="Coding"
        style={{ height: 250, borderRadius: "50%" }}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/codingnoob0");
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();

  return {
    props: {
      data,
      statusCode,
    },
  };
}

export default About;

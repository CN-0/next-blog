import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout title="Home">
      <h2>Hi Me</h2>
      <img
        style={{ height: 450, width: 700, objectFit: "cover" }}
        src="static/mountains.jpg"
        alt="mountains"
      />
    </Layout>
  );
};

export default Index;

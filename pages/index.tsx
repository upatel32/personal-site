import Footer from "../components/Footer/Footer";
import { createClient } from "urql";
import Header from "../components/Header/Header";
import { profileEnd } from "console";

const Home = ({ profile }) => {
  console.log(profile);
  return (
    <div>
      <Header />
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <Footer />
    </div>
  );
};

const UserQuery = `
query {
  user(login: "upatel32") {
    id
    websiteUrl
    bio
    company
    email
  }
}
`;

export async function getStaticProps() {
  const client = createClient({
    url: "https://api.github.com/graphql",
    fetchOptions: {
      headers: { authorization: `Bearer ${process.env.GITHUB_PAC}` },
    },
  });
  const profile = await client.query(UserQuery).toPromise();

  console.log(profile);
  return {
    props: {
      profile: profile.data,
    },
  };
}

export default Home;

import React from 'react';
import { createClient } from 'urql';

const Home = ({ profile }: { profile: any }) => (
  <div>
    <pre>{JSON.stringify(profile, null, 2)}</pre>
  </div>
);

const UserQuery = `
query {
  user(login: "upatel32") {
    websiteUrl
    bio
    company
    email
  }
}
`;

export async function getStaticProps() {
  const client = createClient({
    url: 'https://api.github.com/graphql',
    fetchOptions: {
      headers: { authorization: `Bearer ${process.env.GITHUB_PAC}` }
    }
  });
  const profile = await client.query(UserQuery).toPromise();
  return {
    props: {
      profile: profile.data
    }
  };
}

export default Home;

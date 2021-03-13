import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import JokeList from '../../components/JokeList';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <JokeList />
    </>
  );
}

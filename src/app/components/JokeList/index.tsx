import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Joke from './Joke';
const StyledJokeListWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  height: 80%;
`;
const StyledJokeListSidebar = styled.div`
  background: #9575cd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  text-align: center;
  box-shadow: 14px 14px 28px #424141;
`;
const StyledJokeListTitle = styled.h1`
  font-size: 4rem;
  margin: 2rem;
  color: white;
  font-weight: 300;
  letter-spacing: 0.6rem;
  span {
    font-weight: 700;
    letter-spacing: 0;
  }
`;
const StyledJokes = styled.div`
  height: 90%;
  background-color: white;
  align-self: center;
  width: 70%;
  overflow: scroll;
  box-shadow: 14px 14px 28px #424141;
`;
interface IJoke {
  text: string;
  votes: number;
}
const JokeList = ({ numJokesToGet = 10 }) => {
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const getJokes = async () => {
    let newJokes = [] as any;
    while (newJokes.length < numJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      newJokes.push({ text: res.data.joke, votes: 0 });
    }
    setJokes(newJokes);
  };
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <>
      <StyledJokeListWrapper>
        <StyledJokeListSidebar>
          <StyledJokeListTitle>
            <span>Dad</span> jokes
          </StyledJokeListTitle>
          <button>New Jokes</button>
        </StyledJokeListSidebar>
        <StyledJokes>
          {jokes?.length > 0 &&
            jokes?.map((j, jokeIndex) => (
              <Joke votes={j.votes} text={j.text} />
            ))}
        </StyledJokes>
      </StyledJokeListWrapper>
    </>
  );
};

export default JokeList;

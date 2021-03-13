import React from 'react';
import styled from 'styled-components';
const StyledJoke = styled.div``;
const StyledJokeButtons = styled.div``;
const StyledJokeText = styled.div``;
const Joke = ({ text, votes }) => {
  return (
    <StyledJoke>
      <StyledJokeButtons>
        <i className="fa fa-arrow-up"></i>
        <span>{votes}</span>
        <i className="fa fa-arrow-down"></i>
      </StyledJokeButtons>
      <StyledJokeText>{text}</StyledJokeText>
    </StyledJoke>
  );
};

Joke.propTypes = {};

export default Joke;

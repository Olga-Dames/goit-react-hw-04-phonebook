import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Form = styled.form`
  width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  border: 2px solid #827081;
  background-color: #cda2cb;
`;

export const Input = styled.input`
  margin: 0 auto;
  border-radius: 4px;
  padding: 8px 18px;
  border: 1px solid #827081;
  background-color: #f1e4f0;
  outline: transparent;
`;

const Explode = keyframes`
0% {
  transform: scale(0);
}
25% {
  transform: scale(1.5);
  opacity: 1;
}
100% {
  transform: scale(50);
  opacity: 0;
}
`;

export const Button = styled.button`
  position: relative;
  border-radius: 5px;
  padding: 10px 15px;
  border: 1px solid #827081;
  background-color: #f1e4f0;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  color: #827081;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
    transform: scale(0);
  }

  &:hover:after {
    animation: ${Explode} 0.5s ease-out;
  }
`;

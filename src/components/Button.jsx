import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 160px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  appearance: none;
  background-color: transparent;
  border-radius: 0px;
  border: none;
  box-sizing: border-box;
  color: #3c3c3c;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.125rem;
  font-weight: 500;
  justify-content: center;
  margin: 0px;
  min-width: 64px;
  outline: 0px;
  overflow: hidden;
  padding: 12px 20px;
  position: relative;
  text-decoration: none;
  text-overflow: ellipsis;
  text-transform: uppercase;
  transition: none 0s ease 0s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  clip-path: polygon(
    0px 0px,
    100% 0px,
    100% calc(100% - 16px),
    calc(100% - 16px) 100%,
    0 100%,
    0 16px,
    16px 0
  );

  div:first-of-type {
    background: #2b5339;
  }
`;

const Clip = styled.div`
  inset: 0px;
  clip-path: polygon(
    0px 0px,
    100% 0px,
    100% calc(100% - 16px),
    calc(100% - 16px) 100%,
    0px 100%,
    0px calc(100% - 1px),
    calc(100% - 16.8284px) calc(100% - 1px),
    calc(100% - 1px) calc(100% - 16.8284px),
    calc(100% - 1px) 1px,
    16.8284px 1px,
    1px 16.8284px,
    1px 100%,
    0px 100%
  );
  position: absolute;
`;

export default function Button({ children }) {
  return (
    <ButtonContainer>
      <Clip />
      {children}
    </ButtonContainer>
  );
}

/** @jsxRuntime classic */ // バージョンの関係などでエラーが出てしまう時は、こちらを書く
/** @jsx jsx */ // jsxを使用するときに必ず記載
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px blue;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-- Emotion --</p>
      <SButton>Fight!</SButton>
    </div>
  );
};

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
`;

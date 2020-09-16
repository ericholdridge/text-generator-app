/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Title = () => {
  return (
    <div css={styles}>
      <h1>React Text Generator</h1>
    </div>
  );
};

const styles = css`
  width: 100%;
  background: orange;
  text-align: center;
  padding: 20px 0;
`;

export default Title;

import styled from "styled-components";

export default styled.div`
  padding: 16px;
  display: flex;
  flex-flow: column nowrap;
  @supports (gap: 8px) {
    gap: 8px;
  }

  @supports not (gap: 8px) {
    > * + * {
      margin-top: 8px;
    }
  }
`;

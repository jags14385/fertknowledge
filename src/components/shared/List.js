import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 0;
  margin: 0 0 100px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: block;
  padding: 3rem 5rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top-width: 0;
  &:first-of-type {
    border-top-width: 1px;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  &:last-of-type {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
}
`;

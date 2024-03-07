import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  padding: 20px 0;
  border-bottom: solid 2px blue;
 
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2%;
`;

export const Link = styled(NavLink)`
  width: 80px;
  height: 45px;
  display: flex;
  aling-items: center;
  justify-content: center;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: cornsilk;

  &.active {
    color: white;
    background-color: blue;
  }

  > p {
    margin: auto;
  }
`;
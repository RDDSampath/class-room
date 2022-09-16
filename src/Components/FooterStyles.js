import styled from 'styled-components';
   
export const Box = styled.div`
padding: 5.21vw;
background: #152566;
width: 100%;
  
   
  @media (max-width: 65.10vw) {
    padding: auto;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 65.10vw;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 3.91vw;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(12.04vw, 1fr));
  grid-gap: 1.30vw;
   
  @media (max-width: 65.10vw) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(13.02vw, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 1.30vw;
  font-size: 1.17vw;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 1.56vw;
  color: #fff;
  margin-bottom: 2.60vw;
  font-weight: bold;
`;
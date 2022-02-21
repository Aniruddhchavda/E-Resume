import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    padding : 0;
    text-align : center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const SectionTitle = styled.h1`
  font-weight: 800;
  font-size: ${(props) => props.main ? '70px' : '56px'};
  line-height: ${(props) => props.main ? '80px' : '56px'};
  width: 100%;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '40px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: 40px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
    text-align:center;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 40px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '36px' : '32px'};
    line-height: ${(props) => props.main ? '45px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '0px 0 8px' : '0'};
    max-width: 100%;
    text-align:center;
  }
`

export const SectionText = styled.p`
  max-width: 450px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left : 0;
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
    text-align : center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left : 0;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
    text-align : center;
  }
`

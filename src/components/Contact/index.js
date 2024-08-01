import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 0;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Text = styled.div`
  margin-top: 8px;
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const LogoContainer = () => {
  return (
    <OuterContainer id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <Container>
          <IconWrapper>
            <Icon src="https://www.svgrepo.com/show/313155/pin.svg" alt="Home" />
            <Text>Mumbai, Maharashtra</Text>
          </IconWrapper>
          <IconWrapper>
            <Icon src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" alt="Email" />
            <Text>aaditi.manjalkar2911@gmail.com</Text>
          </IconWrapper>
          <IconWrapper>
            <Icon src="https://www.svgrepo.com/show/262883/telephone-call.svg " alt="Contact" />
            <Text>+91-8454086811</Text>
          </IconWrapper>
        </Container>
      </Wrapper>
    </OuterContainer>
  );
};

export default LogoContainer;

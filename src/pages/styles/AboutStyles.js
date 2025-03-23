import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #1a202c;
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  max-width: 768px;
  width: 100%;
  background-color: #2d3748;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border: 1px solid #4a5568;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #63b3ed;

  span {
    color: #68d391;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;

  &.subtitle {
    font-style: italic;
    color: #a0aec0;
  }

  &.typing {
    font-family: monospace;
    font-weight: bold;
    color: #f6e05e;
  }
`;

export const Buttons = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
  justify-content: center;

  .btn {
    padding: 10px 20px;
    background: #4299e1;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background 0.3s;

    &:hover {
      background: #3182ce;
    }

    &.btn-contact {
      background: #48bb78;

      &:hover {
        background: #38a169;
      }
    }
  }
`;

export const SocialLinks = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  justify-content: center;

  a {
    color: white;
    font-size: 1.8rem;
    transition: color 0.3s;

    &:hover {
      color: #63b3ed;
    }
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
  border: 3px solid #63b3ed;
`;

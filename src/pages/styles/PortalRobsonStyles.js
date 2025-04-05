import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9fafb;
  color: #111827;
  line-height: 1.6;
`;

export const Header = styled.header`
  background-color: #1f2937;
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 3;
`;

export const Sidebar = styled.aside`
  flex: 1;
  background-color: #e5e7eb;
  padding: 2rem;
  border-top: 4px solid #3b82f6;
  border-radius: 8px;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1e3a8a;
`;

export const Article = styled.article`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ArticleHeader = styled.header`
  margin-bottom: 0.5rem;

  h3 {
    font-size: 1.4rem;
    color: #2563eb;
  }
`;

export const Footer = styled.footer`
  background-color: #1f2937;
  color: white;
  padding: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 4rem;
`;

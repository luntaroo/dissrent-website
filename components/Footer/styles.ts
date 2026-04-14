import styled from "styled-components";
import { bodyFont } from "../shared/mixins";

export const FooterEl = styled.footer`
  background: linear-gradient(180deg, var(--bg-subtle) 0%, var(--bg) 100%);
  color: var(--text-muted);
  border-top: 1px solid var(--border);
`;

export const Container = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 64px 32px 32px;

  @media (max-width: 900px) {
    padding: 48px 20px 24px;
  }
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.42fr);
  gap: 32px;
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BrandEyebrow = styled.span`
  ${bodyFont}
  width: fit-content;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  background: var(--primary-soft);
  border: 1px solid rgba(37, 99, 235, 0.15);
  font-size: 0.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--primary);
`;

export const BrandLogoLink = styled.a`
  display: block;
  width: min(100%, 280px);
  text-decoration: none;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.06));
  }
`;

export const BrandText = styled.p`
  ${bodyFont}
  max-width: 520px;
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.75;
`;

export const ContactCard = styled.div`
  display: grid;
  gap: 12px;
  padding: 24px;
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
`;

export const ContactLabel = styled.div`
  ${bodyFont}
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-subtle);
`;

export const ContactValue = styled.a`
  ${bodyFont}
  color: var(--text-heading);
  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--primary);
  }
`;

export const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  padding: 32px 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColTitle = styled.h4`
  ${bodyFont}
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-subtle);
  margin-bottom: 4px;
`;

export const FooterLink = styled.a`
  ${bodyFont}
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.2s;

  &:hover {
    color: var(--primary);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    color: var(--primary);
    border-color: rgba(37, 99, 235, 0.3);
    background: var(--primary-soft);
    transform: translateY(-2px);
  }
`;

export const BottomBar = styled.div`
  padding-top: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const BottomText = styled.p`
  ${bodyFont}
  color: var(--text-subtle);
  font-size: 0.82rem;
  line-height: 1.6;
`;

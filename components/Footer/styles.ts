import styled from "styled-components";
import { bodyFont } from "../shared/mixins";

export const FooterEl = styled.footer`
  background:
    radial-gradient(circle at top left, rgba(var(--gold-rgb), 0.14), transparent 24%),
    linear-gradient(180deg, var(--bg-dark-strong) 0%, #0f141d 100%);
  color: var(--text-inverse);
`;

export const Container = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 72px 32px 30px;

  @media (max-width: 900px) {
    padding: 54px 20px 24px;
  }
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.42fr);
  gap: 24px;
  margin-bottom: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const BrandEyebrow = styled.span`
  ${bodyFont}
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(var(--gold-rgb), 0.12);
  border: 1px solid rgba(var(--gold-rgb), 0.18);
  font-size: 0.62rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--gold-light);
`;

export const BrandLogoLink = styled.a`
  display: block;
  width: min(100%, 320px);
  text-decoration: none;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 24px 44px rgba(0, 0, 0, 0.22));
  }
`;

export const BrandText = styled.p`
  ${bodyFont}
  max-width: 560px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.96rem;
  line-height: 1.8;
`;

export const ContactCard = styled.div`
  display: grid;
  gap: 10px;
  padding: 24px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

export const ContactLabel = styled.div`
  ${bodyFont}
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.42);
`;

export const ContactValue = styled.a`
  ${bodyFont}
  color: var(--text-inverse);
  font-size: 0.96rem;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
`;

export const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 26px 0 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ColTitle = styled.h4`
  ${bodyFont}
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.38);
  margin-bottom: 6px;
`;

export const FooterLink = styled.a`
  ${bodyFont}
  color: rgba(255, 255, 255, 0.66);
  text-decoration: none;
  font-size: 0.94rem;
  transition: color 0.2s;

  &:hover {
    color: var(--gold-light);
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
  color: rgba(255, 255, 255, 0.72);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    color: var(--gold-light);
    border-color: rgba(var(--gold-rgb), 0.28);
    background: rgba(var(--gold-rgb), 0.12);
    transform: translateY(-1px);
  }
`;

export const BottomBar = styled.div`
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const BottomText = styled.p`
  ${bodyFont}
  color: rgba(255, 255, 255, 0.36);
  font-size: 0.82rem;
  line-height: 1.6;
`;

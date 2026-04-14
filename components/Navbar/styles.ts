import styled from "styled-components";
import { bodyFont } from "../shared/mixins";

export const Nav = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  padding: 10px 16px 0;
  pointer-events: none;

  @media (max-width: 640px) {
    padding: 8px 10px 0;
  }
`;

export const NavInner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  min-height: 58px;
  padding: 8px 10px 8px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: rgba(10, 15, 22, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  box-shadow: 0 24px 60px rgba(9, 12, 17, 0.35);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  pointer-events: auto;

  @media (max-width: 768px) {
    min-height: 52px;
    padding: 6px 8px 6px 12px;
    gap: 8px;
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  text-decoration: none;
`;

export const BrandMark = styled.span`
  display: flex;
  align-items: center;
  width: clamp(116px, 11.5vw, 152px);
  flex-shrink: 0;
  transform: translateY(1px);

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 12px 26px rgba(0, 0, 0, 0.26));
  }

  @media (max-width: 560px) {
    width: 118px;
  }
`;

export const BrandText = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const BrandTagline = styled.span`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(var(--gold-rgb), 0.12);
  border: 1px solid rgba(var(--gold-rgb), 0.18);
  font-size: 0.56rem;
  font-weight: 800;
  color: rgba(247, 248, 251, 0.88);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  line-height: 1;
  white-space: nowrap;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  ${bodyFont}
  font-size: 0.76rem;
  font-weight: 600;
  color: ${({ $active }) => ($active ? "var(--text-inverse)" : "rgba(247, 248, 251, 0.64)")};
  padding: 8px 11px;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.08)" : "transparent")};
  border: 1px solid ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.08)" : "transparent")};
  transition: color 0.2s, background 0.2s, border-color 0.2s;
  text-decoration: none;

  &:hover {
    color: var(--text-inverse);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const CtaLink = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 86px;
  padding: 0 14px;
  height: 40px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #0b1820;
  font-size: 0.78rem;
  font-weight: 800;
  box-shadow: 0 14px 28px rgba(var(--gold-rgb), 0.24);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 34px rgba(var(--gold-rgb), 0.3);
  }

  @media (max-width: 560px) {
    min-width: 92px;
    padding: 0 14px;
  }
`;

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 6px 10px 6px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 0.2s, background 0.2s, transform 0.2s;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(var(--gold-rgb), 0.45);
    background: rgba(var(--gold-rgb), 0.12);
  }
`;

export const PhoneIconWrap = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(var(--gold-rgb), 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const PhoneIcon = styled.i`
  font-size: 0.66rem;
  color: var(--gold-light);
`;

export const PhoneText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const PhoneLabel = styled.span`
  ${bodyFont}
  font-size: 0.56rem;
  color: rgba(247, 248, 251, 0.42);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1;
`;

export const PhoneNum = styled.span`
  ${bodyFont}
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--text-inverse);
  line-height: 1;
`;

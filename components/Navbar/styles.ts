import styled from "styled-components";
import { bodyFont } from "../shared/mixins";

export const Nav = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  padding: 12px 16px 0;

  @media (max-width: 640px) {
    padding: 10px 12px 0;
  }
`;

export const NavInner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  min-height: 56px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  pointer-events: auto;

  @media (max-width: 768px) {
    min-height: 52px;
    padding: 8px 14px;
    gap: 12px;
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  text-decoration: none;
`;

export const BrandMark = styled.span`
  display: flex;
  align-items: center;
  width: clamp(120px, 11.5vw, 156px);
  flex-shrink: 0;
  transform: translateY(1px);

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
  }

  @media (max-width: 560px) {
    width: 120px;
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
  min-height: 32px;
  padding: 0 12px;
  border-radius: var(--radius-full);
  background: var(--primary-soft);
  border: 1px solid rgba(37, 99, 235, 0.15);
  font-size: 0.54rem;
  font-weight: 800;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  line-height: 1;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  ${bodyFont}
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ $active }) => ($active ? "var(--primary)" : "var(--text-muted)")};
  padding: 8px 12px;
  border-radius: var(--radius-full);
  background: ${({ $active }) => ($active ? "var(--primary-soft)" : "transparent")};
  border: 1px solid ${({ $active }) => ($active ? "rgba(37, 99, 235, 0.15)" : "transparent")};
  transition: color 0.2s, background 0.2s, border-color 0.2s;
  text-decoration: none;

  &:hover {
    color: var(--primary);
    background: var(--primary-soft);
    border-color: rgba(37, 99, 235, 0.15);
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const CtaLink = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 92px;
  padding: 0 16px;
  height: 42px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  font-size: 0.78rem;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.32);
  }

  @media (max-width: 560px) {
    min-width: 88px;
    padding: 0 14px;
  }
`;

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 8px 12px 8px 10px;
  border-radius: var(--radius-full);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  transition: border-color 0.2s, background 0.2s, transform 0.2s;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(37, 99, 235, 0.3);
    background: var(--primary-soft);
  }
`;

export const PhoneIconWrap = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--primary-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const PhoneIcon = styled.i`
  font-size: 0.7rem;
  color: var(--primary);
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
  font-size: 0.54rem;
  color: var(--text-subtle);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1;
`;

export const PhoneNum = styled.span`
  ${bodyFont}
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-heading);
  line-height: 1;
`;

import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT, PRICE_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice, { Token } from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import InfoLinks from "./InfoLinks";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps { }

const Container = styled.div`
  flex: none;
  padding: 8px 0;
  background: ${({ theme }) => (theme.isDark ? "#040404" : "#E6FDFF")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // border-top: solid 1px #42d784;
  // border-bottom: solid 1px #42d784;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
  width: 100%;
`;

const PriceGroup = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 8px;
`;

const Price = styled.div`
  flex: 1;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${PRICE_ENTRY_HEIGHT}px;
  padding: 8px;
  border-radius: 4px;
  background-color: #6dd7840f;
  margin: 0 2px;
  // border-bottom: 1px solid #42BE71;
`;

const FantomPrice = styled(Price)`
  background-color: #6dd7840f;
  // a {
  //   color: #1C9BCA;
  // }
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  ethPriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <SocialEntry>
          <InfoLinks />
        </SocialEntry>
      </Container>
      <PriceGroup>
        <Price>
          <CakePrice cakePriceUsd={cakePriceUsd} />
        </Price>
        <FantomPrice>
          <CakePrice token={Token.ETH} cakePriceUsd={ethPriceUsd} />
        </FantomPrice>
      </PriceGroup>
      <Container>
        <SocialEntry>
          <SocialLinks />
        </SocialEntry>
        {/* <SettingsEntry> */}
        {/* FOR ACTIVATE AGAIN, CHANGE THE THEME COLORS */}
        {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
        {/* <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} /> */}
        {/* </SettingsEntry> */}
      </Container>
    </>
  );
};

export default PanelFooter;

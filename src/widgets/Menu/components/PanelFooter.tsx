import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import IconButton from "../../../components/Button/IconButton";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  tablePriceUsd, 
  legendPriceUsd, 
  squirePriceUsd,
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
    <Container>
      <SocialEntry>
        {squirePriceUsd ? (
          <PriceLink href="https://pancakeswap.info/token/0x2F0D21f1B84F03fB9D60004fc206C86Be6902a32" target="_blank">
            <img
              src="https://ipfs.io/ipfs/QmSMJy9D5MXrWsKDuZLrJNoxH5Rp55mSpAUzu48zFhjYfr?filename=squire.png"
              alt="SQUIRE Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />

            <Text color="textSubtle" bold>{`$${squirePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24}>
          <img
              src="https://ipfs.io/ipfs/QmSMJy9D5MXrWsKDuZLrJNoxH5Rp55mSpAUzu48zFhjYfr?filename=squire.png"
              alt="SQUIRE Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
          </Skeleton>
        )}
      </SocialEntry>
      <SocialEntry>
        {cakePriceUsd ? (
          <PriceLink href="https://pancakeswap.info/token/0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30" target="_blank">
            <img
              src="https://ipfs.io/ipfs/QmREFZU2mdg1Sv1Q2Ma8sB63uWBN9MsJ1WULWZ1Q1vk2ND?filename=knight.png"
              alt="KNIGHT Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />

            <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24}>
          <img
              src="https://ipfs.io/ipfs/QmREFZU2mdg1Sv1Q2Ma8sB63uWBN9MsJ1WULWZ1Q1vk2ND?filename=knight.png"
              alt="KNIGHT Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
          </Skeleton>
        )}
      </SocialEntry>
      <SocialEntry>
        {legendPriceUsd ? (
          <PriceLink href="https://pancakeswap.info/token/0xDc661984735b535210CB1f52f86cc58616024192" target="_blank">
            <img
              src="https://ipfs.io/ipfs/QmdUYMd2jcqxAauh9spWr181SN8iguonMaFszWedcuwiD9?filename=legend.png"
              alt="LEGEND Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
            <Text color="textSubtle" bold>{`$${legendPriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24}>
          <img
              src="https://ipfs.io/ipfs/QmdUYMd2jcqxAauh9spWr181SN8iguonMaFszWedcuwiD9?filename=legend.png"
              alt="LEGEND Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
          </Skeleton>
        )}
      </SocialEntry>
      <SocialEntry>
        {tablePriceUsd ? (
          <PriceLink href="https://pancakeswap.info/token/0xf5a2f7418035ce76967f515f39d65719bb0453b6" target="_blank">
            <img
              src="https://ipfs.io/ipfs/QmXv83F1Qp1kv812msr2QfcHh8Uh5S1Gb1XeH5qZFS8EVV?filename=table.png"
              alt="TABLE Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
            <Text color="textSubtle" bold>{`$${tablePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24}>
          <img
              src="https://ipfs.io/ipfs/QmXv83F1Qp1kv812msr2QfcHh8Uh5S1Gb1XeH5qZFS8EVV?filename=table.png"
              alt="TABLE Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
          </Skeleton>
        )}
      </SocialEntry>
      <SettingsEntry>
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;

import React from "react";
import styled from "styled-components";
import { CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import IconButton from "../../components/Button/IconButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

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

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav, cakePriceUsd, tablePriceUsd }) => {
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
        {cakePriceUsd ? (
          <PriceLink href="https://pancakeswap.info/token/0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30" target="_blank">
            <img
              src="https://github.com/Huwonk/KnightsOfTheRoundTableBSC-uikit/blob/master/src/widgets/Menu/knight.png?raw=true"
              alt="Knights DeFi Logo"
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
              src="https://github.com/Huwonk/KnightsOfTheRoundTableBSC-uikit/blob/master/src/widgets/Menu/knight.png?raw=true"
              alt="Knights DeFi Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
          </Skeleton>
        )}
        {tablePriceUsd ? (
          <PriceLink href="https://pancakeswap.info/token/0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30" target="_blank">
            <img
              src="https://github.com/Huwonk/KnightsOfTheRoundTableBSC-uikit/blob/master/src/widgets/Menu/table.png?raw=true"
              alt="Knights DeFi Logo"
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
              src="https://github.com/Huwonk/KnightsOfTheRoundTableBSC-uikit/blob/master/src/widgets/Menu/table.png?raw=true"
              alt="Knights DeFi Logo"
              style={{
                width: "24px",
                marginRight: "8px",
              }}
            />
          </Skeleton>
        )}
        <Flex>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "24px" : 0;
            if (social.items) {
              return (
                <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;

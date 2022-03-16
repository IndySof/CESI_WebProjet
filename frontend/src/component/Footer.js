import { CellWifi, CenterFocusStrong, CenterFocusStrongOutlined, CenterFocusWeak } from "@material-ui/icons";
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>A propos</Heading>
            <FooterLink href="/terms">Mentions légales</FooterLink>
            <FooterLink href="/plan">Plan du site</FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="https://ecole-ingenieurs.cesi.fr/">CESI</FooterLink>
            <FooterLink href="mailto:maxime.goutelard@viacesi.fr">maxime.goutelard@viacesi.fr</FooterLink>
          </Column>
          <Column>
            <Heading>Réseaux</Heading>
            <FooterLink href="https://www.facebook.com/CESIingenieurs/">
              <i className="fa fa-facebook"/>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/campus_cesi">
              <i className="fa fa-instagram"/>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/school/cesiecoledingenieurs">
              <i className="fa fa-linkedin"/>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/watch?v=_qPVx1qSIDM">
              <i className="fa fa-youtube"/>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
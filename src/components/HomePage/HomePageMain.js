import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Searchbar from "../Header/Searchbar";

import HomePageCardElement from "./HomePageCardElement";
//rgba(2, 117, 216, 0.1) für Card Background
const HomePageMain = () => {
  return (
    <Container fluid={true} className="p-0" >
      <Row className="center px-5 py-5 w-75 mx-auto" style={{height: "48vh"}}>
        <Col className="text-center px-5 py-5">
          <h1 className="mb-3">Patientensuche</h1>
          <hr className="w-25 m-auto mb-3"/>
          <Searchbar formStyleClass="nontransparent-input" buttonStyleClass="nontransparent-button"
                     variantStyle="outline-secondary" inputSize="lg"/>
        </Col>
      </Row>
      <Row className="w-100" style={{backgroundColor:"rgba(39,40,44,0.1)", height: "48vh"}}>
        <Col md={6} className="px-5 py-5 d-flex h-30 w-40 justify-content-end">
          <HomePageCardElement
            extraInfo="Impfkalender 2020/2021"
            name="STIKO Impfempfehlung"
            description="Standardimpfungen für Säuglinge, Kinder, Jugendliche und Erwachsene.
              Vergleichen Sie die Impfungen ihres Patienten mit der Stiko-Impfempfehlung."
            link="/stiko-empfehlungen"
          />
        </Col>
        <Col md={6} className="px-5 py-5 d-flex h-30 w-40 justify-content-start">
          <HomePageCardElement
            extraInfo="Extra information"
            name="Generelle Übersicht"
            description="Alle Impfungen ihres Patienten auf einen Blick. Filtern Sie nach Altersstufen
              und fügen Sie neue Impfungen in den Kalender ein."
            link="generelle-uebersicht"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageMain;
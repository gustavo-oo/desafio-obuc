import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

import vancancyFields from "../enums/vacancyFields";

import donaMariaLogo from "../assets/donamaria.png";

// Create styles
const styles = StyleSheet.create({
page: {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: "20px",
},
section: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: "20px",
},
title: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: "20px",
  width: "100%",
  height: "30px",
  fontWeight: "bold",
  borderRadius: "20px",
  backgroundColor: "#db717d",
  color: "white",
},
subtitle: {
  fontSize: "14px",
  fontWeight: "bold",
},
text: {
  padding: "15px 0px 15px 20px",
  fontSize: "12px",
},
image: {
  width: "150px",
  height: "auto",
  justifySelf: "center",
  paddingBottom: "15px",
},
topic: {
  alignSelf: "flex-start",
  paddingBottom: "20px",
}
});

const VacancyPdfTemplate = ({ vacancy }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={donaMariaLogo} style={styles.image} />
          <View style={styles.title}>
            <Text>Vaga: {vacancy.jobTitle}</Text>
          </View>
        </View>
        <View style={styles.section}>
          {vancancyFields.map(({ title, prop }) => (
            <View key={title} style={styles.topic}>
                <Text style={styles.subtitle}>{title}:</Text>
                <Text style={styles.text}>
                  {vacancy[prop] === "salary" ? "R$" : ""} {vacancy[prop]}
                </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default VacancyPdfTemplate;

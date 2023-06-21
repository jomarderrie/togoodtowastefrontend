import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;

const RestaurantInfoCard = ({restaurant={}}) => {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
      } = restaurant;
    
      const ratingArray = Array.from(new Array(Math.floor(rating)));
    

return (
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{uri:photos[0]}} />
        <Text>{name}</Text>
    </Card>
)
}

const styles = StyleSheet.create({
    card : {backgroundColor:"white"},
    cover : {padding:20, backgroundColor: "white"}
})

export default RestaurantInfoCard;
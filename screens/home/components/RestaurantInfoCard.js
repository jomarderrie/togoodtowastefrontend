import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { Card, IconButton } from "react-native-paper";

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
        distance = "613m",
        price = "varies",
        isClosedTemporarily = true,
        placeId,
      } = restaurant;

      const ratingArray = Array.from(new Array(Math.floor(rating)));


return (
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name}  source={{uri:photos[0]}} />
        <Text>{name}</Text>
        <AmountContainer>
          <Text>5 left</Text>
        </AmountContainer>
        <HeartIconContainer>
            <IconButton icon="heart" color="red" size={24} />
        </HeartIconContainer>

        <Card.Content>
            <Text style={styles.distance}>{distance}</Text>
        </Card.Content>
    </Card>
)
}

const styles = StyleSheet.create({
    card : {backgroundColor:"white"},
    heartIcon: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
})

const AmountContainer = styled(View)`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px;
  border-radius: 4px;
`

const HeartIconContainer = styled(View)`
  position: absolute;
  top: 16px;
  right: 16px;
`;
export default RestaurantInfoCard;

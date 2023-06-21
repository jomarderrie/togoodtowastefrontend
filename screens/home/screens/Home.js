import React, { Component, useContext, useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeArea } from '../../../shared/utility/SafeArea'
import { Search } from '../../../shared/Searchbar'
import { RestaurantList } from '../components/RestaurantList'
import { RestaurantContext } from '../../../context/store/StoreContext'
import RestaurantInfoCard from '../components/RestaurantInfoCard'

const Home =(props) => {
  const { isLoading, restaurants, error, retrieveStores } = useContext(RestaurantContext);
   
  useEffect(() => {
    // retrieveStores()
  }, [])
  
  
  return (
      <SafeArea>
        <Search/>
        {/* <RestaurantList data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        /> */}
           <RestaurantInfoCard />
        </SafeArea>
    )

}

const styles = StyleSheet.create({})

export default Home;
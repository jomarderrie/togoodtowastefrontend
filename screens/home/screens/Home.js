import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeArea } from '../../shared/utility/SafeArea'
import { Search } from '../../shared/Searchbar'

const Home =(props) => {
  
    return (
      <SafeArea>
        <Search/>
        </SafeArea>
    )

}

const styles = StyleSheet.create({})

export default Home;
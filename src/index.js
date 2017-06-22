import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './views/Home';
import WebSite from './views/WebSite';
import Left from './components/Header/Left';

Home.navigationOptions = {
  title: 'Hacker News',
  headerTitleStyle: {
    color: '#ff6600'
  }
};

WebSite.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.title,
    headerTitleStyle: {
      color: '#ff6600'
    },
    headerLeft: <Left navigation={navigation}/>
  };
};

export default StackNavigator({
  Home: { screen: Home },
  WebSite: { screen: WebSite }
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});


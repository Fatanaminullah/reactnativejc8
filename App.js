import  { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'


import AuthScreen from './src/screen/Auth/Auth'
import SharePlaceScreen from './src/screen/SharePlace/SharePlace'
import FindPlaceScreen from './src/screen/FindPlace/FindPlace'
import PlaceDetailScreen from './src/screen/PlaceDetail/PlaceDetail'

const store = configureStore()

// Register Screens
Navigation.registerComponent("jc8reactnative.AuthScreen", () => AuthScreen)

Navigation.registerComponent(
  "jc8reactnative.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc8reactnative.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'jc8reactnative.PlaceDetailScreen',
  () => PlaceDetailScreen,
  store,
  Provider
)


// Start Screens
Navigation.startSingleScreenApp({
  screen: {
    screen: 'jc8reactnative.AuthScreen',
    title: 'Login'
  }
})
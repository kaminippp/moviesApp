import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieView from './src/views/Detail';
import DiscoverView from './src/views/Discover';
import reducer from './src/reducers/movies.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/movies.js';
const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search List" component={DiscoverView} />
        <Stack.Screen name="Movie" component={MovieView} />
      </Stack.Navigator>
    </NavigationContainer>
      </Provider>
    );
  }
}
export default App;
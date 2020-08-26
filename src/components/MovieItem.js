import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';

const MovieItem = ({ movie, goToMovie, index }) => {

  const { poster_path, title, vote_average } = movie;
  return (
    <TouchableHighlight underlayColor="white" onPress={() => { goToMovie(movie) }}>
      <View style={[style.container]}>
        <Image source={{
          uri: `https://image.tmdb.org/t/p/w300${poster_path}`
        }} style={style.image}/>
        <View style={style.content}>
          <View style={style.description}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.metaText}>{`${vote_average}/10`}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 180,
    marginTop: 4
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderLeftWidth: 1
  },
  description: {
    padding: 10,
    alignSelf: 'stretch'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    width: 126,
    height: 178,
    borderRightWidth: 1,
    borderColor: '#ccc'
  },
  meta: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  metaOption: {
    flex: 0.5,
    borderRightColor: '#ddd',
    borderRightWidth: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  metaText: {
    marginTop:10,
    fontSize: 16
  }

})

export default MovieItem;

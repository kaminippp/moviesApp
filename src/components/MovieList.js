import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import MovieItem from './MovieItem.js';


const MovieList = ({ list = [], goToMovie }) => {
  return (
    <ScrollView style={style.list}>
      {
        list.sort((a,b)=> parseInt(b.vote_average) - parseInt(a.vote_average) ).map((item, index) => (
          <MovieItem movie={item} key={index} goToMovie={goToMovie} index={index}/>
      ))
      }
    </ScrollView>
  );
}


const style = StyleSheet.create({
  list: {
    flex: 1
  },
})



export default MovieList;

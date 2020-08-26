import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  AsyncStorage
} from 'react-native';
import MovieList from '../../components/MovieList.js';
import Spinner from '../../components/Spinner.js';
import Form from '../../components/Form.js';
import { searchMovies } from '../../actions';
import { toJS } from "immutable";

class DiscoverView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.goToMovie = this.goToMovie.bind(this);
    this.props.load();
  }

  static navigationOptions = {
    header: null
  };

  goToMovie(movie) {
    const { navigate } = this.props.navigation;
    navigate('Movie', {"movie":movie});
  }

  render() {
    const { isLoading, error, movies, search } = this.props;
    return (
      <View style={{flex: 1}}>
        <Text>{ error ? "Error" : null}</Text>
        <Form onSearch={search}/>
        {
          isLoading ?
            <Spinner />
            :
            <MovieList
              list={movies}
              goToMovie={this.goToMovie}
            />
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state.toJS()
}
  ;

const mapDispatchToProps = dispatch => ({
  load() {
    AsyncStorage.getItem("query").then((value) => {
      if(value)
      dispatch(searchMovies(value))
  })
  },
  search(query = '') {
    AsyncStorage.setItem(
      'query',
      query
    );
    dispatch(searchMovies(query))
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverView);

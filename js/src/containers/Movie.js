import React from 'react'
import { connect } from 'react-redux'
import { getMovieById } from '../actions'
import Movie from '../components/Movie/Movie'

const mapStateToProps = state => {
  return ({
    title: state.movie.title,
    overview: state.movie.overview,
    releaseDate: state.movie.releaseDate,
    genres: state.movie.genres,
  })
}

const mapDispatchToProps = (dispatch) => ({
  getMovieById: (id) => dispatch(getMovieById(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie)


import React from 'react'
import {loadAds} from '../actions/advertisements'
import {connect} from 'react-redux'
import AdsList from './AdsList'

class AdsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds()
  }

  render() {
    return <AdsList ads={this.props.ads} />
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

export default connect(mapStateToProps, {loadAds})(AdsListContainer)
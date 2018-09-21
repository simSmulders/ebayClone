import React from 'react'
import {connect} from 'react-redux'
import {createAd} from '../actions/advertisements'
import AdForm from './AdForm'

class CreateAdFormContainer extends React.Component {
  state = {}

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      title: '',
      price: 0,
    //   description: ''
    })
    this.props.createAd(this.state)
  }

  render() {
    return (<AdForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createAd})(CreateAdFormContainer)
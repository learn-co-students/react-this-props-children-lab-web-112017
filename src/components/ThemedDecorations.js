// Code ThemedDecoration Component Here
import React, {Component, Children} from 'react'

export default class ThemedDecoration extends Component {
  newChildren(){
    return(
      Children.map(this.props.children, child => {
        return <div className={this.props.theme}>{child}</div>
      })
    )
  }


  render() {
    return(
      <div>
        {this.newChildren()}
      </div>
    )
  }
}

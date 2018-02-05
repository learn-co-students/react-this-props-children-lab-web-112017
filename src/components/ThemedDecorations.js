// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecoration extends React.Component {

  render() {
    const classChildren = React.Children.map(this.props.children, c => {
      return React.cloneElement(c, {
        className: this.props.theme
      })
    })

    return (
      <div>
        { classChildren }
      </div>
    )
  }
}

export default ThemedDecoration

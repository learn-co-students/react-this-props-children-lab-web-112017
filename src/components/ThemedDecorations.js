import React from 'react'

export default class ThemedDecorations extends React.Component {
  render() {
    const adjustedChildren = React.Children.map(this.props.children, c => {
      return <div className={this.props.theme}>{c}</div>})

    return(
      <div>

        {adjustedChildren}
      </div>
    )
  }
}

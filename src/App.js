import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import './styles.css'

const Page = ({ offset, caption, first, second, third = "", gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 25 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <div className="innerText"><p>{first}</p></div>
        <div className="innerText"><p>{second}</p></div>
        <div className="innerText"><p>{third}</p></div>
      </span>
    </Parallax.Layer>
  </React.Fragment>
)

class App extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax className="container" ref="parallax" pages={3} horizontal scrolling={false}>
        <Page
          offset={0}
          gradient="pink"
          caption="who am I"
          first="Antonin Ribeaud"
          second="Developer @ Deezer"
          third="Blockchain enthusiast"
          onClick={() => this.scroll(1)} />
        <Page
          offset={1}
          gradient="teal"
          caption="what I do"
          first="I build cool apps"
          second="I use Node, GraphQL"
          third="React(Native), Redux 🚀 "
          onClick={() => this.scroll(2)} />
        <Page
          offset={2}
          gradient="tomato"
          caption="where I am"
          first="github.com/antonhansel"
          second="linkedin.com/in/antoninribeaud"
          third="twitter.com/antoninarto"
          onClick={() => this.scroll(0)} />
      </Parallax>
    )
  }
}

export default App;

import React from 'react'
import { Parallax } from 'react-spring'
import './styles.css'

const Page = ({ offset, caption, first, second, third = "", gradient, onClick }) => {
  let className = "text header";
  if (offset !== 2) {
    className += " pointerEvents"
  }
  return (<React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number pointerEvents" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className={className} offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: '3vw' }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <div className="innerText">{first}</div>
        <div className="innerText">{second}</div>
        <div className="innerText">{third}</div>
      </span>
    </Parallax.Layer>
  </React.Fragment>);
}

let index = 0;

class App extends React.Component {
  scroll = to => {
    if (index < 2) {
      index += 1;
    } else {
      index = 0;
    }
    this.refs.parallax.scrollTo(to);
  };
  render() {
    return (
      <Parallax className="container" ref="parallax" pages={3} horizontal scrolling={false}>
        <Page
          offset={0}
          gradient="pink"
          caption="who am I"
          first={<p>Antonin Ribeaud</p>}
          second={<p>Engineer @ Deezer</p>}
          third={<p>Blockchain hobbyist</p>}
          onClick={() => this.scroll(index)} />
        <Page
          offset={1}
          gradient="teal"
          caption="what I do"
          first={<p>I build cool apps</p>}
          second={<p>I use Node, GraphQL</p>}
          third={<p>React(Native), Redux 🚀 </p>}
          onClick={() => this.scroll(index)} />
        <Page
          offset={2}
          gradient="tomato"
          caption="where to find me"
          onClick={() => this.scroll(index)}          
          first={
            <div style={{paddingTop: '2vh'}}>
              <a href="https://github.com/antonhansel">
                <img src="https://antonhansel.github.io/curriculum-vitae/GitHub_Logo.png" width='70vw' height='70vh' alt="github"/>
              </a>
              <a href="https://www.linkedin.com/in/antoninribeaud/">
                <img src="https://antonhansel.github.io/curriculum-vitae/LinkedIn_Logo.png" width='70vw' height='70vh' alt="linkedin"/>
              </a>
              <a href="https://twitter.com/antoninarto">
                <img src="https://antonhansel.github.io/curriculum-vitae/Twitter_Logo.png" width='70vw' height='70vh' alt="twitter"/>
              </a>
            </div>
          }
          />
      </Parallax>
    )
  }
}

export default App;

import React, { Component } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

class Resume extends Component{

  render(){

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

      var skillmessage = this.props.data.skillmessage
      var favouriteTech = this.props.data.favouriteTech.map(function(tech){
        return (
            <SplideSlide>
              <div key={tech.name} className="columns feature-item">
                <img className="skill min-ratio-img-slides" alt={tech.name} src={"images/"+tech.images}/>
                <h5>{tech.name}</h5>
              </div>
            </SplideSlide>
        )
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>
          <div>
            <div className="nine columns main-col">
              <p>{skillmessage}</p>
            </div>
          </div>
        </div>
        <div className="row skill">
          <Splide options={ {
                rewind : true,
                gap    : '1rem',
                perPage : 5,
                perMove : 5,
                pagination: false
              } }>
            {favouriteTech}
          </Splide>          
        </div>
    </section>
    );
  }
}

export default Resume
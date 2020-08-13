import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      resumeData: {}
    }
  }

  getResumeData(){
    $.ajax({
          url:'/resumeData.json',
          dataType:'json',
          cache: false,
          success: function(data){
            this.setState({resumeData: data});
          }.bind(this),
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
  }

  componentDidMount(){
    this.getResumeData()
  }

  render(){
    return (
      <div>
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    )
  }
}

export default App;

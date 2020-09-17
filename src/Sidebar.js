import React, { Component } from 'react'
import './Sidebarstyle.css'
import {Link, NavLink} from 'react-router-dom'

export class sidebar extends Component {
    constructor(props){
        super(props)
        this.handleDdSentiClick = this.handleDdSentiClick.bind(this)
        this.handleDdEmoClick = this.handleDdEmoClick.bind(this)
    }
    handleDdSentiClick(){
        document.getElementById("myDropdown1").classList.toggle("show");
    }
    handleDdEmoClick(){
        document.getElementById("myDropdown2").classList.toggle("show");
    }
    render() {
        return (
            <div>
                <div className="sidenav" id="snav">
                    <button className="dropdown-btn" style={{marginTop: "100px"}} onClick={this.handleDdSentiClick}>Sentiment Analysis
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div id="myDropdown1" className="dropdown-container">
                        <Link to="/">Sentences</Link>
                        <Link to="/Sentiment/Paragraph">Paragraph/Document</Link>
                        <Link to="/Sentiment/Domain">Domain/Link</Link>
                    </div>
                    <br/>
                    <button className="dropdown-btn" onClick={this.handleDdEmoClick}>Emotion Analysis
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div id="myDropdown2" className="dropdown-container">
                        <Link to="/Emotion/Sentences">Sentences</Link>
                        <Link to="/Emotion/Paragraph">Paragraph/Document</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default sidebar

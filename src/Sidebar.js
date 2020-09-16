import React, { Component } from 'react'
import './Sidebarstyle.css'

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
                        <a href="/Sentiment/Sentences">Sentences</a>
                        <a href="/Sentiment/Paragraph">Paragraph/Document</a>
                        <a href="/Sentiment/Domain">Domain/Link</a>
                    </div>
                    <br/>
                    <button className="dropdown-btn" onClick={this.handleDdEmoClick}>Emotion Analysis
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div id="myDropdown2" className="dropdown-container">
                        <a href="/Emotion/Sentences">Sentences</a>
                        <a href="/Emotion/Paragraph">Paragraph/Document</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default sidebar

import React, { Component } from 'react'
import './Sensenform.css'

class Sensenform extends Component {
    render() {
        return (
            <div>
                <div className="card bg-light">
                    <div className="card-body">
                        {/* <div className="container"> */}
                            <div className="row">
                                <div className="col inpForm">
                                    <h5 className="card-title">Sentence level sentiment analysis</h5>
                                    <div className="box-1">
                                        <textarea className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="13"
                                        placeholder="Write your own text"></textarea>
                                        <br/>
                                        <button className="btn btn-primary btn-sm">Classify</button>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="box-2" style={{marginTop: "30px", padding:"0 5% 0 15%"}}>
                                        <div className="result-box">
                                            <div className="row">
                                                <div className="col align-self-end class-score-labels">
                                                    <label style={{fontSize:"14px", fontWeight:"bold", opacity:".5", fontFamily: 'Roboto'}}>Class</label> <br/><br/>
                                                    <label style={{fontSize:"14px", fontWeight:"bold", opacity:".5", fontFamily: 'Roboto'}}>Score</label>
                                                </div>
                                                <div className="col subjDiv">
                                                    <h6>Subjectivity</h6>
                                                    <select style={{borderRadius:"8px"}}>
                                                        <option value="" selected style={{display:"none"}}>Select</option>
                                                        <option>Subjective</option>
                                                        <option>Objective</option>
                                                    </select>
                                                    <br/><br/>
                                                    <label className="rounded-circle" style={{border: "1px solid grey", width:"40px", height:"40px", textAlign:"center", paddingTop:"5px"}}>0.00</label>
                                                </div>
                                                <div className="col">
                                                    <h6>Polarity</h6>
                                                    <select  style={{borderRadius:"8px"}}>
                                                        <option value="" selected style={{display:"none"}}>Select</option>
                                                        <option>Strongly Positive</option>
                                                        <option>Weakly Positive</option>
                                                        <option>Neutral</option>
                                                        <option>Strongly Negative</option>
                                                        <option>Weakly Negative</option>
                                                    </select>
                                                    <br/><br/>
                                                    <label className="rounded-circle" style={{border: "1px solid grey", width:"40px", height:"40px", textAlign:"center", paddingTop:"5px"}}>0.00</label>
                                                </div>
                                            </div>
                                        </div>
                                        <br/><br/>
                                        <div className="vis-box">
                                            <h6>Visualization</h6>
                                            <div style={{fontSize:"12px", fontFamily: 'Roboto'}}>
                                                {/* {this.state.visualHighlightText} */}
                                            </div>
                                            <br/>
                                            <button className="btn btn-primary btn-sm fbackbtn">Feedback</button> 
                                            <button className="btn btn-primary btn-sm">Comparison</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Sensenform

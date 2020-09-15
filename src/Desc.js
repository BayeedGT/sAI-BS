import React, { Component } from 'react'
import './Descstyle.css'

class Desc extends Component {
    render() {
        return (
            <div>
                <div className="card bg-light" style={{marginTop: "60px"}}>
                    <div className="card-body">
                        <h6 className="card-title">Sentiment Analysis</h6>
                        <p className="card-text">This is a generic sentiment analysis classifier for texts in English. It works great 
                        in any kind of texts. If you are not sure of which sentiment analysis classifier to 
                        use, use this one.</p>
                        <div className="dl">
                            <label className="badge badge-pill badge-primary" style={{color:"#2680EB", backgroundColor:"white", border: "1px solid #2680EB", margin:"0 5px"}}>Strongly Postive</label>
                            <label className="badge badge-pill badge-primary" style={{color:"#2680EB", backgroundColor:"white", border: "1px solid #2680EB", margin:"0 5px"}}>Weakly Positive</label>
                            <label className="badge badge-pill badge-primary" style={{color:"#09C18E", backgroundColor:"white", border: "1px solid #09C18E", margin:"0 5px"}}>Neutral</label>
                            <label className="badge badge-pill badge-primary" style={{color:"#F47676", backgroundColor:"white", border: "1px solid #F47676", margin:"0 5px"}}>Strongly Negative</label>
                            <label className="badge badge-pill badge-primary" style={{color:"#F47676", backgroundColor:"white", border: "1px solid #F47676", margin:"0 5px"}}>Weakly Negative</label>
                        </div>
                        <div>
                            <p>This is a generic sentiment analysis classifier for texts in English. It works great 
                                in any kind of texts.
                            </p>
                        </div>
                        <div className="dl">
                            <label className="badge badge-pill badge-primary" style={{color:"#4626EB", backgroundColor:"white", border: "1px solid #4626EB", margin:"0 5px"}}>Subjective</label>
                            <label className="badge badge-pill badge-primary" style={{color:"#09C18E", backgroundColor:"white", border: "1px solid #09C18E", margin:"0 5px"}}>Objective</label>
                            <label className="badge badge-pill badge-primary" style={{color:"#F47676", backgroundColor:"white", border: "1px solid #F47676", margin:"0 5px"}}>Neutral</label>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Desc

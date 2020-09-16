import React, {Component} from 'react'
import Desc from './Desc'
import Sensenform from './Sensenform'
import './SenSentence.css'

class SenSentence extends Component { 
    render(){
        return(
            <div>
                <div className="dsc">
                    <Desc/>
                </div>
                <div> 
                    <Sensenform/>
                </div>
            </div>
        )
    }
}

export default SenSentence
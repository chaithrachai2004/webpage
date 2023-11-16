import React, { Component } from "react";
import './body.css';
import Image from '../Components/wallpaper.jpg'

import ReactPlayer from 'react-player'
class Body extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className='center-div'>
                <div style={{  alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <center> <img src={Image} alt="" /></center><br/>
                <p>Nature</p>
                <br/>
                <br/>
                    <ReactPlayer url={'https://www.youtube.com/watch?v=t0Q2otsqC4Inpm '} />
                    <p>Tom & Jerry is popular because of the very idea of friendship, the obviousness of the results of the cat's tries of mouse's abuse, and the ways out the characters are able to find in the situations they appear. .</p>
                </div>
               <center><p>{this.state.count}</p></center>
               <center> <button onClick={this.increment} className="like-button">like</button></center>

                <br/>
                <br/>
              
            </div>
        );
    }
}

export default Body;
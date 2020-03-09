import React, {Component} from 'react'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

class Card extends Component{
    /*constructor(props){
        super(props)
        this.state = {
            image: 'https://www.pinclipart.com/picdir/big/116-1162930_calm-clipart-flexibility-exercise-exercise-png-download.png'
        }
    }

    componentDidMount(){
        setTimeout( ()=>{
            this.setState({
                image: 'https://raw.githubusercontent.com/RpL02/FitnessApp/styles/src/images/exercise.png'
            })
        },5000)
    }*/

    render(){
        const { title, description, img, leftColor, rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img alt='Hola' src={img}></img>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
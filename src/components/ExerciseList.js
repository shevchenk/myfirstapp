import React from 'react'
import Card from './Card'

function ExerciseList(props){
    return(
        <div>
            {
                props.exercises.map((exercise,index) => {
                    return(
                        <Card 
                            key={index}
                            title={exercise.title}
                            description={exercise.description}
                            img={exercise.img}
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                        />
                    )
                })
            }
        </div>
    )
}

export default ExerciseList
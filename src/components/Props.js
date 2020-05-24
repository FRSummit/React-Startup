import React from 'react'

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h3>Property name: { props.name }, second name: {props.secondName}</h3>
            {props.children}
        </div>
    )
}

export default Greet;
import React from 'react'

const Hello = () => {
    // return (
    //     <div className='hello-class'>
    //         <h3>Hello JSX</h3>
    //     </div>
    // )

    // JSX
    // return React.createElement('div', null, 'Hi, This is JSX')
    // return React.createElement('div', null, '<h3>Hi, This is JSX</h3>')
    // return React.createElement('div', null, 'h3', 'Hi, This is JSX')
    return React.createElement(
        'div',
        {id: 'hello', className: 'hello-class'},
        React.createElement(
            'h3', 
            null, 
            'Hi, This is JSX'
        )
    )
};

export default Hello;
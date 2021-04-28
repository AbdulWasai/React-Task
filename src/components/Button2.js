import PropTypes from 'prop-types'
import { React, Fragment } from 'react'


export const Button2 = ({ color, text, showform }) => {

    return (
        <Fragment>
            <button onClick={showform} className='btn' style={{ backgroundColor: color }}>
                {text}
            </button>
        </Fragment>
    )
}

Button2.defaultProps = {
    color: 'green',
    text: 'Add'
}

Button2.prototype = {
    color: PropTypes.string,
    text: PropTypes.string,
}
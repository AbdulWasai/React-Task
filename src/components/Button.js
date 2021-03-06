import PropTypes from 'prop-types'


const Button = ({color, text}) => {
    
    const onClick = () => {
        console.log('clicked')
    }
    
    return (
    <button onClick = {onClick}
    style = {{backgroundColor: color}}
    className = 'btn'>
        {text}
    </button>
    )
}

Button.defaultProps = {
    color: 'green',
    text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button

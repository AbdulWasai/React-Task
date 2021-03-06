import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color = 'green' text = 'Hello'/>
        </header>
    )
}
Header.defaultProps = {
    title: 'Tasks Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headerStyle = {
//     color: 'purple',
//     backgroundColor: 'black'
// }
export default Header

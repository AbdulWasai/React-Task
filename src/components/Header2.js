import PropTypes from 'prop-types'
import { React, Fragment } from 'react'
import { Button2 } from './Button2'



export const Header2 = ({ title, showform, showAddTask }) => {

    return (
        <Fragment>
            <header className='header'>
                <h1>{title}</h1>
                <Button2 showform={showform}
                    color={showAddTask ? 'red' : 'green'}
                    text={showAddTask ? 'Close' : 'Add'} />
            </header>
        </Fragment>
    )
}

Header2.defaultProps = {
    title: 'Task Trackers',
}

Header2.propTypes = {
    title: PropTypes.string.isRequired,
}


const styling = {
    color: '',
    text: '',
}
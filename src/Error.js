import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default class Error extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', flexDirection: 'column'}}>
                <h1>Oops, this page could not be found</h1>
                <Button variant="contained" color="primary">
                    <Link style={{ textDecoration: 'none', color: 'white', fontSize: 14, textAlign: 'end' }} to="/movers">
                        Go to homepage
                    </Link>
                </Button>
            </div>
        )
    }
}
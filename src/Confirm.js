import React from 'react'

export default class Confirm extends React.Component {

    render() {
        window.setTimeout(function(){
            window.location.href = "https://moverupp.com/#/movers";    
        }, 5000);
        return (
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <div style={{backgroundColor: 'lightyellow', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 25}}>
                    <b style={{fontWeight: 'normal', textAlign: 'center'}}>Your email has been confirmed.<br/>You will now be redirected to our website.</b>
                </div>
            </div>
        )
    }
}
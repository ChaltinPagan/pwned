import React from 'react';

const Alert = ({ statusCode, results, prompt }) => {
    if (results === null) {
        return <p className="results">{prompt ? "Please enter a password" : ""}</p>
    }

    if (results === 0 || results === undefined)
        return (
            <section className="results" id="alert-info">
                <i class="fas fa-check-circle fa-7x"></i>
                <p>Your password doesn't appear in the data set.
                    <br />Your password is safe.</p>
            </section>
    ) 

        return (
            <section className="results" id="alert-warning">
                <i className="fas fa-exclamation-circle fa-7x"></i>
                <p>{`Your password has been compromised ${results} `}
                {results === 1 ? 'time.' : 'times.'}
                    <br />Change your password ASAP!</p>
            </section>
        )
    
}

export default Alert;
import React from 'react';
import Alert from './Alert';

const Results = ({ loading, statusCode, results, prompt }) => {
    if (loading) {
        return (
            <section className="results">
                <i className="fas fa-spinner fa-spin fa-7x"></i>
            </section>
        )
    }

    return <Alert statusCode={statusCode} results={results} prompt={prompt} />
}

export default Results;
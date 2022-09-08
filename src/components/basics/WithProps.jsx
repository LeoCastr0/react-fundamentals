import React from 'react';

export const WithProps = ({title, student, score}) => {
    const status = score >= 7 ? "Approved" : "Recovery"
    return (
        <div>
            <h2>{title}</h2>
            <p><strong>{student}</strong> has the score {score} and the status are <strong>{status}</strong></p>
        </div>
    )
}
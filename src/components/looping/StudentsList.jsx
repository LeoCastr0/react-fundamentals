import React from 'react';
import students  from '../../data/students'

export const StudentsList = props => {
    const studentsLI = students.map(student => {
        return <li key={student.id}>({student.id}) {student.name} -> {student.score}</li>
    })
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {studentsLI}
            </ul>
        </div>
    )
}
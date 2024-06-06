import React from 'react'
import '../src/main.css'

export default function CompletedCount({completed, length}) {
    return (
        length > 0 && (
            <div className="completed-count">
                Completed Todos: {completed}
            </div>   
        )
    )
}
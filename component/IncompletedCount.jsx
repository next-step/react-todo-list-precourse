import React from 'react'
import '../src/main.css'

export default function IncompletedCount({incompleted, length}) {
    return (
        length > 0 && (
            <div className="completed-count">
                {incompleted} items left! 🚨
            </div>   
        )
    )
}
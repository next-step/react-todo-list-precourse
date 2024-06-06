import React from 'react'
import '../src/main.css'

export default function ClearCompletedItem({ clearCompletedItem }) {
    return (
        <button className = "clearbtn" onClick={clearCompletedItem}>
            Clear Completed
        </button>
    )
}
import React from 'react'
import IncompletedCount from './IncompletedCount'
import ClearCompletedItem from './ClearCompletedItem'
import '../src/main.css'

export default function Footer({incompleted, clearCompletedItem, length}) {
    return (
        <div className="footer-wrapper">
            <IncompletedCount incompleted = {incompleted} length = {length}/>  
            <ClearCompletedItem clearCompletedItem={clearCompletedItem}/>
        </div>
    )
}
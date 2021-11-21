import React from 'react'

export default function Rating({ value, text }) {
    return (
        <div className = 'Rating'>
            <span>
                <i className = {parseInt(value) >= 1 ? 'fas fa-star' : parseInt(value) >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i className = {parseInt(value) >= 2 ? 'fas fa-star' : parseInt(value) >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i className = {parseInt(value) ? 'fas fa-star' : parseInt(value) >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i className = {parseInt(value) >= 4 ? 'fas fa-star' : parseInt(value) >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i className = {parseInt(value) >= 5 ? 'fas fa-star' : parseInt(value) >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>{ text ? text : ''}</span>
        </div>
    )
}


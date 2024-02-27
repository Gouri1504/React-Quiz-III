import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quiz from './Quiz';

export default function Home() {
  return (
    <div>
      <div className='home'>
        <h2 className="title">Quiz App</h2>
        <Link to="/Quiz">
          <button id="play-btn">Play Quiz</button>
        </Link>
      </div>
    </div>
  )
}
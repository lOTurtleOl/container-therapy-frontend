import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"

export default function HomePage() {
  return (
    <div className="px-4 pt-5 text-center full-background">
          <h1 className="display-4 fw-bold">Welcome to Mindful Containers</h1>
          <h4 className="fw-bold">Explore Your Emotions, Manage Your Stress, and Visualize Your Progress</h4>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Welcome to Mindful Containers, a unique tool designed to support your journey through Cognitive Behavioral Therapy (CBT). This app provides a visual approach to managing your emotional and mental health challenges by allowing you to organize, contain, and reflect on your thoughts, stressors, and emotional struggles.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link to="/create">
              <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Start here</button>
            </Link>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Container</button>            
            </div>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
          </div>
    </div>
  )
}

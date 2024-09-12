import React from 'react'

export default function AddObject() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="object" className="form-label">Object</label>
                    <input type="text" className="form-control" id="object" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

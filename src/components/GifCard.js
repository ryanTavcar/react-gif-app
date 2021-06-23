import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';

function GifCard({ gif }) {
    return (
        <div className="gif-wrapper">
            <img className="gif-image" src={gif} alt="gif"></img>
            <div className="gif-utilities">
                <div className="gif-icons">
                    <AiFillLike size={25} />
                    <AiOutlineComment size={25} />        
                </div>
                <form className="form-control">
                    <input className="comment-field" type="text" placeholder="comment here..."></input>
                </form>
            </div>
        </div>
    )
}

export default GifCard

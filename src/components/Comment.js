import React from 'react';


function Comment({data}){
    return (
        
        <div className="box-comment">
            <span className="author-comment"><b>{data.author.name}</b> {data.content}</span>
        </div>
        
    )
}

export default Comment;
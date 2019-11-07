import React from 'react';
import '../css/App.css';
import Comment from '../components/Comment';

function Post({data}){
    return (
            <div className="post">
                
                <div className="title">
            <span className="author" >{data.author.name}</span>
            
            <span className="date"  >{data.date}</span>
            </div>
            
            <div className="content-text">
                <span>{data.content}</span>
                <div>
                <span className="line"></span>
                </div>
            </div>
                
            {data.comments.map(comment => <Comment key={comment.id} data={comment} />)};  
            
            </div>
            
        
        
    )
}

export default Post;
import React from 'react'
import Comment from './Comment'

const CommentBox = ({comments}) => {
  return (
    <div className='py-6 pl-24 w-[750px]'>
        <div>
            <hr/>
            <h1 className='font-extrabold text-2xl p-6'>Comments</h1>
            {comments.map((comment)=><Comment key={comment.id} comment={comment} />)}
        </div>
    </div>
  )
}

export default CommentBox
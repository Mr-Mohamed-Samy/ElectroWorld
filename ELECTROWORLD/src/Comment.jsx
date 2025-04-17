import React, { useState, useEffect } from 'react';
import './Comment.css';

const ProductComments = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  useEffect(() => {
    const savedComments = localStorage.getItem(`product_${productId}_comments`);
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (error) {
        console.error("Failed to parse comments:", error);
      }
    }
  }, [productId]);

  
  useEffect(() => {
    localStorage.setItem(`product_${productId}_comments`, JSON.stringify(comments));
  }, [comments, productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment,
        date: new Date().toLocaleString(),
        rating: rating
      };
      setComments([...comments, comment]);
      setNewComment('');
      setRating(0);
    }
  };

  return (

    <div className="comments-section">
      <h3>Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="rating-input">
          <label>Rating:</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`star ${star <= (hover || rating) ? 'active' : ''}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your comment..."
          required
        />
        <button type="submit">Submit</button>
      </form>

      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star} 
                  className={`star ${star <= comment.rating ? 'active' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="comment-text">{comment.text}</p>
            <span className="comment-date">{comment.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComments;
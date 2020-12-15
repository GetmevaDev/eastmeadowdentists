import React from "react"
import { useState } from "react"
import ReactStars from "react-rating-stars-component"

function SectionReviewForm() {
  const [rating, setRating] = useState(0)
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <section className={"section-review-form"}>
      <div className="container w1200">
        <h2>Leave your own review</h2>
        <form
          method="post"
          action="https://cms-all-smiles-dental-spa.herokuapp.com/comments"
        >
          <input
            type="text"
            placeholder="Your name"
            onChange={e => setName(e.target.value)}
            value={name}
            name="Name"
          />
          <label>Your rating</label>
          <ReactStars
            classNames="rating-stars"
            count={5}
            onChange={setRating}
            size={24}
            activeColor="#ffd700"
            isHalf={false}
          />
          <input type="text" name="Rating" hidden value={rating} />
          <textarea
            placeholder="Your review"
            name="review"
            onChange={e => setText(e.target.value)}
            value={text}
            name="Comment"
          >
            {text}
          </textarea>
          <input type="submit" className="submit-btn" value="Submit" />
        </form>
      </div>
    </section>
  )
}

export default SectionReviewForm

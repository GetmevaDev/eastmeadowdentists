import React from "react"
import { useState } from "react"
import ReactStars from "react-rating-stars-component"
import axios from "axios"
import * as qs from "query-string"
import { Component } from "react"

class SectionReviewForm extends Component {
  domRef = React.createRef()
  state = {
    feedbackMsg: null,
    rating: 0,
  }

  handleSubmit(event) {
    this.setState({
      ...this.state,
      feedbackMsg: "Submitting...",
    })
    event.preventDefault()

    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    const axiosOptions = {
      url: "https://cms-all-smiles-dental-spa.herokuapp.com/comments",
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    axios(axiosOptions)
      .then(response => {
        this.setState({
          ...this.state,
          feedbackMsg: "Your review was successfully submitted!",
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          ...this.state,
          feedbackMsg: "Review could not be submitted.",
        })
      })
  }

  handleRatingChange(rating) {
    this.setState({
      ...this.state,
      rating,
    })
  }

  render() {
    return (
      <section className={"section-review-form"}>
        <div className="container w1200">
          <h2>
            {this.state.feedbackMsg
              ? this.state.feedbackMsg
              : "Leave your own review"}
          </h2>
          {!this.state.feedbackMsg && (
            <form
              ref={this.domRef}
              name="Review Form"
              method="post"
              action="https://cms-all-smiles-dental-spa.herokuapp.com/comments"
              onSubmit={event => this.handleSubmit(event)}
            >
              <input
                type="text"
                placeholder="Your name"
                ref="Name"
                name="Name"
              />
              <label>Your rating</label>
              <ReactStars
                classNames="rating-stars"
                count={5}
                size={24}
                activeColor="#ffd700"
                isHalf={false}
                onChange={rating => this.handleRatingChange(rating)}
              />
              <input
                type="text"
                ref="Rating"
                name="Rating"
                hidden
                value={this.state.rating}
              />
              <textarea
                placeholder="Your review"
                name="Comment"
                ref="Comment"
              ></textarea>
              <input type="submit" className="submit-btn" value="Submit" />
            </form>
          )}
        </div>
      </section>
    )
  }
}

export default SectionReviewForm

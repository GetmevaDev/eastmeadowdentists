import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const paragraph =
  "We offer all types of procedures from your routine preventative checkup to aesthetics, Invisalign, implant dentistry and sleep apnea appliances.  It is our goal to make your visit with us an extremely pleasant one and to send you home with a beautiful and healthy smile."

const data = [
  {
    title: "What type of procedures does All Smiles Dental Spa perform?",
    paragraph,
  },
  {
    title: "What should I expect from my first visit?",
    paragraph,
  },
  {
    title:
      "What can I do to prevent tooth & gum decay and ensure a healthy mouth?",
    paragraph,
  },
]

const Accordion = () => {
  const faqs = useStaticQuery(graphql`
    {
      allStrapiFaqs {
        edges {
          node {
            Question
            Answer
          }
        }
      }
    }
  `)
  return (
    <div {...{ className: "wrapper" }}>
      <ul {...{ className: "accordion-list" }}>
        {faqs.allStrapiFaqs.edges.map((node, key) => {
          return (
            <li {...{ className: "accordion-list__item", key }}>
              <AccordionItem {...node} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

class AccordionItem extends React.Component {
  state = {
    opened: false,
  }

  render() {
    const {
      props: { node },
      state: { opened },
    } = this

    console.log(node)

    return (
      <div
        {...{
          className: `accordion-item, ${opened && "accordion-item--opened"}`,
          onClick: () => {
            this.setState({ opened: !opened })
          },
        }}
      >
        <div {...{ className: "accordion-item__line" }}>
          <h5 {...{ className: "accordion-item__title" }}>{node.Question}</h5>
          <span {...{ className: "accordion-item__icon" }} />
        </div>
        <div {...{ className: "accordion-item__inner" }}>
          <div
            {...{ className: "accordion-item__content" }}
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: node.Answer }}
          />
        </div>
      </div>
    )
  }
}

export default Accordion

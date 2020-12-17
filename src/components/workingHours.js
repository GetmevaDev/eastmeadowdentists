import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const WorkingHours = () => {
  const data = useStaticQuery(graphql`
    {
      strapiWorkingHours {
        WorkingHours {
          Day_of_week
          Working_hours
          id
        }
      }
    }
  `)

  return (
    <div className={`box-working-hours`}>
      <h5>Working hours</h5>
      <ul>
        {data.strapiWorkingHours.WorkingHours.map(item => {
          return (
            <li>
              <span>{item.Day_of_week}</span>
              <span>
                <strong>{item.Working_hours}</strong>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WorkingHours

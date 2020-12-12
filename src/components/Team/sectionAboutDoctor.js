import React from "react"

const SectionAboutDoctor = ({ doctor }) => {
  return (
    <section className={`section-team-info`}>
      <div className="container w1200">
        {" "}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: doctor.About_Doctor_Team }}
        />
        {doctor.Name == "Dr. Marcello Guglielmi" ? (
          <div className="guglielmi-info">
            <ul>
              <li>Sedation</li>
              <li>Bone graft</li>
              <li>Dental Implant Placement</li>
              <li>Dental Infections</li>
            </ul>
            <ul>
              <li>Wisdom Teeth Extraction</li>
              <li>Teeth Extraction</li>
              <li>Facial and TMJ Pain</li>
              <li>Facial Injury</li>
            </ul>
            <ul>
              <li>Oral Pathology</li>
              <li>Oral Cancer Screening</li>
              <li>Soft Tissue and Hard Tissue Biopsy</li>
            </ul>
            <iframe
              width="410"
              height="238"
              src="https://www.youtube.com/embed/Nraf870YjMI"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default SectionAboutDoctor

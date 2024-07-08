import React from 'react'

function About() {
  return (
    <div>
       <div className="text-container">
        {titles.map((title, index) => (
          <div key={index} className="title">
            {title.text.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
      <img  className="profile-image" src="https://images.unsplash.com/photo-1622281587418-f2f4fc06ae7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person"/>
    </div>
  )
}

export default About

import React, { useState } from 'react'

const About = () => {
    const [mystyle, setmystyle] = useState({
      color:'black',
           backgroundColor:'white',
           border:'1px solid black'
    });
    // let mystyle={
    //     color:'black',
    //     backgroundColor:'white'
    // }
  const [btntext, setbtntext] = useState('enable dark mode')
    const ontap=()=>{
if(mystyle.color=='black'){
  setmystyle({
    color:'white',
     backgroundColor:'black'
  })
  setbtntext('enable light mode')
}
else{
  setmystyle({
    color:'black',
     backgroundColor:'white',
     border:'1px solid black'
  })
  setbtntext('enable dark mode')
}
    }
  return ( 
  <div>
  <h1>this is different  </h1>
  <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"style={mystyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={mystyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={mystyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<button type="button" className="btn btn-primary mx-3" onClick={ontap} >{btntext}</button>
</div>   
  )
}

export default About

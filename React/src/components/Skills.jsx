import React, { useState } from 'react'

function Skills() {
    let[skills, setSkills] = useState([])

    let getSkill = (event)=>{
        // console.log(event.target.value, event.target.checked)
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
  return (
    <div>
      <label htmlFor='python'>Python</label>
      <input type="checkbox" id='python' value="Python" onChange={getSkill}/>
        <br /><br />
      <label htmlFor='Js'>JavaScript</label>
      <input type="checkbox" id='Js' value="Js" onChange={getSkill}/>
<br /><br />
      <label htmlFor='C++'>C++</label>
      <input type="checkbox" id='C++' value="C++" onChange={getSkill}/>
<br /><br />
      <label htmlFor='Rust'>Rust</label>
      <input type="checkbox" id='Rust' value="Rust" onChange={getSkill}/>
        <br /><br />
        <h1>{skills.toString()}</h1>

    </div>
  )
}

export default Skills

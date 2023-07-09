import React, {useState} from 'react'

function FaqAccordian(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleClick(){
    return isExpanded? setIsExpanded(false) : setIsExpanded(true);       
  }

  return (
    <div className='faq-accordian' >
      <div className="head" onClick={handleClick}>
        <p>{props.question}</p>
      </div>
      {isExpanded && 
      <div className="body">
      {props.answer}
      </div>
      }
    </div>
  )
}

export default FaqAccordian

import React from "react";
import Heading from "./Heading";
import FaqAccordian from "./FaqAccordian";
function Section7() {
  return (
    <>
      <div className="faq-section">
        <Heading
          h5="FAQ"
          h1="Frequently Asked"
          span="Questions"
          color="#007bff"
        />
        <div className="body">
          <div className="box">
            <FaqAccordian 
            question="Can I switch my domain from non-technical to technical after learning this program?"
            answer="You can definitely switch once you have the skill sets and the practical implementation that is provided in this program. Your degree does not matter to get you into a technical role these days."/>
          </div>
          <div className="box">
            <FaqAccordian
            question="What is the duration of this Program and how long will I have access to this program?"
            answer="The course duration is 5 months. You will have access to the program content for 2 years."/>
          </div>
          <div className="box">
            <FaqAccordian
            question="How will my doubts get resolved?"
            answer="You can raise your questions on our Forums or Discord workspace to get help from our mentors. We also conduct interactive Live sessions to clear any more doubts or questions you may have."/>
          </div>
          <div className="box">
            <FaqAccordian
            question="Can I pay using EMIs?"
            answer="Yes, You can pay using EMIs. We also offer no-cost EMIs on all major Credit Cards as well as some Debit Cards."/>
          </div>
          <div className="box">
            <FaqAccordian
            question="Do I need a computer for this program?"
            answer="Yes, you are required to have a decent laptop/computer with an internet connection."/>
          </div>
          <div className="box">
            <FaqAccordian
            question="Can we download the video content?"
            answer="Although you can download the class notes, you will not be allowed to download any video content."/>
          </div>
          <div className="box">
            <FaqAccordian
            question="I am not from a programming background, is this course fit for me?"
            answer="You do not need a programming background to master this course. We will teach you everything from scratch."/>
          </div>
          <div className="box">
            <FaqAccordian
            question="I do not know any programming language, can I join this program?"
            answer="Yes, we will teach you all about core Java Programming language from scratch. So you can join even if you are a complete beginner in programming."/>
          </div>
          <div className="box">
            <FaqAccordian
            question="How do the classes take place?"
            answer="The classes will take place in both pre-recorded and LIVE modes. The recorded lessons can be accessed from anywhere at any point in time. The timings for the LIVE sessions will be shared after the batch starts."/>
          </div>
          <div className="box">
            <FaqAccordian
            question="Do you provide any other course materials as well?"
            answer="Yes, we will provide you with class notes as well as handpicked problems on our platform."/>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Section7;

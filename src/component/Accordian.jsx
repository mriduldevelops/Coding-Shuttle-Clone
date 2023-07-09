import React, { useState } from "react";
import accIcon from "./images/asset 67.svg"
import arrowIcon from "./images/asset 66.svg"
export default function Accordion() {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleClick() {
    return isExpanded ? setIsExpanded(false) : setIsExpanded(true);
  }
  return (
    <>
      <div className="accordian">
        <div className="head" onClick={handleClick}>
          <div className="left"><img src={accIcon} alt="" /></div>
          <div className="right">
            <h3>Basics of Java Programing Language</h3>
            <h5>2 Weeks</h5>
          </div>
            <div className="cricle"><img src={arrowIcon} alt="" /></div>
        </div>
        {isExpanded && (
          <div className="body">
            Java is the Most Popular programming language in the software world
            Today. And we are going to learn Java concepts from beginner to
            advanced level. Data Types Loops Patterns Array String Functions
            Install IDE and JDK, Write your first Java program, Taking user
            input, Loops, Various patterns problems like Square, Triangle,
            Inverted Triangle, etc. Introduction to Arrays, 1D and 2D Array
            problems, Understanding Bubble sort, Insertion sort and Selection
            sort, Functions and scope
          </div>
        )}
      </div>
    </>
  );
}

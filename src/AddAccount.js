import React from 'react'
import { RiFacebookBoxLine,RiInstagramFill } from "react-icons/ri";
import { FaLinkedin,FaTwitterSquare,FaPinterestSquare } from "react-icons/fa";


function AddAccount() {
  return (
    <div className="accounts">
      <h1>Accounts</h1>
      <div className="flex">
          <div className="box">
            <RiFacebookBoxLine style={{width:"5em",height:"5em",marginLeft:"70px",marginTop:"10px"}}></RiFacebookBoxLine>
            <br></br>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{marginLeft:"70px"}}>FACEBOOK</a>
          </div>
          <div className="box">
            <RiInstagramFill style={{width:"5em",height:"5em",marginLeft:"70px",marginTop:"10px"}}></RiInstagramFill>
            <br></br>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{marginLeft:"70px"}}>INSTAGRAM</a>
          </div >
          <div className="box">
            <FaTwitterSquare style={{width:"5em",height:"5em",marginLeft:"70px",marginTop:"10px"}}></FaTwitterSquare>
            <br></br>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" style={{marginLeft:"70px"}}>TWITTER </a>
          </div>
          <div className="box">
            <FaLinkedin style={{width:"5em",height:"5em",marginLeft:"70px",marginTop:"10px"}}></FaLinkedin>
            <br></br>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={{marginLeft:"70px"}}>LINKEDIN</a>
          </div>
          <div className="box">
             <FaPinterestSquare style={{width:"5em",height:"5em",marginLeft:"70px",marginTop:"10px"}}></FaPinterestSquare>
             <br></br>
             <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" style={{marginLeft:"70px"}}>PRINTEREST</a>
          </div>
          
      </div>
    </div>
  )
}

export default AddAccount
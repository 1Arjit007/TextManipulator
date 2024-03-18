import React,{useState} from "react";

export default function About(props) {
  // const [myStyle,setMyStyle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })

  // const[btntext,setBtnText]=useState("Enable Dark Mode")

  // const toggleStyle =()=>
  // {
  //   if(myStyle.color==='black')
  //   {
  //       setMyStyle({
  //           color:'white',
  //           backgroundColor:'black',
  //           border:'2px solid white'
  //       })
  //       setBtnText("Enable Light Mode")  
  //   }
  //   else
  //   {
  //       setMyStyle({
  //           color:'black',
  //           backgroundColor:'white'
  //       })
  //       setBtnText("Enable Dark Mode")
  //   }
  // }


  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2 className="my-3">About US</h2>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{background:props.mode==='dark'?'#001F3F':'white',color:props.mode==='dark'?'white':'black'}}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{background:props.mode==='dark'?'#001F3F':'white',color:props.mode==='dark'?'white':'black'}}>
            Welcome to TextUtils, your ultimate destination for all things related to text manipulation and analysis! Our site is designed to provide you with a powerful set of tools that will make working with text easier, faster, and more efficient than ever before.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{background:props.mode==='dark'?'#001F3F':'white',color:props.mode==='dark'?'white':'black'}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{background:props.mode==='dark'?'#001F3F':'white',color:props.mode==='dark'?'white':'black'}}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{background:props.mode==='dark'?'#001F3F':'white',color:props.mode==='dark'?'white':'black'}}>
            With TextUtils, you can perform a wide range of text operations, from basic formatting and editing to advanced analysis and transformation. Whether you're a student, researcher, writer, programmer, or anyone who works with text regularly, our site has something valuable to offer you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{background:props.mode==='dark'?'#001F3F':'white',color:props.mode==='dark'?'white':'black'}}
            >
             <strong> key features</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{background:props.mode==='dark'?'#001F3F':'white',color:props.mode==='dark'?'white':'black'}}>
            Here are some of the key features and services you can expect from TextUtils:
            <ul>
              <li>Convert To UpperCase</li>
              <li>Convert To LowerCase</li>
              <li>Clear</li>
              <li>Copy Text</li>
              <li>Extra Space</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">
          {btntext}
        </button>
      </div> */}
    </div>
  );
}

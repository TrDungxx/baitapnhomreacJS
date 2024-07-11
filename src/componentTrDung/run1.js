import React from "react";
import "./run1.css";
import "./background.css";
import "./form.css";
import Line1 from "./line1";
import Line2 from "./line2";
import Line3 from "./line3";
import Line4 from "./line4";
import Line5 from "./line5";
import Form from "./line6";




function Run1() {
  return (
    <section>
      <div className="Staffservicepage">
        <Line1 />
        <Line2/>
        <Line3/>
        <Line4/>
        <Line5/>
       <Form/>
      </div>
    </section>
  );
}
export default Run1;
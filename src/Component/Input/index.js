// import React from "react";
// import { Input as RsInput } from "reactstrap";

// function Input({value, type, onChange,}) {
//     return <RsInput value={0} type="text" onChange={()=>{}} />
// }
// export {Input}

import React, { useEffect, useRef } from "react";
import { Form, FormGroup, Input as RsInput } from "reactstrap";
import "./index.css";

function Input({
  id,
  className,
  name,
  maxLength = 40,
  value,
  onChange,
  type = "text",
  placeholder,
}) {
  return (
    <Form style={{ width: "100%" }}>
      <FormGroup >
        <RsInput
          className={className}
          value={value}
          name={name}
          id={id}
          maxLength={maxLength}
          onChange={onChange}
          type={type}
          bsSize="lg"
          placeholder={placeholder}
        />
      </FormGroup>
    </Form>
  );
}

export { Input };

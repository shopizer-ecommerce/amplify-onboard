import Input from 'react-phone-number-input/input'
import { useState, useContext } from "react";
import { AppContext } from "../context";

const Phone = ({ placeholder, value, handler }) => {
  const { state } = useContext(AppContext);
  //const { state } = useContext(AppContext);


  return (
    <div className="relative">
        <Input
            country="CA"
            placeholder={placeholder}
            value={value}
            onChange={handler}
            />
    </div>
  );
};

export default Phone;

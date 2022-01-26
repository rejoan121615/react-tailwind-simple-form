import React, { useState } from "react";

const useFormHandler = () => {
    const [inputData, setInputData] = useState("");
    const [errorMsg, setErrorMsg] = useState(false);

    const validate = (data) => {
        if (data) {
            setErrorMsg(true);
        }
    };

    const changeHandler = (event) => {
        setInputData(event.target.value);
        if (!event.target.value) {
            setErrorMsg(true);
        } else {
            setErrorMsg(false);
        }
    };

    const blurHandler = (event) => {
        if (!event.target.value) {
            setErrorMsg(true);
        }
    };

    const submitHandler = () => {
        if (!inputData) {
            setErrorMsg(true);
        } else {
            setErrorMsg(false);
      }
      console.log(inputData);
    };

    return {
        changeHandler,
        blurHandler,
        submitHandler,
        inputData,
        errorMsg,
    };
};

export default useFormHandler;

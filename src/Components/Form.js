import React, { useState } from "react";
import useFormHandler from "../hooks/useFormHandler";

const Form = (props) => {
    // form hook for email
    const {
        inputData: emailVal,
        errorMsg: emailError,
        submitHandler: emailSubmit,
        blurHandler: emailBlur,
        changeHandler: emailChange,
    } = useFormHandler();
    //  phone number
    const {
        inputData: phoneVal,
        errorMsg: phoneError,
        submitHandler: phoneSubmit,
        blurHandler: phoneBlur,
        changeHandler: phoneChange,
    } = useFormHandler();
    //  full name number
    const {
        inputData: nameVal,
        errorMsg: nameError,
        submitHandler: nameSubmit,
        blurHandler: nameBlur,
        changeHandler: nameChange,
    } = useFormHandler();

    //  full message
    const {
        inputData: msgVal,
        errorMsg: msgError,
        submitHandler: msgSubmit,
        blurHandler: msgBlur,
        changeHandler: msgChange,
    } = useFormHandler();
    // password one
    const {
        inputData: password1Val,
        errorMsg: password1Error,
        submitHandler: password1Submit,
        blurHandler: password1Blur,
        changeHandler: password1Change,
    } = useFormHandler();
    // password two
    const {
        inputData: password2Val,
        errorMsg: password2Error,
        submitHandler: password2Submit,
        blurHandler: password2Blur,
        changeHandler: password2Change,
    } = useFormHandler();

    // compare password
    const [password, setPassword] = useState([]);
    const [passError, setPassError] = useState(false);
    const [passErrorMsg, setPassErrorMsg] = useState("Fill this form");

    const comparePass = (val1, val2) => {
        const firstPass = val1.toString();
        const secPass = val2.toString();
        if (firstPass === secPass) {
            return true;
        }
        return false;
    };

    const generateMessage = (event) => {
        password2Change(event);
        console.log('pass 1', password1Val, 'pass 2', password2Val)
        console.log(comparePass(password1Val, password2Val));
        if (comparePass(password1Val, password2Val)) {
            return setPassErrorMsg("")
        }
        return setPassErrorMsg("Fill this form")
    };

    // submit handler
    const submitBtnHandler = (event) => {
        event.preventDefault();
        nameSubmit();
        emailSubmit();
        phoneSubmit();
        password1Submit();
        password2Submit();
        msgSubmit();
    };

    return (
        <div className="w-[800px] mx-auto my-[80px] bg-slate-200 rounded-3xl p-[35px]">
            <form onSubmit={submitBtnHandler}>
                {/* name  */}
                <div className="flex flex-col items-start mb-8 shadow-lg border-[1px] border-gray-300 rounded-2xl px-[28px] py-[35px]">
                    <label
                        htmlFor="name"
                        className="text-xl font-sans font-medium mb-4"
                    >
                        Name
                    </label>
                    <input
                        onChange={nameChange}
                        onBlur={nameBlur}
                        value={nameVal}
                        className="px-4 py-2 w-full rounded-md"
                        type="text"
                    />
                    {/* error msg  */}
                    {nameError && (
                        <p className="text-red-500 font-sans font-medium text-base mt-3">
                            Fill this input
                        </p>
                    )}
                </div>
                {/* email   */}
                <div className="flex flex-col items-start mb-8 shadow-lg border-[1px] border-gray-300 rounded-2xl px-[28px] py-[35px]">
                    <label
                        htmlFor="email"
                        className="text-xl font-sans font-medium mb-4"
                    >
                        Email
                    </label>
                    <input
                        onChange={emailChange}
                        onBlur={emailBlur}
                        value={emailVal}
                        className="px-4 py-2 w-full rounded-md"
                        type="email"
                    />
                    {/* error msg  */}
                    {emailError && (
                        <p className="text-red-500 font-sans font-medium text-base mt-3">
                            Fill this input
                        </p>
                    )}
                </div>
                {/* phone number  */}
                <div className="flex flex-col items-start mb-8 shadow-lg border-[1px] border-gray-300 rounded-2xl px-[28px] py-[35px]">
                    <label
                        htmlFor="phoneNumber"
                        className="text-xl font-sans font-medium mb-4"
                    >
                        Phone number
                    </label>
                    <input
                        onChange={phoneChange}
                        onBlur={phoneBlur}
                        value={phoneVal}
                        className="px-4 py-2 w-full rounded-md"
                        type="number"
                    />
                    {/* error msg  */}
                    {phoneError && (
                        <p className="text-red-500 font-sans font-medium text-base mt-3">
                            Fill this input
                        </p>
                    )}
                </div>
                {/* password  */}
                <div className="flex flex-row justify-between items-start mb-8 shadow-lg border-[1px] border-gray-300 rounded-2xl px-[28px] py-[35px]">
                    <div className="w-3/6 mr-3 flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-xl font-sans font-medium mb-4"
                        >
                            Password
                        </label>
                        <input
                            onChange={password1Change}
                            onBlur={password1Blur}
                            value={password1Val}
                            className="px-4 py-2 w-full rounded-md"
                            type="text"
                        />
                        {/* error msg  */}
                        {password1Error && (
                            <p className="text-red-500 font-sans font-medium text-base mt-3">
                                Fill this input
                            </p>
                        )}
                    </div>
                    <div className="w-3/6 ml-3 flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-xl font-sans font-medium mb-4"
                        >
                            Retype your password
                        </label>
                        <input
                            onChange={(event) => {
                                generateMessage(event);
                            }}
                            onBlur={password2Blur}
                            value={password2Val}
                            className="px-4 py-2 w-full rounded-md"
                            type="text"
                        />
                        {/* error msg  */}
                        {
                            <p className="text-red-500 font-sans font-medium text-base mt-3">
                                Fill this input
                            </p>
                        }
                    </div>
                </div>
                {/* message box  */}
                <div className="flex flex-col items-start mb-8 shadow-lg border-[1px] border-gray-300 rounded-2xl px-[28px] py-[35px]">
                    <label
                        htmlFor="message"
                        className="text-xl font-sans font-medium mb-4"
                    >
                        Message
                    </label>
                    <textarea
                        onChange={msgChange}
                        onBlur={msgBlur}
                        value={msgVal}
                        className="px-4 py-3 w-full rounded-md"
                        type="text"
                    />
                    {/* error msg  */}
                    {msgError && (
                        <p className="text-red-500 font-sans font-medium text-base mt-3">
                            Fill this input
                        </p>
                    )}
                </div>
                {/* submit btn  */}
                <div className="flex flex-col items-start mt-[80px]">
                    <button className="text-xl font-sans font-medium px-[30px]  py-[12px] bg-red-900 text-white text-center capitalize rounded-lg">
                        submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;

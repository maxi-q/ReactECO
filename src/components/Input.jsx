import {FormControl, InputGroup} from "react-bootstrap";
import React from "react";

const Input = (props) => {

    // noinspection JSUnresolvedVariable
    return (
        <div>
            <InputGroup className="mb-3">

                <InputGroup.Text id="inputGroup-sizing-default">{props.inputContent.content}</InputGroup.Text>
                <FormControl
                    value= {props.inputContent.value}
                    onChange= {props.inputContent.handler}
                    name= {props.inputContent.name}
                    onBlur= {props.inputContent.blur}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </div>
    );
};

export default Input;


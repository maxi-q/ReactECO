import React from 'react'
import { Stack, Image } from 'react-bootstrap'

const Revard = (props) => {
    return (
        <div className="Revard">
            <Stack direction="horizontal" gap={0}>
                <Image src={props.value.avatar} className="RevardAva"/>
                <p className="RevardText">
                    <h5 >{props.value.title}</h5>
                    {props.value.body}
                </p>
            </Stack>
        </div>
    )
};
export default Revard
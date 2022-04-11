import React from 'react'
import { Stack, Image } from 'react-bootstrap'

const Histori = (props) => {
    return(
        <div className="Histori">
            <Stack direction="horizontal" gap={0}>
                <Image src={props.value.avatar} className="RevardAva"/>
                <p className="RevardText" style={{fontSize:"14px", fontWeight:"bold"}}>
                    {props.value.title}
                </p>
                <p className="RevardText">
                    {props.value.body}
                </p>
            </Stack>
        </div>
    )
}
export default Histori
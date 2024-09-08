import React from 'react'
import { tailChase } from 'ldrs'

const Loader = () => {
    tailChase.register();
    return (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <l-tail-chase size={54} speed="1.75" color="white" />
        </div >
    )
}

export default Loader
import React, {ReactNode} from 'react';
import {Dialog} from "@mui/material";
import { createPortal } from 'react-dom';

type MyModalComponent = {
    openModal:boolean,
    children:ReactNode,
    closeModal:()=>void
}


const MyModalComponent = ({openModal,children,closeModal}:MyModalComponent) => {
    if (!openModal) return null

    return (
            <Dialog PaperProps={{ sx: { borderRadius: ".5rem" } }} sx={{borderRadius:".5rem"}} fullWidth={true} onClose={closeModal} open={openModal}>
                {children}
            </Dialog>
    );
};

export default MyModalComponent;

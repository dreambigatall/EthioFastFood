import { useOutletContext } from "react-router-dom";
import { useState } from "react";
export default function ModalCart(){
    const [isOpen, setIsOpen] = useState(false);
    const {cartitem} = useOutletContext();

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }

    return(
        <div>
            <button onClick={openModal}>open</button>
            {
                isOpen && (
                    <div>
                        <h2>{cartitem.name}</h2>
                        <button onClick={closeModal}>close</button>
                    </div>
                )
            }
        </div>
    )
}
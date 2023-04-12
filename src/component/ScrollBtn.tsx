import { useEffect, useState } from "react";
import styled from "styled-components";

function ScrollBtn() {

    const [showBtn, setShowBtn] = useState(false);

    function scrollTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const handleShowBtn = () => {
            if (window.scrollY > 500) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        }
        window.addEventListener("scroll", handleShowBtn)
        return () => {
            window.removeEventListener("scroll", handleShowBtn)
        }
    }, [])

    return (
        showBtn?<Btn onClick={scrollTop}>▲</Btn>:<></>
    );
}

export default ScrollBtn;

const Btn = styled.div`
    width:50px;
    height:50px;
    background-color:#199831;
    border-radius:50%;
    bottom:40px;
    right:20px;
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:900;
    font-size:1.5rem;
    color:white;
    cursor:pointer;
    opacity:0.8;
`;
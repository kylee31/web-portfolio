import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NameTag = styled.div`
    background-color:#199831;
    width:100%;
    height:320px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const Info = styled.div`
    background-color:aliceblue;
    display:inline-block;
    min-width:300px;
    height:160px;
    padding:15px;
    font-weight:bold;
    font-size:1.1rem;
    color:grey;
    margin-top:10px;
`

const TabMenu = styled.div`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    display:inline-block;
    width:calc(100%/3);
    padding:20px 0;
    text-align: center;
    cursor:pointer;
    font-weight:800;
    font-size:1.3rem;
`;

const Img = styled.img`
    width: 30px;
    vertical-align: middle;
    margin-right:5px;
`

const A = styled.a`
    text-decoration-line:none;
    color:grey;
`

function Header() {
    //탭메뉴 작성(project/info)
    const navigate = useNavigate();
    const [click, setClick] = useState("main");

    useEffect(() => {
        const pages = ["main", "sub", "profile"];
        const noPages = pages.filter((e) => e !== click);
        document.getElementById(click).style.backgroundColor = "aliceblue";
        document.getElementById(click).style.color = "grey";
        noPages.map((e) => {
            document.getElementById(e).style.backgroundColor = "lightgrey";
            document.getElementById(e).style.color = "black";
            return null;
        });
    }, [click]);

    function onMain() {
        navigate(`/`);
        setClick("main");
    }

    function onSub() {
        navigate(`/sub/`);
        setClick("sub");
    }

    function onProfile() {
        navigate(`/profile/`);
        setClick("profile");
    }

    return (
        <div style={{ backgroundColor: "#199831" }}>
            <NameTag>
                <span style={{ color: "white", fontWeight: 900 }}>⚡Junior Frontend Developer, LEE KYUNG YEON⚡</span>
                <Info>
                    <img alt="" src="img/tree.png" style={{ height: "160px", float: "left", marginRight: "30px" }} />
                    <div>
                        <div style={{ marginTop: "10px" }}>
                            <A target="blank" href="https://github.com/kylee31"><Img alt="" src="img/github.png" />github</A><br /><br />
                            <A target="blank" href="https://velog.io/@kylee31"><Img alt="" src="img/blog.png" />velog</A><br /><br />
                            <A target="blank" href="https://www.youtube.com/@ky5211/featured"><Img alt="" src="img/youtube.png" />youtube</A>
                        </div>
                    </div>
                </Info>
            </NameTag>
            <TabMenu onClick={onMain} id="main">MAIN PROJECT</TabMenu>
            <TabMenu onClick={onSub} id="sub">SUB PROJECT</TabMenu>
            <TabMenu onClick={onProfile} id="profile">PROFILE</TabMenu>
        </div >
    );
}

export default Header;
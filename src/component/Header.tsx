import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

function Header() {
    //탭메뉴 작성(project/info)
    //click은 현재 선택된 메뉴의 pathname
    const navigate = useNavigate();
    const nowLoc = useLocation();
    const [click, setClick] = useState(nowLoc.pathname);

    useLayoutEffect(() => {
        const pages = ["/", "/sub/", "/profile/"];
        const noPages = pages.filter((e) => e !== click);
        const selectedTap=document.getElementById(click) as HTMLInputElement;
        selectedTap.style.backgroundColor = "aliceblue";
        selectedTap.style.color = "black";
        noPages.map((e) => {
            const notSelectedTap=document.getElementById(e) as HTMLInputElement;
            notSelectedTap.style.backgroundColor = "lightgrey";
            notSelectedTap.style.color = "grey";
            return null;
        });
    }, [click]);

    const onMain=()=>{
        navigate(`/`);
        setClick("/");
    }

    const onSub=()=>{
        navigate(`/sub/`);
        setClick("/sub/");
    }

    const onProfile=()=>{
        navigate(`/profile/`);
        setClick("/profile/");
    }

    return (
        <div style={{ backgroundColor: "#199831" }}>
            <NameTag>
                <Span>⚡JUNIOR FRONT-END DEVELOPER, LEE KYUNG YEON⚡</Span>
                <Info>
                    <TreeImg alt="" src="img/tree.png" loading="lazy"/>
                    <Div>
                        <A target="_blank" href="https://github.com/kylee31" title="code, readme 보러가기"><Img alt="" src="img/logo/github.png"/>github</A><br /><br />
                        <A target="_blank" href="https://velog.io/@kylee31" title="개발 blog 보러가기"><Img alt="" src="img/logo/blog.png"/>velog</A><br /><br />
                        <A target="_blank" href="https://www.youtube.com/@ky5211/featured" title="project 시연 영상 보러가기"><Img alt="" src="img/logo/youtube.png"/>youtube</A>
                    </Div>
                </Info>
            </NameTag>
            <TabMenu onClick={onMain} id="/">MAIN PROJECT</TabMenu>
            <TabMenu onClick={onSub} id="/sub/">SUB PROJECT</TabMenu>
            <TabMenu onClick={onProfile} id="/profile/">PROFILE</TabMenu>
        </div >
    );
}

export default Header;

const Div=styled.div`
    margin-top: 10px;
`

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
    min-width:280px;
    height:160px;
    padding:15px;
    font-weight:bold;
    font-size:1.1rem;
    color:grey;
    margin-top:10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
`

const Span = styled.span`
    color: aliceblue;
    font-weight: 900;
    font-size: 1.2rem;
`

const Img = styled.img`
    width: 30px;
    vertical-align: middle;
    margin-right:5px;
`

const TreeImg = styled.img`
    widht: 140px;
    height: 160px;
    float: left;
    margin-right: 25px;
`

const A = styled.a`
    text-decoration-line:none;
    color:grey;
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
    font-size:1.4rem;
`
import styled from "styled-components";

const Item = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:450px;
    height:500px;
    border-radius:15px;
    margin:40px 0;
    padding:20px;
    background-color:black;
`

const Title = styled.span`
    font-weight:800;
    font-size:1.2rem;
    text-align:center;
    margin-bottom:5px;
    color:white;
`
const Tech = styled.span`
    border-radius:10px;
    font-size:0.8rem;
    font-weight:bold;
    background-color:#666666;
    color:white;
    text-align:center;
    padding:0 5px;
    width:65px;
    height:20px;
    margin-right:5px;
`

const Desc = styled.div`
    width:430px;
    height:50px;
    font-size:0.9rem;
    margin-top:10px;
`

const Techs = styled.div`
    font-size:0.85rem;
    color:#666666;
    font-weight:800;
`

const Take = styled.div`
    width:430px;
    height:60px;
    font-size:0.9rem;
`

const Img = styled.img`
    width:450px;
    height:225px;
    border-bottom:2px solid black;
`

const Icon = styled.img`
    width: 25px;
    vertical-align: middle;
    margin-right:5px;
`

const A = styled.a`
    text-decoration-line:none;
    color:lightgrey;
    font-weight:800;
    font-size:0.9rem;
`

const WebLink = styled.div`
    margin-left:auto;
    margin-top:10px;
`

function MainItem({ title, src, descript, front, back, takeaway, href, webhref }) {

    return (
        <Item>
            <Title>{title}</Title>
            <Img alt="" src={src} />
            <div style={{ width: "430px", height: "200px", backgroundColor: "white", padding: "10px" }}>
                <div style={{ display: "flex", marginBottom: "5px" }}><Tech>Front-end</Tech><Techs>{front}</Techs></div>
                <div style={{ display: "flex" }}><Tech>Back-end</Tech><Techs>{back}</Techs></div>
                <Desc>{descript}</Desc>
                <Take>{takeaway}</Take>
                {
                    //(hosting) ? <A href={hosting}><Icon alt="" src="img/blog.png" />hosting page 보러가기</A> : null
                }
            </div>
            <WebLink>
                {
                    (webhref) ? <A href={webhref} style={{ color: "#b3e9af" }}><Icon alt="" src="img/website2.png" />hosting 페이지 보기 </A> : <></>
                }
                <A href={href}><Icon alt="" src="img/github2.png" />github code 보기</A>
            </WebLink>
        </Item>
    );
}

export default MainItem;
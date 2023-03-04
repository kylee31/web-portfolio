import styled from "styled-components";

const Box = styled.div`
    display:flex;
    margin:40px 0;
    align-items:center;
    justify-content:space-around;
    flex-wrap:wrap;
`

const Item = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:300px;
    height:170px;
    border-radius:15px;
    padding:20px;
    background-color:black;
    margin-right:30px;
    margin-bottom:10px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 450px;
    max-width: 690px;
`

const Title = styled.span`
    font-weight:800;
    font-size:1.2rem;
`

const Date = styled.span`
    font-size:0.9rem;
    margin-left:10px;
    font-weight:bold;
    color:#666666;
`

const Img = styled.img`
    width:300px;
    height:150px;
    border-bottom:2px solid black;
`

const Tech = styled.span`
    border-radius:10px;
    font-weight:bold;
    background-color:${props => props.color};
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 5px;
    width:85px;
    height:25px;
    margin:10px 0;
`

const Icon = styled.img`
    width: 20px;
    vertical-align: middle;
    margin-right:5px;
`

const A = styled.a`
    text-decoration-line:none;
    color:lightgrey;
    font-weight:800;
    font-size:0.8rem;
`

const WebLink = styled.div`
    margin-left:auto;
    margin-top:5px;
`

function SubItem({ src, title, date, webhref, href, youtube, color, languages, descript }) {
    return (
        <Box>
            <Item>
                {
                    (youtube) ? <iframe width="300" height="150" src={youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : <Img alt="" src={src} />
                }
                <WebLink>
                    {
                        (webhref) ? <A style={{ color: "#b3e9af" }} href={webhref} target="blank"><Icon alt="" src="img/logo/website.png" />hosting 페이지 보기 </A> : <></>
                    }
                    <A href={href} target="blank"><Icon alt="" src="img/logo/github2.png" />github code 보기</A>
                </WebLink>
            </Item>
            <Content>
                <span><Title>{title}</Title><Date>({date})</Date></span>
                <Tech color={color}>{languages}</Tech>
                <div>{descript}</div>
            </Content>
        </Box>
    );
}

export default SubItem;
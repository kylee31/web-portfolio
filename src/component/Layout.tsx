import styled from 'styled-components';
import Header from './Header';
import ScrollBtn from './ScrollBtn';

interface WrapperProps {
    children:React.ReactNode;
}

function Layout({ children }:WrapperProps) {
    return (
        <Page>
            <header>
                <Header />
            </header>
            <main>
                <Container>
                    {children}
                </Container>
                <ScrollBtn />
            </main>
        </Page>
    );
}

export default Layout;

const Page = styled.div`
    min-width:550px;
`

const Container = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
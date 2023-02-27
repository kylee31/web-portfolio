import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

function Layout({ children }) {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </>
    );
}

export default Layout;
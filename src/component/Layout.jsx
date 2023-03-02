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
        <div style={{ minWidth: "550px" }}>
            <header>
                <Header />
            </header>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </div>
    );
}

export default Layout;
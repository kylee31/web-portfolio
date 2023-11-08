import Header from "./Header";
import ScrollBtn from "./ScrollBtn";

interface WrapperProps {
  children: React.ReactNode;
}

function Layout({ children }: WrapperProps) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div>{children}</div>
        <ScrollBtn />
      </main>
    </div>
  );
}

export default Layout;

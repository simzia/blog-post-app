

function Header() {
  
  const headerView = () => {
    return (
     <header>
       <div className="bg-orange-300 py-9 text-center">
        <h2 className="text-3xl">RECENT BLOG POST</h2>
       </div>
     </header>
      
    );
  };
  return (
    <>
      <div className="fixed w-full left-0 top-0 main-container">{headerView()}</div>
      <div className="relative -z-10 w-full left-0 top-0">{headerView()}</div>
    </>
  );
}

export default Header;

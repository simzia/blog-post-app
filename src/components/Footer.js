
function Footer() {
 
  const footerView = () => {
    return (
      <footer className="bg-peach-40 flex flex-wrap footerContainer bg-orange-300 justify-between px-6 py-7">
        {/* <div className="footerContainer flex flex-row "> */}
          <div className="left-footer">
            <h2>LOGO</h2>
          </div>
          <div className="right-footer ">
            <div>copy@2022 ALL RIGHTS RESERVED </div>
          </div>
        {/* </div> */}
      </footer>
    );
  };
  return (
    <>
      <div className="fixed w-full bottom-0 left-0">{footerView()}</div>
      <div className="relative -z-10 w-full left-0 bottom-0">{footerView()}</div>
    </>
  );
}

export default Footer;

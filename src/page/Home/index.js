import ButtonEdit from "../../component/Button";
import Card from "../../component/Card";
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="bg-header">
      <div className="header-tiitle">
        <div className="left-header-title">
          <h1>
            Online photo editor for <br /> everyone
          </h1>
          <h4>
            Trải nghiệm chỉnh sửa ảnh dễ dàng với trình chỉnh sửa ảnh trực tuyến
            miễn phí của Fotor.
            <br />
            Chỉnh sửa, nâng cao trực tuyến ngay lập tức.
          </h4>
          <button className="button-edit">Edit photo for free</button>
        </div>
        <div className="right-header-title"></div>
      </div>
      <div className="footer-title">
        <h2>Discover popular features</h2>
        <div className="m-button">
        <div><ButtonEdit/></div>
        <div><ButtonEdit/></div>
        <div><ButtonEdit/></div>
        <div><ButtonEdit/></div>
        <div><ButtonEdit/></div>
        <div><ButtonEdit/></div>
        </div>
      </div>
    </div>
    
    <div className="grid_card">
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
    </div>
    </>
  );
};
export default Home;

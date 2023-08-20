import './footer.css';
const Footer = () => {
    return (
    <div className='main-footer'>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Web xây dựng để làm đồ án tốt nghiệp và sẽ hoàn thiện thêm</h1>
  
          <h2>Contact</h2>
          <address>
            521 Trương định - Hoàng Mai
          </address>
          <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
        </div>
  
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
  
            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>
  
              <li>
                <a href="#">Print</a>
              </li>
  
              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>
          
          {/* dashda */}
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
  
            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>
  
              <li>
                <a href="#">Print</a>
              </li>
  
              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>{/* dashda */}
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
  
            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>
  
              <li>
                <a href="#">Print</a>
              </li>
  
              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>
  
          
  
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
  
            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
  
              {/* ... Các mục liên quan đến pháp lý khác ... */}
            </ul>
          </li>
        </ul>
  
        <div className="legal">
          <p>&copy; 2023 Something. All rights reserved.</p>
  
          <div className="legal__links">
            <span>Nguyễn Quang Tú <span className="heart">♥</span> 61PM2</span>
          </div>
        </div>
      </footer>
      </div>
    );
    
  };

  export default Footer
  
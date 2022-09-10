import './style.css';
import mainImg from './access/content/main.jpg';

export default function ColumnLeft() {
    return (
        <div className="col l-4 infor-left">
            <img className="img-main" 
                src={mainImg}
                alt="Avatar"/>
            
            <div className="col l-12" >
                <hr className="hr"/>
                <div className="col">
                    <h1 className="title">Info</h1>
                    <h4><p>SDT: </p>0393171757</h4>
                    <h4><p>Email: </p>anhp8505@gmail.com</h4>
                    <h4><p>Dia Chi: </p>45 Nguyen Dinh Chieu, P.LocPhat, Tp.BaoLoc</h4>
                    <hr className="hr"/>
                </div>
                
                <div className="col" >
                    <h1 className="title">Facebook</h1>
                    <a href="https://www.facebook.com/profile.php?id=100013732423312" className="content-left__info-phone-face" style={{color: 'rgba(170, 29, 206, 1)'}}><p>Anh Pham</p></a>
                    <hr className="hr"/>
                </div>
                
                <div className="col" >
                    <h1 className="title">Languages</h1>
                    <h4>English</h4>
                </div>
                <hr className="hr"/>
                <div className="col white-box" ></div>
            </div>
        </div>
    )
}
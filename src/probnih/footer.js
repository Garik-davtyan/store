import React from "react";
import Imglogo from "C:/Users/user/Desktop/aaa/react-start/src/probnih/img/imglogo.png"

class Posledni extends React.Component {
    render() {
        return(
            <div className="vecydiv">
                <div className="hingdiv">
                <div>
    <button><img src={Imglogo} alt="imglog" /> </button>
                <h4 className="h4sev">Առաջարկների և բողոքների համար</h4>
                <h4 className="h4sev">զանգահարել 374 (44) *** ***</h4>
                <h4 className="h4sev">կամ գրել նամակ՝</h4>
                <h4 className="h4sev">ggd260907@gmail.com</h4>
                </div>
                <div>
                    <h4>Սպասարկում</h4>
                    <h5 className="h5verj">Առաքում և վերադարզ</h5>
                    <h5>Վճարման տարբերակներ</h5>
                    <h5>Խանութներ/Գործարան</h5>
                    <h5>Երաշխիք</h5>
                    <h5>Զեղչի քարտ</h5>
                    <h5>Կուպոն</h5>
                </div>
                <div>
                <h4>Տեղեկատվություն</h4>
        
                    <h5>Մեր Մասին</h5>
                    <h5>Ֆրանչայզինգ</h5>
                    <h5>Տվյալների պաշտպանուտյուն</h5>
                    <h5>Գովազդային Վիճակախաղ</h5>
                    <h5>Հատուկ Գին</h5>
                    <h5>Աշխատանք</h5>
                </div>
                <div></div>
                <div></div>
                </div>
                        <div className="shapkan">
                            <h4 className="h4shapka">Copyright c 2024. All Rights Reserved</h4>
                        </div>
            </div>
        )
    }
}

export default Posledni
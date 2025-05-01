import React from "react";
import { Link } from "react-router-dom";
import fotoone from "C:/Users/user/Desktop/aaa/react-start/src/probnih/img/fotooneee.png"
import foto2 from "C:/Users/user/Desktop/aaa/react-start/src/probnih/img/foto2.png"
import fotokanaci from "C:/Users/user/Desktop/aaa/react-start/src/probnih/img/foto1,2-1.png"
import fototxamardu from "C:/Users/user/Desktop/aaa/react-start/src/probnih/img/foto1,2-2.png"
import foto31 from "C:/Users/user/Desktop/aaa/react-start/src/probnih/img/sumka1.jpg"
import foto32 from "C:/Users/user/Desktop/aaa/react-start/src/probnih/img/sumkakarmir.jpg"
import foto33 from "C:/Users/user/Desktop/aaa/react-start/src/probnih/img/sumka3.jpg"


function Imgi() {
return (     <>
                <div className="fotoonecont"> 
                    <img className="fotoone" src={fotoone} alt="fotoone" style={{width: "100%", height: "700px"}}/>
                    <Link to="razmetka1">
                    <button class="glow-on-hover" type="button">բոլորը</button>
                    </Link>
                </div>
                <div>
                    <img className="foto2" src={foto2} alt="foto2" />
                </div>
                <div className="fotokantxa">
                    <Link to="/womanshoes">
                    <button className="kanacibutton">
                    <img className="fotokanaci" src={fotokanaci} alt="foto" />
                    </button>
                    </Link>
                    <h4 className="h4kanaci">Կանացի</h4>
                    <Link to="/maleshoes">
                        <button className="txamardubutton">
                    <img className="fototxamardu" src={fototxamardu} alt="foot" />
                    </button>
                    </Link>
                    <h4 className="h4txamardu">Տղամարդու</h4>
                </div>
                <div className="ereqfoto">
                    <button className="buttonereqfoto" id="button31">
                        <Link to="/sumki" >
                    <img className="ereqfot" src={foto31} alt="foto1" style={{height: "430px", width: "440px"}}/>
                    </Link>
                    </button>

                        <button className="buttonereqfoto" id="button32">
                            <Link to="/sumki" >
                    <img className="ereqfot" src={foto32} alt="foto2" style={{height: "430px", width: "440px"}} /> 
                    </Link>
                    </button>
                    
                    <button className="buttonereqfoto" id="button33">
                        <Link to="/sumki" >
                    <img className="ereqfot" src={foto33} alt="foto3" style={{height: "430px", width: "440px"}} />
                        </Link>
                        </button> 
                        
                </div>
            </>
        
        )
    }


export default Imgi


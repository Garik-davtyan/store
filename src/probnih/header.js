import React from "react";
import {
    IoPersonCircleOutline,  
    IoCallOutline,          
    IoSearchOutline,        
    IoHeartOutline,         
    IoCartOutline          
} from "react-icons/io5";
import imglogo from "C:/Users/user/Desktop/aaa/react-start/src/probnih/img/imglogo.png"
import { Link } from "react-router-dom";
import Sidebar from "./cart";


class Header extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    constructor(props){
        super(props)
        this.state = {
            peremenaya1: false,
            peremenaya2: false,
            peremenaya3: false,
            peremenaya4: false,
            karzina: false,
        }
        this.setopen = this.setopen.bind(this)
        

        this.showDropDown = this.showDropDown.bind(this)
        this.hideDropDown = this.hideDropDown.bind(this)

        this.kanacitrue = this.kanacitrue.bind(this)
        this.kanacifalse = this.kanacifalse.bind(this)

        this.txkoshiktrue = this.txkoshiktrue.bind(this)
        this.txkoshikfalse = this.txkoshikfalse.bind(this)

        this.knkoshiktrue = this.knkoshiktrue.bind(this)
        this.knkoshikfalse = this.knkoshikfalse.bind(this)
    }

    setopen() {
        this.setState((prevState) => ({
            karzina: !prevState.karzina,
        }));}

    showDropDown() {
        this.setState({peremenaya1: true})
    }

    hideDropDown() {
        this.setState({peremenaya1: false})
    }

    kanacitrue() {
        this.setState({peremenaya2:true})
    }

    kanacifalse() {
        this.setState({peremenaya2:false})
    }


    txkoshiktrue() {
        this.setState({peremenaya3: true})
    }

    txkoshikfalse() {
        this.setState({peremenaya3: false})
    }
    
    knkoshiktrue() {
        this.setState({peremenaya4: true})
    }

    knkoshikfalse() {
        this.setState({peremenaya4: false})
    }


    render(){

        const { karzina } = this.state
            return(
                <div className="aheader">
                <div className="cheader">
                    <h4 className="headerh4">Գարուն/Ամառ 25-26 </h4>
                </div>
                    <div className="bheader">
                        <div className="imglogo">
                            <Link to="/">
                        <button style={{outline: "none", background: "none", border: "none"}}>
                        <img className="logo1" src={imglogo} alt="roberto piralof" />
                        </button> 
                        </Link>
                        </div>

                        <div className="variant4">
                    <button className="varian4b">ՆՈՐ ՏԵՍԱԿԱՆԻ</button>
                    <button onMouseEnter={this.kanacitrue} onMouseLeave={this.kanacifalse}
                    className="varian4b">ԿԱՆԱՑԻ</button>

                    {this.state.peremenaya2 && (
                        <div onMouseEnter={this.kanacitrue} onMouseLeave={this.kanacifalse} className="kanaci">
                            <Link to="/womanshoes">
                            <button className="kk" onMouseEnter={this.knkoshiktrue} onMouseLeave={this.knkoshikfalse}>
                            <h4>ԿՈՇԻԿ</h4>
                            </button > 
                            </Link>
                            {this.state.peremenaya4 && (
                                <div className="knkoshik" onMouseEnter={this.knkoshiktrue} onMouseLeave={this.knkoshikfalse}> 
                                    <button className="knk"><h4>Ամառային</h4></button>
                                    <button className="knk"><h4>Սպորտային</h4></button>
                                    <button className="knk"><h4>Դասական</h4></button>
                                </div>
                            )}
                            
                            <button className="kk">
                            <h4>ՀՈՂԱԹԱՓԵՐ</h4>
                            </button>

                        </div>
                    )}

                    <button
                    onMouseEnter={this.showDropDown} onMouseLeave={this.hideDropDown}
                    className="varian4b">ՏՂԱՄԱՐԴՈՒ</button>
                    {this.state.peremenaya1 && (
                        <div onMouseLeave={this.hideDropDown} onMouseEnter={this.showDropDown} className="showdropdown">
                            <Link to="/maleshoes" >
                        <button onMouseEnter={this.txkoshiktrue} onMouseLeave={this.txkoshikfalse} className="kh">
                            <h4>ԿՈՇԻԿ</h4>
                            </button > 
                            </Link>
                            
                            {this.state.peremenaya3 &&(
                                <div onMouseEnter={this.txkoshiktrue} onMouseLeave={this.txkoshikfalse} className="txkoshik"> 
                                    <button className="txk"><h4>Սպորտային</h4></button>
                                    <button className="txk"><h4>Դասական</h4></button>
                                    <button className="txk"><h4>Լոֆեր</h4></button>
                                </div>
                            )}
                            <button className="kh">
                            <h4>ՀՈՂԱԹԱՓԵՐ</h4>
                            </button>
                            
                        </div>
                    )}
                    <button className="varian4b">ՀԱԳՈՒՍՏ-ԼՈՒՔԵՐ</button>
                        </div>
                <div className="ikonki">
                    <Link to="/register">
                    <button className="ikonka"> < IoPersonCircleOutline size={30} /></button>
                    </Link>
                    <button className="ikonka"><IoCallOutline size={30}/></button>
                    <button className="ikonka"><IoSearchOutline size={30}/> </button>
                    <button className="ikonka"><IoHeartOutline size={30}/> </button>
                    
                    <button onClick={this.setopen} className="ikonka"><IoCartOutline size={30}/></button>
                    <Sidebar isOpen={karzina} onClose={this.setopen} />
                </div>
                    </div>
                </div>
            )
        }
    }

    export default Header
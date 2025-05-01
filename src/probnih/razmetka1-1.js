import React, {useEffect} from "react";
import { IoArrowBack, } from "react-icons/io5";
import { Link } from "react-router-dom";
import koshik13 from "./img/maleshoes/koshik13.jpg"
import koshik14 from "./img/maleshoes/koshik14.jpg"
import koshik15 from "./img/maleshoes/koshik15.jpg"
import koshik16 from "./img/maleshoes/koshik16.jpg"
import koshik17 from "./img/maleshoes/koshik17.jpg"
import koshik18 from "./img/maleshoes/koshik18.jpg"
import koshik19 from "./img/maleshoes/koshik19.jpg"
import koshik20 from "./img/maleshoes/koshik20.jpg"
import koshik21 from "./img/maleshoes/koshik21.jpg"
import koshik22 from "./img/maleshoes/koshik22.jpg"
import koshik23 from "./img/maleshoes/koshik23.jpg"
import koshik24 from "./img/maleshoes/koshik24.jpg"
import koshik25 from "./img/maleshoes/koshik25.jpg"
import koshik39 from "./img/womanshoes/koshik39.jpg"
import koshik40 from "./img/womanshoes/koshik40.jpg"
import koshik41 from "./img/womanshoes/koshik41.jpg"
import koshik42 from "./img/womanshoes/koshik42.jpg"
import koshik43 from "./img/womanshoes/koshik43.jpg"
import koshik44 from "./img/womanshoes/koshik44.jpg"
import koshik45 from "./img/womanshoes/koshik45.jpg"
import koshik46 from "./img/womanshoes/koshik46.jpg"
import koshik47 from "./img/womanshoes/koshik47.jpg"
import koshik48 from "./img/womanshoes/koshik48.jpg"
import koshik49 from "./img/womanshoes/koshik49.jpg"
import koshik50 from "./img/womanshoes/koshik50.jpg"


function Razmetka11() { 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const shoess = [ 
        { id: 50, name: "Туфли Puma", price: 4999, image: koshik50 },
        { id: 25, name: "Туфли Puma", price: 4999, image: koshik25 },
        { id: 39, name: "Туфли Puma", price: 4999, image: koshik39 },
        { id: 40, name: "Туфли Puma", price: 4999, image: koshik40 },
        { id: 19, name: "Туфли Puma", price: 4999, image: koshik19 },
        { id: 41, name: "Туфли Puma", price: 4999, image: koshik41 },
        { id: 42, name: "Туфли Puma", price: 4999, image: koshik42 },
        { id: 20, name: "Туфли Puma", price: 4999, image: koshik20 },
        { id: 43, name: "", price: 12600, image: koshik43 },
        { id: 44, name: "Туфли Puma", price: 4999, image: koshik44 },
        { id: 16, name: "Туфли Puma", price: 4999, image: koshik16 },
        { id: 17, name: "Туфли Puma", price: 4999, image: koshik17 },
        { id: 18, name: "Туфли Puma", price: 4999, image: koshik18 },
        { id: 45, name: "Туфли Puma", price: 4999, image: koshik45 },
        { id: 21, name: "Туфли Puma", price: 4999, image: koshik21 },
        { id: 22, name: "Туфли Puma", price: 4999, image: koshik22 },
        { id: 46, name: "Туфли Puma", price: 4999, image: koshik46 },
        { id: 47, name: "Туфли Puma", price: 4999, image: koshik47 },
        { id: 14, name: "Туфли Puma", price: 4999, image: koshik14 },
        { id: 15, name: "Туфли Puma", price: 4999, image: koshik15 },
        { id: 13, name: "Туфли Puma", price: 4999, image: koshik13 },
        { id: 48, name: "Туфли Puma", price: 4999, image: koshik48 },
        { id: 49, name: "Туфли Puma", price: 4999, image: koshik49 },
        { id: 23, name: "Туфли Puma", price: 4999, image: koshik23 },
        { id: 24, name: "Туфли Puma", price: 4999, image: koshik24 },
    
            

]

return (
    <div className="razmetka1" style={{ display: "flex", gap: "20px", }}>
            {shoess.map((shoese) => (
                <div
                    key={shoese.id}
style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "15px", width: "250px", height: "400px", textAlign: "center",
                    }}
                >
                    <img
                        src={shoese.image} alt={shoese.name} style={{ width: "100%", height: "250px" }}/>
                    <h5>{shoese.name}</h5>
                    <p>առժեք: {shoess.price} դրամ.</p>
                    <button className="dobvkarz">ավելացնել զամբյուղում</button>
                </div>
            ))}
            <IoArrowBack size={17} />

            <button className="buttonhajordnaxord" style={{color: "black"}} >2</button>
            
            <Link to="/razmetka12">
            <button className="buttonhajordnaxord" >3</button>
            </Link>
            
            <Link to="/razmetka13">
            <button className="buttonhajordnaxord">4</button>
            </Link>
            
            <button className="buttonhajordnaxord">5</button>
            <IoArrowBack size={17} style={{transform: "rotate(180deg)"}}/>
        </div>
)
}

export default Razmetka11
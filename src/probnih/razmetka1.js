
import React, {useEffect} from "react";
import { IoArrowBack, } from "react-icons/io5";
import { Link, } from "react-router-dom";
import koshik1 from "./img/maleshoes/koshik1.jpg"
import koshik2 from "./img/maleshoes/koshik2.jpg"
import koshik3 from "./img/maleshoes/koshik3.jpg"
import koshik4 from "./img/maleshoes/koshik4.jpg"
import koshik5 from "./img/maleshoes/koshik5.jpg"
import koshik6 from "./img/maleshoes/koshik6.jpg"
import koshik7 from "./img/maleshoes/koshik7.jpg"
import koshik8 from "./img/maleshoes/koshik8.jpg"
import koshik9 from "./img/maleshoes/koshik9.jpg"
import koshik10 from "./img/maleshoes/koshik10.jpg"
import koshik11 from "./img/maleshoes/koshik11.jpg"
import koshik12 from "./img/maleshoes/koshik12.jpg"

import koshik26 from "./img/womanshoes/koshik26.jpg"
import koshik27 from "./img/womanshoes/koshik27.jpg"
import koshik28 from "./img/womanshoes/koshik28.jpg"
import koshik29 from "./img/womanshoes/koshik29.jpg"
import koshik30 from "./img/womanshoes/koshik30.jpg"
import koshik31 from "./img/womanshoes/koshik31.jpg"
import koshik32 from "./img/womanshoes/koshik32.jpg"
import koshik33 from "./img/womanshoes/koshik33.jpg"
import koshik34 from "./img/womanshoes/koshik34.jpg"
import koshik35 from "./img/womanshoes/koshik35.jpg"
import koshik36 from "./img/womanshoes/koshik36.jpg"
import koshik37 from "./img/womanshoes/koshik37.jpg"
import koshik38 from "./img/womanshoes/koshik38.jpg"





function Razmetka1() {
useEffect(() => {
    window.scrollTo(0, 0)
}, [])

const shoes = [
    { id: 12, name: "Туфли Puma", price: 4999, image: koshik12 },
    { id: 26, name: "Հողաթափեր Կոշիկ սև/մուգ շագանակագույն C5324-3", price: 14999, image: koshik26 },
    { id: 2, name: "Սպորտային Կոշիկ սև/մուգ կապույտ C5332-2", price: 17500, image: koshik2},
    { id: 27, name: "Սպորտային Կոշիկ մուգ կապույտ/խակի C5323-7", price: 16800, image: koshik27  }, 
    { id: 28, name: "Սպորտային Կոշիկ սև/մուգ կապույտ C5332-2", price: 17500, image: koshik28 },
    { id: 3, name: "Սպորտային Կոշիկ սև/սպիտակ 33194-4", price: 18600, image: koshik3 },
    { id: 29, name: "Туфли Puma", price: 4999, image: koshik29 },
    { id: 30, name: "Туфли Puma", price: 4999, image: koshik30 },
    { id: 11, name: "Լոֆեր Կոշիկ սև 4D46-1Y", price: 43200, image: koshik11 },
    { id: 31, name: "Туфли Puma", price: 4999, image: koshik31 },
    { id: 5, name: "Նոր Տեսականի Կոշիկ Սպորտային", price: 42900, image: koshik5 },
    { id: 6, name: "Սպորտային Կոշիկ սև 3551", price: 26600, image: koshik6 },
    { id: 32, name: "Туфли Puma", price: 4999, image: koshik32 },
    { id: 33, name: "Туфли Puma", price: 4999, image: koshik33 },
    { id: 34, name: "Туфли Puma", price: 4999, image: koshik34 },
    { id: 7, name: "Туфли Puma", price: 4999, image: koshik7 },
    { id: 8, name: "Туфли Puma", price: 4999, image: koshik8 },
    { id: 9, name: "Туфли Puma", price: 4999, image: koshik9 },
    { id: 35, name: "Туфли Puma", price: 4999, image: koshik35 },
    { id: 1, name: "Սպորտային Կոշիկ մուգ կապույտ/խակի C5323-7", price: 16800, image: koshik1 }, 
    { id: 36, name: "Туфли Puma", price: 4999, image: koshik36 },
    { id: 10, name: "Туфли Puma", price: 4999, image: koshik10 },
    { id: 37, name: "Туфли Puma", price: 4999, image: koshik37 },
    { id: 38, name: "Туфли Puma", price: 4999, image: koshik38 },
    { id: 4, name: "Սպորտային Կոշիկ սպիտակ սև/սպիտակ 4BF135421", price: 10500, image: koshik4 },
]

return (
    
    <div className="razmetka1" style={{ display: "flex", gap: "20px",}}>
            {shoes.map((shoe) => (
                <div
                    key={shoe.id}
style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "15px", width: "250px", height: "400px", textAlign: "center",
                    }}
                >
                    <img src={shoe.image} alt={shoe.name} style={{ width: "100%", height: "250px" }}/>
                    <h5>{shoe.name}</h5>
                    <p>առժեք: {shoe.price} դրամ.</p>
                    <button className="dobvkarz">ավելացնել զամբյուղում</button>
                </div>
            ))}
            <IoArrowBack size={17} /> 
            <Link to="/razmetka11">
            <button className="buttonhajordnaxord" >2</button>
            </Link>

            <Link to="/razmetka12">
            <button className="buttonhajordnaxord">3</button>
            </Link>

            <Link to="/razmetka13" >
            <button className="buttonhajordnaxord">4</button>
            </Link>

            <button className="buttonhajordnaxord">5</button>
            
            <IoArrowBack size={17} style={{transform: "rotate(180deg)"}}/>
    
        </div>
)
}

export default Razmetka1
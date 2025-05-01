import React, { useEffect} from "react";
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

function Womanshoes() { 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const shoess = [ 
        
        { id: 26, name: "Հողաթափեր Կոշիկ սև/մուգ շագանակագույն C5324-3", price: 14999, image: koshik26 },
        { id: 27, name: "Սպորտային Կոշիկ մուգ կապույտ/խակի C5323-7", price: 16800, image: koshik27  }, 
    { id: 28, name: "Սպորտային Կոշիկ սև/մուգ կապույտ C5332-2", price: 17500, image: koshik28 },
    { id: 29, name: "Туфли Puma", price: 4999, image: koshik29 },
    { id: 30, name: "Туфли Puma", price: 4999, image: koshik30 },
    { id: 31, name: "Туфли Puma", price: 4999, image: koshik31 },
    { id: 32, name: "Туфли Puma", price: 4999, image: koshik32 },
    { id: 33, name: "Туфли Puma", price: 4999, image: koshik33 },
    { id: 34, name: "Туфли Puma", price: 4999, image: koshik34 },
    { id: 35, name: "Туфли Puma", price: 4999, image: koshik35 },
    { id: 36, name: "Туфли Puma", price: 4999, image: koshik36 },
    { id: 37, name: "Туфли Puma", price: 4999, image: koshik37 },
    { id: 38, name: "Туфли Puma", price: 4999, image: koshik38 },
    { id: 39, name: "Туфли Puma", price: 4999, image: koshik39 },
    { id: 40, name: "Туфли Puma", price: 4999, image: koshik40 },
    { id: 41, name: "Туфли Puma", price: 4999, image: koshik41 },
    { id: 42, name: "Туфли Puma", price: 4999, image: koshik42 },
    { id: 43, name: "", price: 12600, image: koshik43 },
    { id: 44, name: "Туфли Puma", price: 4999, image: koshik44 },
    { id: 45, name: "Туфли Puma", price: 4999, image: koshik45 },
    { id: 46, name: "Туфли Puma", price: 4999, image: koshik46 },
    { id: 47, name: "Туфли Puma", price: 4999, image: koshik47 },
    { id: 48, name: "Туфли Puma", price: 4999, image: koshik48 },
    { id: 49, name: "Туфли Puma", price: 4999, image: koshik49 },
    { id: 50, name: "Туфли Puma", price: 4999, image: koshik50 },
    

]

return (
    <div className="razmetka1" style={{ display: "flex", gap: "20px", background: "rgb(196, 176, 150)" }}>
            {shoess.map((shoese) => (
                <div
                    key={shoese.id}
style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "15px", width: "250px", height: "400px", textAlign: "center",
                    }}
                >
                    <img
                        src={shoese.image} alt={shoese.name} style={{ width: "100%", height: "250px" }}/>
                    <h5>{shoese.name}</h5>
                    <p>առժեք: {shoese.price} դրամ.</p>
                    <button className="dobvkarz">ավելացնել զամբյուղում</button>
                </div>
            ))}
            </div>
)
}

export default Womanshoes
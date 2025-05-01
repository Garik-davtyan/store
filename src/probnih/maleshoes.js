import React, {useEffect} from "react"
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

function Maleshoes() {
useEffect(() => {
    window.scrollTo(0, 0)
}, [])

const shoes = [
    { id: 1, name: "Սպորտային Կոշիկ մուգ կապույտ/խակի C5323-7", price: 16800, image: koshik1 }, 
    { id: 2, name: "Սպորտային Կոշիկ սև/մուգ կապույտ C5332-2", price: 17500, image: koshik2},
    { id: 3, name: "Սպորտային Կոշիկ սև/սպիտակ 33194-4", price: 18600, image: koshik3 },
    { id: 4, name: "Սպորտային Կոշիկ սպիտակ սև/սպիտակ 4BF135421", price: 10500, image: koshik4 },
    { id: 5, name: "Նոր Տեսականի Կոշիկ Սպորտային", price: 42900, image: koshik5 },
    { id: 6, name: "Սպորտային Կոշիկ սև 3551", price: 26600, image: koshik6 },
    { id: 7, name: "Туфли Puma", price: 4999, image: koshik7 },
    { id: 8, name: "Туфли Puma", price: 4999, image: koshik8 },
    { id: 9, name: "Туфли Puma", price: 4999, image: koshik9 },
    { id: 10, name: "Туфли Puma", price: 4999, image: koshik10 },
    { id: 11, name: "Լոֆեր Կոշիկ սև 4D46-1Y", price: 43200, image: koshik11 },
    { id: 12, name: "Туфли Puma", price: 4999, image: koshik12 },
    { id: 13, name: "Туфли Puma", price: 4999, image: koshik13 },
    { id: 14, name: "Туфли Puma", price: 4999, image: koshik14 },
    { id: 15, name: "Туфли Puma", price: 4999, image: koshik15 },
    { id: 16, name: "Туфли Puma", price: 4999, image: koshik16 },
    { id: 17, name: "Туфли Puma", price: 4999, image: koshik17 },
    { id: 18, name: "Туфли Puma", price: 4999, image: koshik18 },
    { id: 19, name: "Туфли Puma", price: 4999, image: koshik19 },
    { id: 20, name: "Туфли Puma", price: 4999, image: koshik20 },
    { id: 21, name: "Туфли Puma", price: 4999, image: koshik21 },
    { id: 22, name: "Туфли Puma", price: 4999, image: koshik22 },
    { id: 23, name: "Туфли Puma", price: 4999, image: koshik23 },
    { id: 24, name: "Туфли Puma", price: 4999, image: koshik24 },
    { id: 25, name: "Туфли Puma", price: 4999, image: koshik25 },
    
]

return (
    
    <div className="razmetka1" style={{ display: "flex", gap: "20px", background: "grey"}}>
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

            </div>
)
}
export default Maleshoes
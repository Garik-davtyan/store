import React, { useEffect } from "react";
import sumka1 from "./img/sumki/sumka.jpg"
import sumka2 from "./img/sumki/sumka2.jpg"
import sumka3 from "./img/sumki/sumka4.jpg"
import sumka4 from "./img/sumki/sumka5.jpg"
import sumka5 from "./img/sumki/sumka6.jpg"
import sumka6 from "./img/sumki/sumka7.jpg"
import sumka7 from "./img/sumki/sumka8.jpg"
import sumka8 from "./img/sumki/sumka9.jpg"
import sumka9 from "./img/sumki/sumka10.jpg"
import sumka10 from "./img/sumki/sumka11.jpg"

function Sumki() {
useEffect(() => {
    window.scrollTo(0, 0)
}, [])

const sumki = [
    { id: 102, name: "Նոր Տեսականի Պայուսակ սև/բաց", price: 10500, image: sumka1 },
    { id: 103, name: "Նոր Տեսականի Պայուսակ բաց", price: 11900, image: sumka2 },
    { id: 104, name: "Նոր Տեսականի Պայուսակ սև/կարմիր", price: 24999, image: sumka3 },
    { id: 105, name: "Նոր Տեսականի Պայուսակ սև", price: 17000, image: sumka4 },
    { id: 106, name: "Նոր Տեսականի Պայուսակ բորդո", price: 15600, image: sumka5 },
    { id: 107, name: "Պայուսակ կն. 8030", price: 21000, image: sumka6 },
    { id: 108, name: "Պայուսակ կն. 2802", price: 13500, image: sumka7 },
    { id: 109, name: "Պայուսակ կն. 2301", price: 12000, image: sumka8 },
    { id: 110, name: "Պայուսակ կն. 8163", price: 16000, image: sumka9 },
    { id: 111, name: "6189", price: 14000, image: sumka10 },
    
    
]

return (
    
    <div className="razmetka1" style={{ display: "flex", gap: "20px",}}>
            {sumki.map((shoe) => (
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
            )}


export default Sumki
import React, {useEffect} from "react";
import { IoArrowBack, } from "react-icons/io5";
import { Link, } from "react-router-dom";



function Razmetka13() {
useEffect(() => {
    window.scrollTo(0, 0)
}, [])

const shoes = [
    { id: 76, name: "Նոր Տեսականի Կոշիկ Սպորտային բաց բեժ/կապույտ/սև 4916-527", price: 19250, image: "fff"}, 
    { id: 77, name: "Դասական Կոշիկ սև A278-912H", price: 22500, image: "dddd" },
    { id: 78, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 79, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 80, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 81, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 82, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 83, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 84, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 85, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 86, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 87, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 88, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 89, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 90, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 91, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 92, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 93, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 94, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 95, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 96, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 97, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 98, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 99, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 100, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
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

            <button className="buttonhajordnaxord" style={{color: "black"}}>4</button>
            
            <button className="buttonhajordnaxord">5</button>
            
            <IoArrowBack size={17} style={{transform: "rotate(180deg)"}}/>
    
        </div>
)
}

export default Razmetka13
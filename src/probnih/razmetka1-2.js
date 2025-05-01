import React, {useEffect} from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";


function Razmetka12() {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
    const shoesss = [
        { id: 51, name: "Նոր Տեսականի Կոշիկ Սպորտային բաց բեժ/կապույտ/սև 4916-527", price: 19250, image: "ddd" }, 
    { id: 52, name: "Դասական Կոշիկ սև A278-912H", price: 22500, image: "djdjd"  },
    { id: 53, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 54, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 55, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 56, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 57, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 58, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 59, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 60, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 61, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 62, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 63, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 64, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 65, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 66, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 67, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 68, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 69, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 70, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 71, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 72, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 73, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 74, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    { id: 75, name: "Туфли Puma", price: 4999, image: "/images/puma.jpg" },
    ]

    return (
    
        <div className="razmetka1" style={{ display: "flex", gap: "20px", }}>
                {shoesss.map((shoe) => (
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
                <Link to="/razmetka11" >
                <button className="buttonhajordnaxord" >2</button>
                </Link>

                <button className="buttonhajordnaxord" style={{color: "black"}}>3</button>
                
                <Link to="/razmetka13" >
                <button className="buttonhajordnaxord">4</button>
                </Link>

                <button className="buttonhajordnaxord">5</button>
                
                <IoArrowBack size={17} style={{transform: "rotate(180deg)"}}/>
        
            </div>
    )
}

export default Razmetka12
import { useEffect } from "react";

export function Colors(props) {

    const handleClick = (event) => {
        props.getBgColor(event.target.style.backgroundColor)
    }
    
    useEffect(() => {
        let count = 1;
        props.colors.forEach(col => {
            let element = document.getElementById("color-"+count);
            count++;
            element.style.backgroundColor = col;
        });
    }, [props])
    
    return (
        <div className="d-flex col-pos justify-content-center">
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-1"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-2"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-3"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-4"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-5"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-6"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-7"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-8"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-9"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-10"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-11"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-12"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-13"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-14"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-15"></button></div>
            <div className="pe-2"><button onClick={handleClick} className="btn p-3 rounded-0" id="color-16"></button></div>
        </div> 
    )
}

import { useState } from "react"
import "./productlist.css"

export default function ProductList () {
    const [status, setStatus] = useState(false)

    return (
        <div id="container-product">
        <div id="image-cart"></div>
        <div id="data-product">
            <div className="information-text">
            <text>Nome: <text className="data">{'Nome do produto'}</text></text>
            <text>Código: <text className="data">{'12345678'}</text></text>
            </div>
            
            <div className="information-text">
                 <text>Preço: <text className="data">{'164,90'}</text></text>
                 <text>Status: {status == true ? <text id="in-stock">Em estoque</text> : <text id="out-stock">Fora de estoque</text>}</text>
            </div>
           
        </div>
        </div>
    )
}
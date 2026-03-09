import "./productlist.css"

export default function ProductList({ nome, codigo, preco, quantity, onClick }) {

    const status = quantity > 0

    return (
        <div id="container-product" onClick={onClick}>
            <div id="image-cart"></div>

            <div id="data-product">
                <div className="information-text">
                    <span>Nome: <span className="data">{nome}</span></span>
                    <span>Código: <span className="data">{codigo}</span></span>
                </div>
                
                <div className="information-text">
                    <span>Preço: <span className="data">{preco}</span></span>
                    
                    <span>
                        Status:
                        {status
                            ? <span id="in-stock"> Em estoque</span>
                            : <span id="out-stock"> Fora de estoque</span>
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}
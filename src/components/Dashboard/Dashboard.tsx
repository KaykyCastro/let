import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon} from "@phosphor-icons/react"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import ProductList from "./ProductList"
import "./dash.css"

export default function Dashboard (){
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("")
    const navigate = useNavigate()

    const categorias = ["Perfumes", "Cremes"]
    const status = ["Em estoque", "Sem estoque"]

 const handleGoBack = async () => {
      navigate("/")
  }

    return (
        <div id="container-dash">
            <button onClick={handleGoBack} id="goback-btn"> <ArrowLeftIcon size={20} weight="bold" color="#e69216"/> </button>
           <div id="search-area">
            <div>
               <h1>Estoque</h1>
            <input placeholder="Pesquise aqui o produto:" type="search" id="search-input"></input> 

              <div id="selects">
                <select 
                    value={categoriaSelecionada}
                    onChange={(e) => setCategoriaSelecionada(e.target.value)}>
                    <option value="">Categorias</option>
                    {categorias.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                    ))}
                </select>

                <select 
                    value={categoriaSelecionada}
                    onChange={(e) => setCategoriaSelecionada(e.target.value)}>
                    <option value="">Status</option>
                    {status.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                    ))}
                </select>

                </div> 
                

            </div>
            

                <div id="list-search">
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                </div>
           </div>

           <div id="register-area">
            <h1 >Cadastrar:</h1>

            <div id="register-carts">
                <div className="container-register">

            <text>Cadastrar Produto</text>

                <section>
                <text>Nome do produto:</text>
                <input placeholder="Insira o nome"></input>
            </section> 

            <section>
                <text>Quantidade do produto:</text>
                <input type="number" step={1} placeholder="Insira o nome"></input>
            </section> 

            <section>
                <text>Valor do produto:</text>
                <input type="number" step="0.01" min="0" placeholder="Insira o nome"></input>
            </section> 

            <section>
                <text>Categoria do produto:</text>
                 <select 
                    value={categoriaSelecionada}
                    onChange={(e) => setCategoriaSelecionada(e.target.value)}>
                    <option value="">Categorias</option>
                    {categorias.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                    ))}
                </select>
            </section> 
            
            <button>Salvar</button>

            </div>

            <div className="container-register">

            <text>Cadastrar Categoria</text>

                <section>
                <text>Nome da categoria:</text>
                <input placeholder="Insira o nome"></input>
            </section> 
            
            <button>Salvar</button>
            <button>Deletar</button>

            </div>
            </div>

            <button id="backup-btn">Fazer backup</button>
            
           </div>
        </div>
    )
}
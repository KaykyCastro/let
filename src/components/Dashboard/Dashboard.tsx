import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "@phosphor-icons/react"
import { useState, useEffect } from "react"
import ProductList from "./ProductList"
import EditProduct from "./EditProduct"
import "./dash.css"

export default function Dashboard() {

    //Produto selecionado
    const [showEdit, setShowEdit] = useState(false)
    const [produtoSelecionado, setProdutoSelecionado] = useState(null)

    //Listagem
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const navigate = useNavigate()

    //Cadastro produto
    const [nameRegister, setNameRegister] = useState("")
    const [quantityRegister, setQuantityRegister] = useState("")
    const [priceRegister, setPriceRegister] = useState("")
    const [codeRegister, setCodeRegister] = useState("")
    const [categoryRegister, setCategoryRegister] = useState("")

    //Cadastro categoria
    const [categoryNameRegister, setCategoryNameRegister] = useState("")

    useEffect(() => {
        carregarDados()
    }, [])

    const status = ["Em estoque", "Sem estoque"]

    function handleGoBack() {
        navigate("/")
    }

    function selecionarProduto(produto) {
        setProdutoSelecionado(produto)
        setShowEdit(true)
    }

    async function registrarProduto(e) {
        e.preventDefault()

        const produto = {
            nome: nameRegister,
            codigoBarras: codeRegister,
            preco: Number(priceRegister),
            estoque: Number(quantityRegister),
            categoriaId: Number(categoryRegister)
        }

        try {
            const res = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produto)
            })

            await res.json()

            carregarDados()

        } catch (error) {
            console.error("Erro ao registrar produto:", error)
        }
    }

    async function buscarProdutos() {
        const response = await fetch("http://localhost:3000/produtos")
        const data = await response.json()
        setProducts(data)
    }

    async function buscarCategorias() {
        const response = await fetch("http://localhost:3000/categorias")
        const data = await response.json()
        setCategory(data)
    }

    async function carregarDados() {
        await buscarProdutos()
        await buscarCategorias()
    }

    async function registrarCategoria() {
        try {
            const response = await fetch("http://localhost:3000/categorias", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: categoryNameRegister
                })
            })

            await response.json()

            setCategoryNameRegister("")
            carregarDados()

        } catch (error) {
            console.error("Erro ao criar categoria:", error)
        }
    }

    console.log(showEdit)
    console.log(produtoSelecionado)
    console.log()

    return (
        <div id="container-dash">


            {showEdit && produtoSelecionado && (
                <EditProduct
                    nome={produtoSelecionado.nome}
                    codigo={produtoSelecionado.codigoBarras}
                    preco={produtoSelecionado.preco}
                    quantidade={produtoSelecionado.estoque}
                    categoriaId={produtoSelecionado.categoriaId}
                    onClose={() => setShowEdit(false)}
                />
            )}

            <button onClick={handleGoBack} id="goback-btn">
                <ArrowLeftIcon size={20} weight="bold" color="#e69216" />
            </button>

            <div id="search-area">
                <div>
                    <h1>Estoque</h1>

                    <input
                        placeholder="Pesquise aqui o produto:"
                        type="search"
                        id="search-input"
                    />

                    <div id="selects">

                        <select>
                            <option value="">Categorias</option>
                            {category.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.nome}
                                </option>
                            ))}
                        </select>

                        <select>
                            <option value="">Status</option>
                            {status.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>

                <div id="list-search">
                    {products.map((produto) => (
                        <ProductList
                            key={produto.id}
                            nome={produto.nome}
                            codigo={produto.codigoBarras}
                            preco={produto.preco}
                            quantity={produto.estoque}
                            onClick={() => selecionarProduto(produto)}
                        />
                    ))}
                </div>

            </div>

            <div id="register-area">

                <h1>Cadastrar:</h1>

                <div id="register-carts">

                    <div className="container-register">

                        <text>Cadastrar Produto</text>

                        <section>
                            <text>Nome do produto:</text>
                            <input
                                onChange={(e) => setNameRegister(e.target.value)}
                            />
                        </section>

                        <section>
                            <text>Código do produto:</text>
                            <input
                                onChange={(e) => setCodeRegister(e.target.value)}
                            />
                        </section>

                        <section>
                            <text>Quantidade do produto:</text>
                            <input
                                type="number"
                                min="0"
                                onChange={(e) => setQuantityRegister(e.target.value)}
                            />
                        </section>

                        <section>
                            <text>Valor do produto:</text>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                onChange={(e) => setPriceRegister(e.target.value)}
                            />
                        </section>

                        <section>
                            <text>Categoria do produto:</text>
                            <select
                                value={categoryRegister}
                                onChange={(e) => setCategoryRegister(e.target.value)}
                            >
                                <option value="">Categorias</option>

                                {category.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.nome}
                                    </option>
                                ))}

                            </select>
                        </section>

                        <button onClick={registrarProduto}>Salvar</button>

                    </div>

                    <div className="container-register">

                        <text>Cadastrar Categoria</text>

                        <section>
                            <text>Nome da categoria:</text>
                            <input
                                value={categoryNameRegister}
                                onChange={(e) => setCategoryNameRegister(e.target.value)}
                            />
                        </section>

                        <button onClick={registrarCategoria}>Salvar</button>

                    </div>

                </div>

                <button id="backup-btn">Fazer backup</button>

            </div>

        </div>
    )
}
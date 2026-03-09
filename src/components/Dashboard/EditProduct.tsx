import { useState, useEffect } from "react"
import "./editproduct.css"

export default function EditProduct({
  nome,
  codigo,
  preco,
  quantidade,
  categoriaId,
  onClick,
  onClose
}) {

  const [nameEdit, setNameEdit] = useState("")
  const [codeEdit, setCodeEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [quantityEdit, setQuantityEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [category, setCategory] = useState([])

  //Carregar categorias
  useEffect(() => {
    buscarCategorias()
  }, [])

  async function buscarCategorias() {
    const response = await fetch("http://localhost:3000/categorias")
    const data = await response.json()
    setCategory(data)
  }

  //Preencher formulário quando abrir
  useEffect(() => {
    setNameEdit(nome || "")
    setCodeEdit(codigo || "")
    setPriceEdit(preco || "")
    setQuantityEdit(quantidade || "")
    setCategoryEdit(categoriaId || "")
  }, [nome, codigo, preco, quantidade, categoriaId])

  return (
    <div id="bg-edit" onClick={onClose}>

      <div
        id="container-edit"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          id="close-btn-edit"
          onClick={onClose}
        >
          ✕
        </button>

        <h1>Editar Produto</h1>

        <section>
          <label>Nome do produto:</label>
          <input
            value={nameEdit}
            onChange={(e) => setNameEdit(e.target.value)}
          />
        </section>

        <section>
          <label>Código do produto:</label>
          <input
            value={codeEdit}
            onChange={(e) => setCodeEdit(e.target.value)}
          />
        </section>

        <section>
          <label>Quantidade do produto:</label>
          <input
            type="number"
            value={quantityEdit}
            onChange={(e) => setQuantityEdit(e.target.value)}
          />
        </section>

        <section>
          <label>Valor do produto:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={priceEdit}
            onChange={(e) => setPriceEdit(e.target.value)}
          />
        </section>

        <section>
          <label>Categoria do produto:</label>
          <select
            value={categoryEdit}
            onChange={(e) => setCategoryEdit(e.target.value)}
          >
            <option value="">Categorias</option>

            {category.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}

          </select>
        </section>

        <button>Salvar</button>

      </div>
    </div>
  )
}
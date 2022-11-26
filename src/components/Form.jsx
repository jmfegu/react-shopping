import { useEffect, useState } from "react"

export const Form = ({initialPrice}) => {

  const [itemPrice, setItemPrice] = useState(initialPrice);
  const [additions, setAdditions] = useState({
    wood: 0,
    shipping: 0,
  });

  const onSelectWood = ({ target }) => {
    const { name, value } = target;
    setAdditions({
      ...additions,
      [name]: Number(value),
    });
  }

  const onAddShipping = ({target}) => {
    const {name, checked} = target;
    const value = checked ? target.value : 0;

    setAdditions({
      ...additions,
      [name]: Number(value),
    });

  }

  useEffect(() => {
    const additionsList = Object.values(additions);
    const total = additionsList.reduce((accumulator, addition) => {
      return accumulator + addition;
    }, 0);
    setItemPrice(initialPrice + total);

  }, [additions])

  return (
    <>
      <div className="container">
        <p className="mb-2 h5">Base de la mesa: <strong>{initialPrice}€</strong></p>
        <div className="shopping-card">
          <form>
            <label>Selección del tablero: </label>
            <select onChange={onSelectWood} name="wood" className="form-select mb-3" aria-label="Default select example">
              <option value="0">Sin tablero</option>
              <option value="90">Pino +90</option>
              <option value="150">Roble +150</option>
              <option value="60">Abeto +60</option>
              <option value="200">Iroko +200</option>
              <option value="180">Nogal +180</option>
            </select>
            <div className="form-check">
              <label className="form-check-label">Envío a domicilio +16€</label>
              <input onChange={onAddShipping } type="checkbox" name="shipping" value="16" className="form-check-input" />
            </div>
          </form>
          <hr/>
          <p className="h2">Precio final: <strong>{ itemPrice }€</strong></p>
        </div>
      </div>
    </>
  )
}

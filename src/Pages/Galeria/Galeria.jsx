
import data from '../../data/card.json'
import { Card } from '../../components/Card/Card'
import "./Galeria.css"
import { useState, useEffect } from 'react'

export const Galeria = () => {
  const [card, setCard] = useState("puerta")
  const [filtered, setfiltered] = useState([])

  useEffect(() => {
    const filteredDates = data.filter((item) => item.description.toLowerCase() === card)
    setfiltered(filteredDates)
  }, [card])

  return (
    <main className='container__galery'>
      <h3 className='galery__title'>Nuestros Trabajos</h3>
      <section>
        <button onClick={() => setCard("puerta")}>Puertas</button>
        <button onClick={() => setCard("ventana")}>Ventanas</button>
        <button onClick={() => setCard("reja")}>Rejas</button>
        <button onClick={() => setCard("cubierta")}>Cubiertras</button>
      </section>
      <div className='galery__img'>
          {
            filtered.map(item =>
              <Card
                id={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
              >
              </Card>
            )
          }
      </div>
    </main>
  )
}

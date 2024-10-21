
import  data  from '../../data/card.json'
import { Card } from '../../components/Card/Card'

export const Galeria = () => {
 
  return (
    <>
      <div className='card-area'>
        <div className='wrapper'>
          <div className='box-area'>
            {
              data.map(item =>
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
        </div>
      </div>
    </>
  )
}

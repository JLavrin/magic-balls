import { FunctionComponent, useEffect } from 'react'
import Field from 'src/logic/game/Field'

const HomeView: FunctionComponent = () => {
  useEffect(() => {
    console.log('Ładowanie obrazu')
    new Field()
  }, [])


  return (
    <div>
      <canvas id="game"></canvas>
    </div>
  )
}
export default HomeView

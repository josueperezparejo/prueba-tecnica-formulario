import { useSelector } from 'react-redux';
import { Step1, Step2, Step3, Step4, Step5 } from './components';
import { Divider } from '@nextui-org/react';
import './styles/index.css'

const App = () => {
  const paginas = [1, 2, 3, 4,]

  const { page } = useSelector((state) => state.paginador)

  return (
    <div className='min-h-screen py-20' style={{ background: ' #F3F3E3' }}>
      <div className='w-7/12 mx-auto mb-5'>
        <h1 className='font-bold text-center'>Join our Community of Developers</h1>
        <p className='text-center'>To join our community and participate in frontend challenges. <br />
          Please fill out the following form.</p>
      </div>

      <div className='bg-white shadow-xl container mx-auto relative rounded-lg' style={{ width: '70%', height: '100%' }} >

        {/* Steper */}
        {page < 5 &&
          <div className='flex flex-wrap gap-4 justify-evenly place-items-center mb-4 rounded-full text-white padre' >
            {paginas.map((pagina, index) => (
              <div key={index} style={{ backgroundColor: `${pagina <= page ? '#FC6C4C' : '#E5E7EB'}` }} className={`w-10 h-10 rounded-full mt-6 grid place-items-center font-semibold cursor-pointer ${pagina <= page ? 'bg-orange-500' : 'bg-gray-300 text-black'}`}>
                <div>{pagina}</div>
              </div>
            ))}
          </div>}

        <div className='w-10/12 mx-auto my-5'>
          <Divider />
        </div>
        {/* Formularios */}
        {page == 1 && <Step1 />}
        {page == 2 && <Step2 />}
        {page == 3 && <Step3 />}
        {page == 4 && <Step4 />}
        {page == 5 && <Step5 />}
      </div>
    </div>
  )
}

export default App

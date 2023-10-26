import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Divider } from '@nextui-org/react';
import { nextPage, previousPage } from '../store/paginadorSlice';
import { saveStep1 } from '../store/formSlice';
import '../styles/index.css';

export const Step1 = () => {
  const { fullname, email, phone, portfolio } = useSelector((state) => state.form)
  const { page } = useSelector((state) => state.paginador)
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullname,
      email,
      phone,
      portfolio
    }
  })

  const onSubmit = (data) => {
    dispatch(saveStep1(data))
    dispatch(nextPage())
  }

  return (
    <div className="container mx-auto w-10/12">
      <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>Personal Information</h1>
      <p style={{ color: '#6B7280' }}>Please provide your personal details so we can get to know you better.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 py-4">
          <div>
            <label htmlFor="fullname" className="py-2 font-semibold cursor-pointer">Full Name</label>
            <input {...register('fullname', { required: true })} id="fullname" type="text" placeholder="Josue Perez" className="input w-full" />
          </div>

          <div>
            <label htmlFor="email" className="py-2 font-semibold cursor-pointer">Email Address</label>
            <input {...register('email', { required: true })} id="email" type="text" placeholder="name@email.com" className="input w-full" />
          </div>

          <div>
            <label htmlFor="phone" className="py-2 font-semibold cursor-pointer">Phone Number</label>
            <input {...register('phone', { required: true })} id="phone" type="tel" placeholder="+91 1234567890" className="input w-full" />
          </div>

          <div>
            <label htmlFor="portfolio" className="py-2 font-semibold cursor-pointer">Portfolio/GitHub Link</label>
            <input {...register('portfolio', { required: true })} id="portfolio" type="text" placeholder="github.com/rishipurwar1" className="input w-full" />
          </div>
        </div>

        <div className='w-full'>
          <div className='my-5'>
            <Divider />
          </div>

          {errors.fullname || errors.email || errors.phone || errors.portfolio ? <p style={{ backgroundColor: '#FC6C4C' }} className='text-white rounded-md w-6/12 mx-auto text-center m-0'>All fields are required.</p> : null}
          <div className='grid grid-cols-2 gap-4 pt-5 pb-10 w-full'>
            <button onClick={() => dispatch(previousPage())} style={{ color: '#FC6C4C', border: '#FC6C4C solid 2px' }} className={`w-full rounded-lg p-2 ${page == 1 && 'invisible'}`}>Go Back</button>
            <button type='submit' style={{ background: '#FC6C4C' }} className={`text-white p-2 rounded-md hover:opacity-90 col-start-2 justify-self-end ${page == 4 && 'hidden'}`}  >Next Step</button>
          </div>
        </div>
      </form>
    </div>
  )
}

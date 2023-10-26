import { useDispatch, useSelector } from "react-redux"
import { Divider, Input } from "@nextui-org/react"
import { nextPage, previousPage } from "../store/paginadorSlice"

export const Step4 = () => {

  const dispatch = useDispatch()
  const { fullname, email, phone, portfolio, skillLevel, challenge } = useSelector((state) => state.form)
  const { page } = useSelector((state) => state.paginador)

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(nextPage())
  }

  return (
    <div className="container mx-auto w-10/12">
      <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>Review and Confirm</h1>
      <p style={{ color: '#6B7280' }}>Please review your information to make sure everything is accurate.</p>

      <form onSubmit={onSubmit}>
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 py-4">
          <div>
            <Input value={fullname} readOnly className="border-orange-400 border-solid" type="email" label="Full Name" placeholder="" />
          </div>

          <div>
            <Input value={email} readOnly type="email" label="Email Address" placeholder="" />
          </div>

          <div>
            <Input value={phone} readOnly type="email" label="Phone Number" placeholder="" />
          </div>

          <div>
            <Input value={portfolio} readOnly type="email" label="Portfolio/GitHub Link" placeholder="" />
          </div>
          <div>
            <Input value={skillLevel} readOnly type="email" label="Skill Level" placeholder="" />
          </div>
          <div>
            <Input value={challenge} readOnly type="email" label="Challenge" placeholder="" />
          </div>
        </div>

        <div className=''>
          <div className='my-5'>
            <Divider />
          </div>
          <div className='grid grid-cols-2 gap-4 pt-5 pb-10 w-full'>
            <button onClick={() => dispatch(previousPage())} style={{ color: '#FC6C4C', border: '#FC6C4C solid 2px' }} className={`text-white p-2  rounded-md hover:opacity-90 col-start-1 justify-self-start ${page == 1 && 'invisible'}`}  >Go Back</button>
            <button type='submit' onClick={onSubmit} style={{ background: '#FC6C4C' }} className={`text-white p-2  rounded-md hover:opacity-90 col-start-2 justify-self-end ${page != 4 && 'hidden'}`}  >Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

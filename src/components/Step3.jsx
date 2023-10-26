import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Divider } from "@nextui-org/react";
import { nextPage, previousPage } from "../store/paginadorSlice";
import { saveStep3 } from "../store/formSlice";

export const Step3 = () => {

  const dispatch = useDispatch()
  const { challenge } = useSelector((state) => state.form)
  const { page } = useSelector((state) => state.paginador)

  const [angular, setAngular] = useState(false)
  const [html, setHtml] = useState(false)
  const [message, setMessage] = useState(false)
  const [react, setReact] = useState(false)
  const [vue, setVue] = useState(false)

  const handleHtml = () => {
    setHtml(!html)
    setReact(false)
    setAngular(false)
    setVue(false)
    setMessage(false)
  }

  const handleReact = () => {
    setHtml(false)
    setReact(!react)
    setAngular(false)
    setVue(false)
    setMessage(false)
  }

  const handleAngular = () => {
    setHtml(false)
    setReact(false)
    setAngular(!angular)
    setVue(false)
    setMessage(false)
  }

  const handleVue = () => {
    setHtml(false)
    setReact(false)
    setAngular(false)
    setVue(!vue)
    setMessage(false)
  }

  useEffect(() => {
    switch (challenge) {
      case 'HTML/CSS/JS':
        handleHtml()
        break;
      case 'ReactJs':
        handleReact()
        break;
      case 'AngularJs':
        handleAngular()
        break;
      case 'Vue.js':
        handleVue()
        break;
      default:
        break;
    }
  }, [challenge])

  const onSubmit = (event) => {
    event.preventDefault()
    if (html) {
      dispatch(saveStep3({ challenge: 'HTML/CSS/JS' }))
      dispatch(nextPage())
    } else if (react) {
      dispatch(saveStep3({ challenge: 'ReactJs' }))
      dispatch(nextPage())
    } else if (angular) {
      dispatch(saveStep3({ challenge: 'AngularJs' }))
      dispatch(nextPage())
    } else if (vue) {
      dispatch(saveStep3({ challenge: 'Vue.js' }))
      dispatch(nextPage())
    } else {
      setMessage(true)
    }
  }

  const onBack = (event) => {
    event.preventDefault()
    if (html) {
      dispatch(saveStep3({ challenge: 'HTML/CSS/JS' }))
      dispatch(previousPage())
    } else if (react) {
      dispatch(saveStep3({ challenge: 'ReactJs' }))
      dispatch(previousPage())
    } else if (angular) {
      dispatch(saveStep3({ challenge: 'AngularJs' }))
      dispatch(previousPage())
    } else if (vue) {
      dispatch(saveStep3({ challenge: 'Vue.js' }))
      dispatch(previousPage())
    } else {
      dispatch(previousPage())
      dispatch(saveStep3({ challenge: '' }))
    }
  }

  return (
    <div className="container mx-auto w-10/12">
      <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>Challenge Preference</h1>
      <p style={{ color: '#6B7280' }}>Please tell us which frontend challenges you would like to participate in.</p>

      <form onSubmit={onSubmit}>
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 py-4">

          <div className={`flex items-center gap-4 p-4 rounded-lg border-2 ${html ? 'border-orange-500' : ''}`}>
            <Checkbox isSelected={html} onChange={handleHtml} name="option" color="warning" >HTML/CSS/JS</Checkbox>
          </div>
          <div className={`flex items-center gap-4 p-4 rounded-lg border-2 ${react ? 'border-orange-500' : ''}`}>
            <Checkbox isSelected={react} onChange={handleReact} name="option" color="warning" >ReactJs</Checkbox>
          </div>
          <div className={`flex items-center gap-4 p-4 rounded-lg border-2 ${angular ? 'border-orange-500' : ''}`}>
            <Checkbox isSelected={angular} onChange={handleAngular} name="option" color="warning" >AngularJs</Checkbox>
          </div>
          <div className={`flex items-center gap-4 p-4 rounded-lg border-2 ${vue ? 'border-orange-500' : ''}`}>
            <Checkbox isSelected={vue} onChange={handleVue} name="option" color="warning" >Vue.js</Checkbox>
          </div>
        </div>

        <div className='w-full'>
          <div className='my-5'>
            <Divider />
          </div>

          {message && <p style={{ backgroundColor: '#FC6C4C' }} className='text-white rounded-md sm:w-11/12 md:w-6/12 mx-auto text-center m-0'>Select an option.</p>}

          <div className='grid grid-cols-2 gap-4 pt-5 pb-10 w-full'>
            <button onClick={onBack} style={{ color: '#FC6C4C', border: '#FC6C4C solid 2px' }} className={`text-white p-2  rounded-md hover:opacity-90 col-start-1 justify-self-start ${page == 1 && 'invisible'}`}  >Go Back</button>
            <button type='submit' onClick={onSubmit} style={{ background: '#FC6C4C' }} className={`text-white p-2  rounded-md hover:opacity-90 col-start-2 justify-self-end ${page == 4 && 'hidden'}`}  >Next Step</button>
          </div>
        </div>
      </form>
    </div>
  )
}

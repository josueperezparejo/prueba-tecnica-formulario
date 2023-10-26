import { useEffect, useState } from "react";
import { saveStep2 } from "../store/formSlice";
import { nextPage, previousPage } from "../store/paginadorSlice";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Image } from "@nextui-org/react";

import Icon1 from '../icons/icon1.svg';
import Icon2 from '../icons/icon2.svg';
import Icon3 from '../icons/icon3.svg';
import Icon4 from '../icons/icon4.svg';

export const Step2 = () => {

    const { skillLevel } = useSelector((state) => state.form)
    const { page } = useSelector((state) => state.paginador)
    const dispatch = useDispatch()

    const [beginner, setBeginner] = useState(false)
    const [intermediate, setIntermediate] = useState(false)
    const [advanced, setAdvanced] = useState(false)
    const [expert, setExpert] = useState(false)
    const [alertMessage, setAlertMessage] = useState(false)

    const handleBeginner = () => {
        setBeginner(!beginner)
        setIntermediate(false)
        setAdvanced(false)
        setExpert(false)
        setAlertMessage(false)
    }

    const handleIntermediate = () => {
        setBeginner(false)
        setIntermediate(!intermediate)
        setAdvanced(false)
        setAlertMessage(false)
        setExpert(false)
    }

    const handleAdvance = () => {
        setBeginner(false)
        setIntermediate(false)
        setAdvanced(!advanced)
        setExpert(false)
        setAlertMessage(false)
    }

    const handleExpert = () => {
        setBeginner(false)
        setIntermediate(false)
        setAdvanced(false)
        setExpert(!expert)
        setAlertMessage(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (beginner) {
            dispatch(saveStep2({ skillLevel: 'Beginner' }))
            dispatch(nextPage())
        } else if (intermediate) {
            dispatch(saveStep2({ skillLevel: 'Intermediate' }))
            dispatch(nextPage())
        } else if (advanced) {
            dispatch(saveStep2({ skillLevel: 'Advanced' }))
            dispatch(nextPage())
        } else if (expert) {
            dispatch(saveStep2({ skillLevel: 'Expert' }))
            dispatch(nextPage())
        } else {
            setAlertMessage(true)
        }
    }

    const onBack = (event) => {
        event.preventDefault()
        if (beginner) {
            dispatch(saveStep2({ skillLevel: 'Beginner' }))
            dispatch(previousPage())
        } else if (intermediate) {
            dispatch(saveStep2({ skillLevel: 'Intermediate' }))
            dispatch(previousPage())
        } else if (advanced) {
            dispatch(saveStep2({ skillLevel: 'Advanced' }))
            dispatch(previousPage())
        } else if (expert) {
            dispatch(saveStep2({ skillLevel: 'Expert' }))
            dispatch(previousPage())
        } else {
            dispatch(previousPage())
            dispatch(saveStep2({ skillLevel: '' }))
        }
    }

    useEffect(() => {
        switch (skillLevel) {
            case 'Beginner':
                handleBeginner()
                break;
            case 'Intermediate':
                handleIntermediate()
                break;
            case 'Advanced':
                handleAdvance()
                break;
            case 'Expert':
                handleExpert()
                break;

            default:
                break;
        }
    }, [skillLevel])

    return (
        <div className="container mx-auto w-10/12">
            <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>Skill Level</h1>
            <p style={{ color: '#6B7280' }}>Please tell us about your skill level in frontend development.</p>

            <form onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 py-4">
                    <div onClick={handleBeginner} className={`flex items-center gap-2 p-2 rounded-lg border-2 ${beginner && 'border-orange-400'} cursor-pointer`}>
                        <div style={{ backgroundColor: '#FC6C4C' }} className=" rounded-full w-10 h-10 grid place-items-center">
                            <Image loading="lazy" src={Icon1} alt="icono 1" />
                        </div>
                        <p className="font-semibold">Beginner</p>
                    </div>

                    <div onClick={handleIntermediate} className={`flex items-center gap-2 p-2 rounded-lg border-2 cursor-pointer ${intermediate && 'border-orange-400'} `}>
                        <div style={{ backgroundColor: '#FC6C4C' }} className="rounded-full w-10 h-10 grid place-items-center">
                            <Image loading="lazy" src={Icon2} alt="icono 2" />
                        </div>
                        <p className="font-semibold">Intermediate</p>
                    </div>

                    <div onClick={handleAdvance} className={`flex items-center gap-2 p-2 rounded-lg border-2 cursor-pointer ${advanced && 'border-orange-400'} `}>
                        <div style={{ backgroundColor: '#FC6C4C' }} className="rounded-full w-10 h-10 grid place-items-center">
                            <Image loading="lazy" src={Icon3} alt="icono 3" />
                        </div>
                        <p className="font-semibold">Advanced</p>
                    </div>

                    <div onClick={handleExpert} className={`flex items-center gap-2 p-2 rounded-lg border-2 cursor-pointer ${expert && 'border-orange-400'} `}>
                        <div style={{ backgroundColor: '#FC6C4C' }} className="rounded-full w-10 h-10 grid place-items-center">
                            <Image loading="lazy" src={Icon4} alt="icono 4" />
                        </div>
                        <p className="font-semibold">Expert</p>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='my-5'>
                        <Divider />
                    </div>

                    {alertMessage && <p style={{ backgroundColor: '#FC6C4C' }} className='text-white rounded-md sm:w-11/12 md:w-6/12 mx-auto text-center m-0'>Select an option.</p>}

                    <div className='grid grid-cols-2 gap-4 pt-5 pb-10 w-full'>
                        <button onClick={onBack} style={{ color: '#FC6C4C', border: '#FC6C4C solid 2px' }} className={`text-white p-2  rounded-md hover:opacity-90 col-start-1 justify-self-start ${page == 1 && 'invisible'}`}  >Go Back</button>
                        <button type='submit' onClick={onSubmit} style={{ background: '#FC6C4C' }} className={`text-white p-2  rounded-md hover:opacity-90 col-start-2 justify-self-end ${page == 4 && 'hidden'}`}  >Next Step</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

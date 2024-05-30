import { useEffect, useState } from "react";
import data from '../dataStore'
import { dataJson } from '../datajson'
import { fetchPhones, startLoading, stopLoading } from "../store/slice";
import './pages.css'
import { useSelector, useDispatch } from "react-redux";

function PhonePage() {
    const [phones, setPhones] = useState([])
    const isLoading = useSelector((state) => state.slice.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        async function getPhones() {
            dispatch(startLoading())
            //imitation delay 500ms. dataJson from datajson.js
            setTimeout(() => {
                const res = JSON.parse(dataJson)
                setPhones(res.phones)
            }, 500)
            dispatch(stopLoading())
        }
        getPhones()
    }, [])
 
    return (
        <div className="wraper">
            <div>{isLoading ? '...load' : ''}</div>
            <h3 className='title'>Phones</h3>
            {phones.map((phone) =>
                <div className="item" key={phone.id}>
                    <div className="imgblock">
                        <div className="img">
                            <img src='data:image/jpeg;base64,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'>
                            </img>
                        </div>
                        <h3 className="imgtitle">{phone.title}</h3>
                    </div>
                    <div>Brand: {phone.brend}</div>
                    <div>Descriptions: {phone.desc}</div>
                </div>
            )
            }
        </div>
    )
}

export default PhonePage;
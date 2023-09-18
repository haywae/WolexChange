import React, { useEffect, useState } from 'react';
import Rates from './Rates';
import Converter from './Converter';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { convtObject, currencies } from './data';
import { flag } from './data';
import { rowsObject } from './data';

export default function ConverterApp() {
    const [currency, setCurrency] = useState(currencies)
    const [rows, setRows] = useState(rowsObject)
    const [convt, setConvt] = useState(convtObject)
    const [location, setLocation] = useState("choose")
    const [locationName, setLocationName] = useState('');
    const [view, setView] = useState("convert");

    function calcConvert(name) {
        const {input, selectInput, selectOutput} = convt.convert[name];
        if (selectInput !== "choose" && input!== "" && selectOutput !== "choose") {
            if (currency[selectInput] !== 0 && currency[selectOutput] !== 0){
                let result = ((currency[selectInput]['bv']) * input) / currency[selectOutput]['sv']
                setConvt(prev=>({...prev, 
                    convert: {...prev.convert, 
                        [name]: {...prev.convert[name], output: result }
                    }
                }))
            }
        } else {
            setConvt(prev=>({...prev, 
                convert: {...prev.convert, 
                    [name]: {...prev.convert[name], output: 0 }
                }
            }))
        }
    }

    function calcFindOut(name) {
        const {input, selectInput, selectOutput} = convt.findOut[name]
        if (selectInput !== "choose" && input !== "" && selectOutput !== "choose") {
            if (currency[selectInput] !== 0 && currency[selectOutput] !== 0){
                let result = ((currency[selectInput]['sv']) * input) / currency[selectOutput]['bv']
                setConvt(prev=>({...prev, 
                findOut: {...prev.findOut, 
                    [name]: {...prev.findOut[name], output: result}
                }
                }))
            } 
        } else{
            setConvt(prev=>({...prev, 
                findOut: {...prev.findOut, 
                  [name]: {...prev.findOut[name], output: 0}
                }
            }))
        }
    }

    useEffect(()=>{
        function updateCurrencies() {
            Object.keys(rows).map(e => {
                if (rows[e].selected !== 'choose'){
                    setCurrency(prev => {
                        return{
                            ...prev,
                            [rows[e].selected]: {...prev[rows[e].selected],
                                bv: rows[e].bv, sv: rows[e].sv
                            }
                        }
                    }
                )} if (locationName) {
                    setCurrency(prev => ({
                        ...prev,
                        [locationName]: {...prev[locationName],
                            bv: 1, sv: 1
                        }
                    }))
                }
                return null;
            })
        }
        updateCurrencies()
    }, [rows, locationName])


    return (
        <div className='cards'>
            <Rates 
                currency={currency} setCurrency={setCurrency} flag={flag} rows={rows} setRows={setRows} 
                convt={convt} setConvt={setConvt} location={location} setLocation={setLocation} 
                locationName={locationName} setLocationName={setLocationName} calcConvert={calcConvert}
                calcFindOut={calcFindOut} 
            />
            <Converter 
                currency={currency} setCurrency={setCurrency} flag={flag} rows={rows} setRows={setRows} 
                convt={convt} setConvt={setConvt}  calcConvert={calcConvert}
                calcFindOut={calcFindOut} view={view} setView={setView} 
            />
        </div>
    )
}




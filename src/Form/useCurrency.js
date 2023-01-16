//import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrency = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getCurrency = async () => {
            /*AXIOS
            try {
                const response = await axios.get('https://api.exchangerate.host/latest');
                
                setRatesData({
                    state: "success",
                    rates: response.data.rates,
                    date: response.data.date,
            });
            } catch
            {
                setRatesData({
                    state: "error",
                }); 
            }
        };*/
        //FETCH
            try {
                const response = await fetch('https://api.exchangerate.host/latest');
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const {rates, date} = await response.json();
                setRatesData({
                    state: "success",
                    rates,
                    date,
                });
            }
            catch (error) {
                setRatesData({
                    state: "error"
                });
            }
        };
        setTimeout(getCurrency, 3000);
    }, []);
    return ratesData;
};

export default useCurrency;

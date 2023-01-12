import axios from "axios";
import { useState, useEffect } from "react";

export const useRequest = () => {

const [ importedCurrency, setImportedCurrency] = useState ({
  date: "",
  rates: {},
  state: "loading"
});


  setTimeout(() =>{
axios.get("https://api.exchangerate.host/convert?from=USD&to=EUR")
.then(response => console.log(response.data))
;  
}, 2000)  

};
   
export default useRequest;



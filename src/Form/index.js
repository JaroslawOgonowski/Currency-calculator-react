import { useState } from "react";
import { FormFieldset, FormLegend, FormLabel, FormInput, FormSecect, FormButton } from "./styled";
import { currency } from "../Arrays/currency";

const Form = () => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    };
    const [startSum, setStartSum] = useState("");
    const [yourCurrency, setYourCurrency] = useState("PLN");
    const [exchangedCurrency, setExchangedCurrency] = useState("EUR");
    const [result, setResult] = useState("");
    const calculateResult = () => {
        if (yourCurrency === exchangedCurrency) { setResult(startSum + " " + exchangedCurrency) }
        else {
            const rateYourCurrency = currency.find(({ short }) => short === yourCurrency).rate;
            const rateExchangedCurrency = currency.find(({ short }) => short === exchangedCurrency).rate;
            const count = ((+startSum * rateYourCurrency) / rateExchangedCurrency)
            setResult(`${count.toFixed(2)} ${exchangedCurrency}`)
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
        <FormFieldset>
                <FormLegend>Twoje środki:</FormLegend>
                <label>
                    <FormLabel>Kwota:</FormLabel>
                    <FormInput
                        required type="number"
                        min="0.01"
                        step="0.01"
                        placeholder="np.: 100.99"
                        value={startSum}
                        onChange={({ target }) => setStartSum(target.value)}
                    />
                </label>
                <p>
                    <label>
                        <FormLabel>W jakiej walucie:</FormLabel>
                        <FormSecect
                            value={yourCurrency}
                            onChange={({ target }) => setYourCurrency(target.value)}
                        >
                            {currency.map(yourCurrency => (
                                <option
                                    key={yourCurrency.short}
                                    value={yourCurrency.short}
                                >
                                    {yourCurrency.name}
                                </option>))}
                        </FormSecect>
                    </label>
                </p>
                <p>
                    <label>
                        <FormLabel>Wybierz walutę którą chcesz otrzymać:</FormLabel>
                        <FormSecect
                            value={exchangedCurrency}
                            onChange={({ target }) => setExchangedCurrency(target.value)}
                        >
                            {currency.map(({ short, name }) => (
                                <option
                                    key={short}
                                    value={short}
                                >
                                    {name}
                                </option>
                            ))}
                        </FormSecect>
                    </label>
                </p>
            </FormFieldset>
            <FormFieldset>
                <FormLegend>Środki po wymianie:</FormLegend>
                <p>
                    <label >
                        <FormLabel>Otrzymana kwota:</FormLabel></label>
                    <FormInput
                        readOnly
                        name="receivedAmount"
                        placeholder="wprowadź dane"
                        disabled
                        value={result}
                    />
                </p>
                <p>
                    <FormButton
                        onClick={calculateResult}
                    >
                        Oblicz
                    </FormButton>
                </p>
            </FormFieldset>
        </form>
    )
};
export default Form;
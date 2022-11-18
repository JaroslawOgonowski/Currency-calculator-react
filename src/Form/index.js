import { useState } from "react";
import "./style.css"
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
            const count = ((startSum * rateYourCurrency) / rateExchangedCurrency)
            setResult(count.toFixed(2) + " " + exchangedCurrency)
        }
    };
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Twoje środki:</legend>
                <label><span className="form__labelText" >Kwota:</span>
                    <input
                        className="form__field"
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
                        <span className="form__labelText">W jakiej walucie:</span>
                        <select
                            className="form__select"
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
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę którą chcesz otrzymać:</span>
                        <select
                            className="form__select"
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
                        </select>
                    </label>
                </p>
            </fieldset>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Środki po wymianie:</legend>
                <p>
                    <label >
                        <span className="form__labelText">Otrzymana kwota:</span></label>
                    <input
                        className="form__field--readonly"
                        readonly
                        name="receivedAmount"
                        placeholder="wprowadź dane"
                        disabled
                        value={result}
                    />
                </p>
                <p>
                    <button
                        className="form__button"
                        onClick={calculateResult}
                    >
                        Oblicz
                    </button>
                </p>
            </fieldset>
        </form>
    )
};
export default Form;
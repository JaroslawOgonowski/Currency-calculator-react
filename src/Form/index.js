import { useState } from "react";
import { Fieldset, Legend, Label, Input, FormSecect, Button } from "./styled";
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
            <Fieldset>
                <Legend>Twoje środki:</Legend>
                <label>
                    <Label>Kwota:</Label>
                    <Input
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
                        <Label>W jakiej walucie:</Label>
                        <Input
                            as="select"
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
                        </Input>
                    </label>
                </p>
                <p>
                    <label>
                        <Label>Wybierz walutę którą chcesz otrzymać:</Label>
                        <Input
                            as="select"
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
                        </Input>
                    </label>
                </p>
            </Fieldset>
            <Fieldset>
                <Legend>Środki po wymianie:</Legend>
                <p>
                    <label >
                        <Label>Otrzymana kwota:</Label></label>
                    <Input
                        readOnly
                        name="receivedAmount"
                        placeholder="wprowadź dane"
                        disabled
                        value={result}
                    />
                </p>
                <p>
                    <Button
                        onClick={calculateResult}
                    >
                        Oblicz
                    </Button>
                </p>
            </Fieldset>
        </form>
    )
};
export default Form;
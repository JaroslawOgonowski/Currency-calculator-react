import { Fieldset, Legend, Label, Input, Button } from "./styled";
import useCurrency from "./useCurrency";
import { useState } from "react";

const Form = () => {
    const [startSum, setStartSum] = useState("");
    const [yourCurrency, setYourCurrency] = useState("PLN");
    const [exchangedCurrency, setExchangedCurrency] = useState("EUR");
    const [result, setResult] = useState("");
    const ratesData = useCurrency();
    const { date, state, rates } = ratesData

    const onFormSubmit = (event) => {
        event.preventDefault();
    };
    const calculateResult = () => {
        const rateYourCurrency = rates[yourCurrency];
        const rateExchangedCurrency = rates[exchangedCurrency];
        const count = ((startSum * rateYourCurrency) / rateExchangedCurrency)
        if (yourCurrency !== "" && startSum !== "" && exchangedCurrency !== "") {
            setResult(`${count.toFixed(2)} ${exchangedCurrency}`)
        };
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
                            name="yourCurrent"
                            value={yourCurrency}
                            onChange={({ target }) => setYourCurrency(target.value)}
                        >
                            {!!ratesData.rates && Object.keys(ratesData.rates).map((yourCurrency) => (
                                <option
                                    key={yourCurrency}
                                    value={yourCurrency}
                                >
                                    {yourCurrency}
                                </option>
                            ))};
                        </Input>
                    </label>
                </p>
                <p>
                    <label>
                        <Label>Wybierz walutę którą chcesz otrzymać:</Label>
                        <Input
                            as="select"
                            name="exchangedCurrent"
                            value={exchangedCurrency}
                            onChange={({ target }) => setExchangedCurrency(target.value)}
                        >
                            {!!ratesData.rates && Object.keys(ratesData.rates).map(((exchangedCurrency) => (
                                <option
                                    key={exchangedCurrency}
                                    value={exchangedCurrency}
                                >
                                    {exchangedCurrency}
                                </option>
                            )))}
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
    );
};
export default Form;
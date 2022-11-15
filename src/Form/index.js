import "./style.css"

const Form = () => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    };
    return(
<form className="form" onSubmit={onFormSubmit}>
    <fieldset className="form__fieldset"><legend className="form__legend">Twoje środki:</legend>
        <label className="form__label"><span className="form__labelText" >Kwota:</span>
            <input
                className="form__field"
                required type="number"
                min="0.01"
                step="0.01"
                placeholder="np.: 100.99"
                name="startSum"
            />
        </label>
        <p><label className="form__label"><span className="form__labelText">W jakiej walucie:</span><select
            className="form__select" name="yourCurrency">
            <option selected value="PLN">PLN: Polska</option>
            <option value="EUR">EUR: Unia Europejska</option>
            <option value="USD">USD: USA</option>
            <option value="GBP">GBP: Wielka Brytania</option>
            <option value="BTC">Bitcoin</option>
        </select> </label></p>
        <p><label className="form__label"><span className="form__labelText">Wybierz walutę którą chcesz
            otrzymać:</span><select className="form__select" name="exchangedCurrency">
                <option value="PLN">PLN: Polska</option>
                <option selected value="EUR">EUR: Unia Europejska</option>
                <option value="USD">USD: USA</option>
                <option value="GBP">GBP: Wielka Brytania</option>
                <option value="BTC">Bitcoin</option>
            </select></label></p>
    </fieldset>
    <fieldset className="form__fieldset">
        <legend className="form__legend">Środki po wymianie:</legend>
        <p><label className="form__label"><span className="form__labelText">Otrzymana kwota:</span></label>
            <input
                className="form__field--readonly"
                readonly
                name="receivedAmount"
                placeholder="wprowadź dane"
                disabled
            />
        </p>
        <p><button className="form__button">Oblicz</button></p>
    </fieldset></form>
)};
    export default Form;
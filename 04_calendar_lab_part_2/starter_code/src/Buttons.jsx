export default function Buttons({ handleButtonClick }) {
  return (
    <div className="centerRadio">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="Holiday"
          value="Yellow"
          onClick={() => handleButtonClick("Yellow")}
        />
        <label class="form-check-label" htmlFor="Yellow">
          Holiday
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="Work"
          value="Blue"
          onClick={() => handleButtonClick("Blue")}
        />
        <label class="form-check-label" htmlFor="Blue">
          Work
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="Errands"
          value="Green"
          onClick={() => handleButtonClick("Green")}
        />
        <label class="form-check-label" htmlFor="Green">
          Errands
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="Sick"
          value="Red"
          onClick={() => handleButtonClick("Red")}
        />
        <label class="form-check-label" htmlFor="Red">
          Sick
        </label>
      </div>
    </div>
  );
}

import DatePicker from "react-datepicker"; // Importe o DatePicker aqui
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent({ dataSelecionada, onChange }) {
  return (
    <DatePicker
      selected={dataSelecionada}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      showYearDropdown={true}
      yearDropdownItemNumber={80}
      scrollableYearDropdown={true}
      showMonthDropdown={true}
      scrollableMonthYearDropdown={true}
    />
  );
}

export default DatePickerComponent;
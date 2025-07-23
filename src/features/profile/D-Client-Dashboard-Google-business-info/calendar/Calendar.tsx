import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
	DatePicker,
	DatePickerSlots,
	DatePickerSlotProps,
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import calendarIconSrc from "@/features/profile/SupportCreateTicket/assets/calendar.svg";
import { useState } from "react";

const CustomCalendarIcon: React.FC = (props) => (
	<img
		{...props}
		src={calendarIconSrc}
		alt="calendar"
		style={{ width: 20, height: 20 }}
	/>
);

const datePickerSlots: Partial<DatePickerSlots> = {
	openPickerIcon: CustomCalendarIcon,
};

const datePickerSlotProps: Partial<DatePickerSlotProps<true>> = {
	textField: {
		size: "small",
		variant: "outlined",
		sx: {
			width: 130,
			"& .MuiPickersInputBase-root": { height: 44, padding: 0 },
			".MuiPickersSectionList-root span": { font: "400 18px Open Sans" },
			".MuiButtonBase-root": { margin: 0, padding: 0 },
			"& .MuiPickersOutlinedInput-notchedOutline": {
				border: "none !important",
			},
			"@media (max-width: 500px )": {
				".MuiPickersSectionList-root span": { font: "400 16px Open Sans" },
			},
		},
	},
};

export default function Calendar() {
	const [dueDate, setDueDate] = useState<Date | null>(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePicker
				value={dueDate}
				onChange={setDueDate}
				slots={datePickerSlots}
				slotProps={datePickerSlotProps}
			/>
		</LocalizationProvider>
	);
}

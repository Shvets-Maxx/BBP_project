import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

import style from "../Time/Time.module.sass";

export default function TimePickerViews({ disabled }: { disabled: boolean }) {
	const [date, setDate] = useState<Dayjs | null>(dayjs());
	const [time, setTime] = useState<Dayjs | null>(dayjs());

	return (
		<div className={style.time}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={["TimePicker", "TimePicker", "DatePicker"]}>
					<div
						className={style["time__picker-block"]}
						style={{ background: disabled ? "none" : "#EBEBED" }}
					>
						<DemoItem>
							<DatePicker
								onChange={(value, _context) => {
									setDate(value as Dayjs | null);
								}} // onChange={(newValue) => setDate(newValue as unknown as Dayjs)}
								disabled={disabled}
								value={date}
								// defaultValue={dayjs("2022-04-17")}
							/>
						</DemoItem>{" "}
					</div>
					<div className={style.time__text}>
						<p>at</p>
					</div>
					<div
						className={style["time__picker-block"]}
						style={{ background: disabled ? "none" : "#EBEBED" }}
					>
						<DemoItem>
							<TimePicker
								value={time}
								onChange={(value, _context) => {
									setTime(value as Dayjs | null);
								}} // onChange={(newValue) => setTime(newValue as unknown as Dayjs)}
								disabled={disabled}
								views={["hours", "minutes"]}
							/>
						</DemoItem>
					</div>
				</DemoContainer>
			</LocalizationProvider>
		</div>
	);
}

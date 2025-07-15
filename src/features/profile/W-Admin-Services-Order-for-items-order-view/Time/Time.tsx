import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import style from "../Time/Time.module.sass";

export default function TimePickerViews({ disabled }: { disabled: boolean }) {
	return (
		<div className={style.time}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={["TimePicker", "TimePicker", "DatePicker"]}>
					<div
						className={style["time__picker-block"]}
						style={{ background: disabled ? "none" : "#EBEBED" }}
					>
						<DemoItem>
							<DatePicker disabled={disabled} defaultValue={dayjs("2022-04-17")} />
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
							<TimePicker disabled={disabled} views={["hours", "minutes"]} />
						</DemoItem>
					</div>
				</DemoContainer>
			</LocalizationProvider>
		</div>
	);
}

// Range.tsx
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

type Props = {
	value: number[];
	onChange: (value: number[]) => void;
};

export default function RangeSlider({ value, onChange }: Props) {
	const handleChange = (_event: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) {
			onChange(newValue);
		}
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Slider
				getAriaLabel={() => "Price range"}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				min={0}
				max={1000}
				size={"medium"}
				sx={{
					color: "#ED805B",
				}}
			/>
		</Box>
	);
}

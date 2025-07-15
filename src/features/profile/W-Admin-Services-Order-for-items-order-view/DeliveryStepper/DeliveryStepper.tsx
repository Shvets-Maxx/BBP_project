import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Time from "../Time/Time.tsx";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import style from "../DeliveryStepper/DeliveryStepper.module.sass";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Stepper, Step, StepLabel, IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useState } from "react";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 18,
		left: "calc(-50% + 16px)",
		right: "calc(50% + 16px)",
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
				"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
				"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor: "#eaeaf0",
		borderRadius: 1,
		...theme.applyStyles("dark", {
			backgroundColor: theme.palette.grey[800],
		}),
	},
}));

const ColorlibStepIconRoot = styled("div")<{
	ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
	backgroundColor: "#ccc",
	zIndex: 1,
	color: "#fff",
	width: 38,
	height: 38,
	display: "flex",
	borderRadius: "50%",
	// justifyContent: "center",
	alignItems: "center",
	...theme.applyStyles("dark", {
		backgroundColor: theme.palette.grey[700],
	}),
	variants: [
		{
			props: ({ ownerState }) => ownerState.active,
			style: {
				backgroundImage:
					"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
				boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
			},
		},
		{
			props: ({ ownerState }) => ownerState.completed,
			style: {
				backgroundImage:
					"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
			},
		},
	],
}));

function ColorlibStepIcon(props: StepIconProps) {
	const { active, completed, className } = props;

	return (
		<ColorlibStepIconRoot
			ownerState={{ completed, active }}
			className={className}
		></ColorlibStepIconRoot>
	);
}

const steps = ["Order send", "On delivery", "Order delivered"];

export default function CustomizedSteppers() {
	const [changeOpen, setShangeOpen] = useState(false);

	return (
		<div className={style.stepper}>
			<div className={style.stepper__container}>
				<div className={style.stepper__header}>
					<div className={style.stepper__title}>
						<h1>Delivery</h1>
					</div>
					<div className={style.stepper__change}>
						{changeOpen && (
							<div className={style["stepper__change-active"]}>
								<IconButton
									onClick={(_e) => setShangeOpen(false)}
									sx={{ display: changeOpen ? "block" : "none" }}
									size="small"
								>
									<div className={style.stepper__button}>
										<p>Cancel</p>
										<CloseOutlinedIcon />
									</div>
								</IconButton>
								<IconButton
									onClick={(_e) => setShangeOpen(false)}
									sx={{ display: changeOpen ? "block" : "none" }}
									size="small"
								>
									<div className={style.stepper__button}>
										<p>Complete</p>
										<CheckOutlinedIcon />
									</div>
								</IconButton>
							</div>
						)}

						<IconButton
							sx={{ display: changeOpen ? "none" : "block" }}
							onClick={(_e) => setShangeOpen(true)}
							size="small"
						>
							<ModeEditOutlineOutlinedIcon />
						</IconButton>
					</div>
				</div>
				<div className={style.stepper__step}>
					<Stack sx={{ width: "95%" }} spacing={4}>
						<Stepper
							alternativeLabel
							activeStep={1}
							connector={<ColorlibConnector />}
						>
							{steps.map((label, index) => (
								<Step key={label}>
									<StepLabel StepIconComponent={ColorlibStepIcon}>{}</StepLabel>
									<div
										className={`${style.stepper__time} ${
											style[`stepper__time--${index}`]
										}`}
									>
										<p className={style[`align_${index}`]}>{label}</p>
										<Time disabled={!changeOpen} />
									</div>
								</Step>
							))}
						</Stepper>
					</Stack>
				</div>
			</div>
		</div>
	);
}

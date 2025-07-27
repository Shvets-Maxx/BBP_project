// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import style from "./Adress.module.sass";
// import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";
// import logo from "./assets/logo.svg";

// export default function TimeZoneSelect() {
// 	const [openSections, setOpenSections] = useState<Record<string, boolean>>({
// 		addresses: true,
// 		subscriptions: false,
// 		buyMore: false,
// 		support: false,
// 	});

// 	const toggleSection = (key: string) => {
// 		setOpenSections((prev) => ({
// 			...prev,
// 			[key]: !prev[key],
// 		}));
// 	};

// 	const sections = [
// 		{
// 			key: "addresses",
// 			title: "Addresses",
// 			progress: "0 of 4 complete",
// 			items: [
// 				"Add your <span>name</span>: Profile settings > Personal info > Name",
// 				"Add <span>phone number</span>: Profile settings > Personal info > Phone number",
// 				"Add <span>address</span>: Profile settings > Addresses > Add",
// 				"Add <span>payment method</span>: Profile settings > Payment > Add",
// 			],
// 		},
// 		{
// 			key: "subscriptions",
// 			title: "Subscriptions",
// 			progress: "0 of 3 complete",
// 			items: [
// 				"You can change your plan by selecting the plan you want <span>(Subscriptions)</span> and clicking “Change plan”.",
// 				"Pay for the next month by clicking <span>“Top up plan”</span> above the cards (or below in the transaction history section).",
// 				"Add additional items by clicking “Add more items” <span>(Additional items section)</span> or through <span>Catalog</span>",
// 			],
// 		},
// 		{
// 			key: "buyMore",
// 			title: "Buy more items",
// 			progress: "0 of 3 complete",
// 			items: [
// 				"<span>Order</span> more items: Buy more items > Catalog > Add > Catalog > Complete the order",
// 				"Track your order: Buy more items > Order status & history > (Your order number) View",
// 			],
// 		},
// 		{
// 			key: "support",
// 			title: "Support",
// 			progress: "0 of 2 complete",
// 			items: [
// 				"Answers to popular questions: Support > FAQ",
// 				"If you have other questions - write to us: Support > Ticket > Create new",
// 			],
// 		},
// 	];

// 	return (
// 		<div className={style["onboarding-container"]}>
// 			{sections.map(({ key, title, progress, items }) => (
// 				<div key={key} className={style["onboarding-container__block"]}>
// 					<motion.div
// 						onClick={() => toggleSection(key)}
// 						className={style["onboarding-container__title"]}
// 						animate={{ marginBottom: openSections[key] ? 16 : 0 }}
// 						transition={{ duration: 0.3, ease: "easeInOut" }}
// 					>
// 						<p>{title}</p>
// 						<div className={style["onboarding-container__wrraper"]}>
// 							<p>{progress}</p>
// 							<img
// 								src={ArrowIconSrc}
// 								alt="Toggle"
// 								className={`${style["onboarding-container__arrow"]} ${
// 									openSections[key] ? style["onboarding-container__arrow--open"] : ""
// 								}`}
// 							/>
// 						</div>
// 					</motion.div>

// 					<div className={style.onboarding}>
// 						<AnimatePresence initial={false}>
// 							{openSections[key] && (
// 								<motion.div
// 									initial={{ maxHeight: 0, opacity: 0 }}
// 									animate={{ maxHeight: 1000, opacity: 1 }}
// 									exit={{ maxHeight: 0, opacity: 0 }}
// 									transition={{ duration: 0.4, ease: "easeInOut" }}
// 									style={{ overflow: "hidden" }}
// 								>
// 									<div className={style.onboarding__dropdown}>
// 										{items.map((text, i) => (
// 											<div key={i} className={style.onboarding__wrraper}>
// 												<input type="checkbox" />
// 												<p dangerouslySetInnerHTML={{ __html: text }} />
// 												<img src={logo} alt="" />
// 											</div>
// 										))}
// 									</div>
// 								</motion.div>
// 							)}
// 						</AnimatePresence>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./Adress.module.sass";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";
import logo from "./assets/logo.svg";
import { useMediaQuery } from "@mui/material";

export default function TimeZoneSelect() {
	const isSmallScreen = useMediaQuery("(max-width:600px)");

	const [openSections, setOpenSections] = useState<Record<string, boolean>>({
		addresses: true,
		subscriptions: false,
		buyMore: false,
		support: false,
	});

	const [checkedItems, setCheckedItems] = useState<Record<string, Set<number>>>({
		addresses: new Set(),
		subscriptions: new Set(),
		buyMore: new Set(),
		support: new Set(),
	});

	const toggleSection = (key: string) => {
		setOpenSections((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const handleCheckboxChange = (sectionKey: string, index: number) => {
		setCheckedItems((prev) => {
			const newSet = new Set(prev[sectionKey]);
			if (newSet.has(index)) {
				newSet.delete(index);
			} else {
				newSet.add(index);
			}
			return {
				...prev,
				[sectionKey]: newSet,
			};
		});
	};

	const sections = [
		{
			key: "addresses",
			title: "Addresses",
			items: [
				"Add your <span>name</span>: Profile settings > Personal info > Name",
				"Add <span>phone number</span>: Profile settings > Personal info > Phone number",
				"Add <span>address</span>: Profile settings > Addresses > Add",
				"Add <span>payment method</span>: Profile settings > Payment > Add",
			],
		},
		{
			key: "subscriptions",
			title: "Subscriptions",
			items: [
				"You can change your plan by selecting the plan you want <span>(Subscriptions)</span> and clicking “Change plan”.",
				"Pay for the next month by clicking <span>“Top up plan”</span> above the cards (or below in the transaction history section).",
				"Add additional items by clicking “Add more items” <span>(Additional items section)</span> or through <span>Catalog</span>",
			],
		},
		{
			key: "buyMore",
			title: "Buy more items",
			items: [
				"<span>Order</span> more items: Buy more items > Catalog > Add > Catalog > Complete the order",
				"Track your order: Buy more items > Order status & history > (Your order number) View",
			],
		},
		{
			key: "support",
			title: "Support",
			items: [
				"Answers to popular questions: Support > FAQ",
				"If you have other questions - write to us: Support > Ticket > Create new",
			],
		},
	];

	return (
		<div className={style["onboarding-container"]}>
			{sections.map(({ key, title, items }) => {
				const total = items.length;
				const completed = checkedItems[key]?.size || 0;

				return (
					<div key={key} className={style["onboarding-container__block"]}>
						<motion.div
							onClick={() => toggleSection(key)}
							className={style["onboarding-container__title"]}
							animate={{ marginBottom: openSections[key] ? 16 : 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<p>{title}</p>
							<div className={style["onboarding-container__wrraper"]}>
								<p>
									{isSmallScreen
										? `${completed} / ${total}`
										: `${completed} of ${total} complete`}
								</p>
								<img
									src={ArrowIconSrc}
									alt="Toggle"
									className={`${style["onboarding-container__arrow"]} ${
										openSections[key] ? style["onboarding-container__arrow--open"] : ""
									}`}
								/>
							</div>
						</motion.div>

						<div className={style.onboarding}>
							<AnimatePresence initial={false}>
								{openSections[key] && (
									<motion.div
										initial={{ maxHeight: 0, opacity: 0 }}
										animate={{ maxHeight: 1000, opacity: 1 }}
										exit={{ maxHeight: 0, opacity: 0 }}
										transition={{ duration: 0.4, ease: "easeInOut" }}
										style={{ overflow: "hidden" }}
									>
										<div className={style.onboarding__dropdown}>
											{items.map((text, i) => (
												<div key={i} className={style.onboarding__wrraper}>
													<input
														type="checkbox"
														checked={checkedItems[key]?.has(i)}
														onChange={() => handleCheckboxChange(key, i)}
													/>
													<p dangerouslySetInnerHTML={{ __html: text }} />
													<img src={logo} alt="" />
												</div>
											))}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				);
			})}
		</div>
	);
}

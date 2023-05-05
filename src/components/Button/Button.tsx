import styles from "./Button.module.css";

interface ButtonProps {
	children: React.ReactNode;
	color?: "primary" | "secondary";
	onClick(): void;
}

const Button = ({children, color, onClick}: ButtonProps) => {
	return (
		<button
			className={[styles.btn, styles["btn-" + color]].join(" ")}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;

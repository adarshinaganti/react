import {useState} from "react";
import Like from "./components/Like/Like";

function App() {
	const [buttonState, setButtonState] = useState<"liked" | "disliked">(
		"disliked" // initial state is "disliked"
	);
	const onButtonClick = () => {
		// set the state of the button to "liked" or "disliked" depending on the previous state
		setButtonState((prevState) => {
			if (prevState === "liked") {
				return "disliked";
			} else return "liked";
		});

		// log the state of the button
		if (buttonState === "liked") {
			console.log("liked");
		} else {
			console.log("disliked");
		}
	};
	return (
		<div>
			<Like onClick={onButtonClick} states={buttonState} />
		</div>
	);
}

export default App;

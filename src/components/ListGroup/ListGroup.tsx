import {useState} from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
	list-style: none;
	padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
	padding: 5px 0;
	background: ${(props) => (props.active ? "lightblue" : "none")};
`;

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

interface ListItemProps {
	active: boolean;
}

function ListGroup({items, heading, onSelectItem}: Props) {
	const [selected, setSelected] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>no items</p>}
			<List>
				{items.map((item, index) => (
					<ListItem
						active={index === selected}
						key={item}
						onClick={() => {
							setSelected(index);
							onSelectItem(item);
						}}
					>
						{item}
					</ListItem>
				))}
			</List>
		</>
	);
}

export default ListGroup;

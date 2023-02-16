import { NasaApiData } from "../../types";

export default function ImageCard(props: NasaApiData) {
	return (
		<div className="image-card mt-8 mb-8 flex flex-col items-center justify-center gap-4 p-8 rounded-2xl">
			<div className="image-container rounded-xl overflow-hidden">
				<img src={props.url} alt={props.title} />
			</div>
			{props.copyright && <h5>Image by {props.copyright}</h5>}
			<h3>{props.title}</h3>
			<h5>{props.explanation}</h5>
		</div>
	);
}

import "./Trending.css";

export interface ITrending {
	exampleProp: string;
}

const Trending = ({ exampleProp }: ITrending) => {
	return <div className="Trending-container">{exampleProp}</div>;
};

export default Trending;

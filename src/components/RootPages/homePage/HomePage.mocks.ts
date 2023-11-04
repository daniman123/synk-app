import { IHomePage } from "./types";
import data from "../../../../lib/mediaPreviews/MEDIA_PREVIEWS_MOCK_DATA.json";


const base: IHomePage = {
	dataArray: data,
};

export const mockHomePageProps = {
	base,
};

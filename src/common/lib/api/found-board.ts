import axios from "../axios";
import endpoints from "../../endpoints";
import { FoundPostListModel } from "../../model/found-post-list";

const foundBoardAPI = {
  getPostList: async (page: number): Promise<FoundPostListModel> => {
    const { data: postList } = await axios.get<FoundPostListModel>(
      `${endpoints.FOUND_BOARD_API}/list?page_num=${page}`
    );
    return postList;
  },
};

export default foundBoardAPI;

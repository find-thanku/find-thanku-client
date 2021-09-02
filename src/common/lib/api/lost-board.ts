import axios from "../axios";
import endpoints from "../../endpoints";
import { LostPostListModel } from "../../model/lost-post-list";

const lostBoardAPI = {
  getPostList: async (page: number): Promise<LostPostListModel> => {
    const { data: postList } = await axios.get<LostPostListModel>(
      `${endpoints.LOST_BOARD_API}/list?page_num=${page}`
    );
    return postList;
  },
};

export default lostBoardAPI;

import axios from "../axios";
import endpoints from "../../endpoints";
import { NoticePostListModel } from "../../model/notice-post-list";

const noticeBoardAPI = {
  getPostList: async (page: number): Promise<NoticePostListModel> => {
    const { data: postList } = await axios.get<NoticePostListModel>(
      `${endpoints.NOTICE_BOARD_API}/list?page_num=${page}`
    );
    return postList;
  },
};

export default noticeBoardAPI;

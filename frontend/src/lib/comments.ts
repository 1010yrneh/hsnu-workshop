import axios from "axios";

export interface CommentRecord {
  article_name: string;
  user_name: string;
  comment: string;
  time: string;
}

export type CommentInput = CommentRecord;

export async function getComments(backendServer: string, articleName: string) {
  // TODO: 使用 axios.get<CommentRecord[]> 向後端取得留言。
  //
  // 後端 API:
  //   GET /
  //
  // Query string:
  //   article_name: 留言文章名稱
  //
  // 提示:
  //   1. 網址是 `${backendServer}/`
  //   2. axios 的第二個參數可以放 `{ params: { ... } }`
  //   3. 後端參數名稱是 article_name，不是 articleName
  //
  // 寫完後，把下面的 fallback 換成後端回傳的資料。

  return [];
}

export async function createComment(
  backendServer: string,
  comment: CommentInput,
) {
  // TODO: 使用 axios.post<CommentRecord> 向後端送出留言。
  //
  // 後端 API:
  //   POST /
  //
  // Request body:
  //   {
  //     article_name: string,
  //     user_name: string,
  //     comment: string,
  //     time: datetime string,
  //   }
  //
  // 提示:
  //   1. 網址是 `${backendServer}/`
  //   2. 第二個參數直接放這個函式收到的 comment
  //
  // 寫完後，把下面的 fallback 換成後端回傳的資料。

  return comment;
}

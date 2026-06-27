export interface CommentRecord {
  article_name: string;
  user_name: string;
  comment: string;
  time: string;
}

export type CommentInput = CommentRecord;

export async function getComments(backendServer: string, articleName: string) {
  // TODO: 使用 fetch 向後端取得留言。
  //
  // 後端 API:
  //   GET /{article_name}/comment
  //
  // Path parameter:
  //   article_name: 留言文章名稱
  // 提示:
  //   1. 使用 fetch() 送出 GET 請求
  //
  // 如果後端尚未啟動，fallback 會回傳空陣列。
  try {
    const articlePath = encodeURIComponent(articleName);
    const url = new URL(`${articlePath}/comment`, `${backendServer}/`);

    const response = ;

    if (!response.ok) throw new Error("Failed to load comments");

    return (await response.json()) as CommentRecord[];
  } catch {
    return [];
  }
}

export async function createComment(
  backendServer: string,
  comment: CommentInput,
) {
  // TODO: 使用 fetch 向後端送出留言。
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
  //   2. Content-Type 用來指定 request body 的格式，傳送的是 JSON
  //
  // 如果後端尚未啟動，fallback 會回傳這次送出的留言。
  try {
    const response = await fetch(, {
      method: "",
      headers: {
        "Content-Type": "application/",
      },
      body: JSON.stringify(comment),
    });
    if (!response.ok) throw new Error("Failed to create comment");

    return (await response.json()) as CommentRecord;
  } catch {
    return comment;
  }
}

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
    const url = new URL(`${articlePath}/comment`, `${backendServer}`);

    const response = await fetch(url);
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

  try {
    const response = await fetch(`${backendServer}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    if (!response.ok) throw new Error("Failed to create comment");
    return (await response.json()) as CommentRecord;
  } catch {
    return comment;
  }
}

import axios from 'axios';

export interface CommentRecord {
  article_name: string;
  user_name: string;
  comment: string;
  time: string;
}

export type CommentInput = CommentRecord;

function createCommentClient(backendServer: string) {
  return axios.create({
    baseURL: backendServer,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function getComments(backendServer: string, articleName: string) {
  const client = createCommentClient(backendServer);
  const response = await client.get<CommentRecord[]>('/', {
    params: { article_name: articleName },
  });

  return response.data;
}

export async function createComment(backendServer: string, comment: CommentInput) {
  const client = createCommentClient(backendServer);
  const response = await client.post<CommentRecord>('/', comment);

  return response.data;
}

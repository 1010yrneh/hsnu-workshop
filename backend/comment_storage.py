import os
from urllib.parse import quote

import requests
from fastapi import HTTPException

comments_by_article: dict[str, list[dict[str, str]]] = {}
comment_worker_url = "https://hsnu-workshop-worker.ycfc0515.workers.dev"


# TODO: 填入你的留言資料庫名稱，這會成為資料庫 URL 裡的 username。
comment_worker_username = "1010yrenh"
comment_worker_timeout = float(os.getenv("COMMENT_WORKER_TIMEOUT", "5"))


def save_comment(comment: dict[str, str]):
    if comment_worker_username:
        request_worker("POST", comment_worker_username, body=comment)
        return

    comments_by_article.setdefault(comment["article_name"], []).append(comment)


def list_comments(article_name: str):
    if comment_worker_username:
        return request_worker(
            "GET",
            comment_worker_username,
            article_name,
            "comment",
        )

    return comments_by_article.get(article_name, [])


def request_worker(
    method: str,
    *path_parts: str,
    body: dict[str, str] | None = None,
):
    try:
        url = build_worker_url(path_parts)

        # TODO:
        # 使用 requests.request 向資料庫送出 request。
        #
        # 準備好的變數:
        #   method: HTTP method，例如 "GET" 或 "POST"
        #   url: 資料庫 API 網址
        #   body: POST 時要送出的 JSON body
        #   comment_worker_timeout: request timeout 秒數

        response = None

        response = requests.request(
            method,
            url,
            json=body,
            timeout=comment_worker_timeout,
        )

        if response is None:
            raise HTTPException(
                status_code=501,
                detail="TODO: implement requests.request(...)",
            )

        response.raise_for_status()

        return response.json()
    except requests.HTTPError as error:
        raise HTTPException(
            status_code=502,
            detail=read_worker_error(error.response)
            if error.response is not None
            else "Comment worker request failed",
        ) from error
    except (requests.RequestException, ValueError) as error:
        raise HTTPException(
            status_code=502,
            detail=f"Comment worker request failed: {error}",
        ) from error


def build_worker_url(path_parts: tuple[str, ...]):
    path = "/".join(quote(part, safe="") for part in path_parts if part)
    return f"{comment_worker_url}/{path}"


def read_worker_error(response: requests.Response):
    try:
        payload = response.json()
        if isinstance(payload, dict) and "error" in payload:
            return f"Comment worker returned {response.status_code}: {payload['error']}"
    except requests.JSONDecodeError:
        pass

    return f"Comment worker returned {response.status_code}"

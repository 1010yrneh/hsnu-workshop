from datetime import datetime

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from comment_storage import list_comments, save_comment

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins="http://localhost:4321,http://127.0.0.1:4321",
    allow_origin_regex=r"https://.*\.app\.github\.dev",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# The basic structure of an API.
@app.get("/api/magic")
async def magic():
    return {"message": "Whatever you want to say to the world, say it with FastAPI!"}

# 定義 POST API 的 Request Body 結構與驗證條件
class CommentModel(BaseModel):
    # TODO: 2. 使用 Pydantic 定義 request body 的欄位與驗證條件。
    #
    # 提示:
    #   - 字串欄位使用 str
    #   - 時間欄位使用 datetime
    #   - Field(..., max_length=N) 可以限制字串長度
    #   - 請確保欄位名稱與需求一致，否則可能會導致問題
    #
    # 欄位需求:
    #   article_name: string，最多 50 字
    #   user_name: string，最多 50 字
    #   comment: string，最多 500 字
    #   time: datetime
    article_name: str = Field(..., max_length= 50, description="留言文章名稱")
    user_name: str = Field(..., max_length= 50, description="留言使用者名稱")
    comment: str = Field(..., max_length= 500, description="留言內容")
    time: datetime = Field(..., description="留言時間")


# NOTE: 別忘了去 comment_storage.py 裡面設定你的留言資料庫名稱


# TODO: 3. 實作 POST /
@app.post("/")
def create_comment(data: CommentModel):
    new_comment = {
        "article_name": data.article_name,
        "user_name": data.user_name,
        "comment": data.comment,
        "time": data.time.isoformat(),
    }

    save_comment(new_comment)
    return {"status": "succeed"}


# TODO: 4. 實作 GET /{article_name}/comment
@app.get("/{article_name}/comment")
def get_comments(article_name: str):
    return list_comments(article_name)

def create_comment(data: CommentModel):
    new_comment = {
        "article_name": data.article_name,
        "user_name": data.user_name,
        "comment": data.comment,
        "time": data.time.isoformat(),
    }

    save_comment(new_comment)
    return {"status": "succeed"}

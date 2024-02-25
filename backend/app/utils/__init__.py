import openai
import os

openai.api_key = os.environ.get('OPENAI_KEY')


from app.utils.query import query
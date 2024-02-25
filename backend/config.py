import os
from dotenv import load_dotenv

# load_dotenv()
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    DISCORD_API_TOKEN = os.environ.get("DISCORD_TOKEN")
    OPEN_API_KEY = os.environ.get("OPENAI_KEY")
from app.main import bp
from app.utils.query import query


@bp.get('/prompt')
def prompt():
    return "Hello devin"

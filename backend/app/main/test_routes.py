from app.main import bp
from app.utils.query import query


@bp.get('/test_prompt')
def test_prompt():
    response = query("Computer Networking - A Top Down Approach", "what is udp")

    return response

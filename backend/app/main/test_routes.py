from app.main import bp
from app.utils.query import query, chat


@bp.get('/test_prompt_1')
def test_prompt_1():
    #response = query("Computer Networking - A Top Down Approach", "what is udp")
    response = chat("Computer Networking - A Top Down Approach", "what is udp")

    return response

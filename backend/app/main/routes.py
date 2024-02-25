from app.main import bp
from app.utils.query import query
from flask import jsonify, request


@bp.route('/prompt', methods=["POST"])
def prompt():
    if request.method == "POST":

        data = request.get_json()
        prompt = data["prompt"]
        textbook = data["textbook"]
        response = query(textbook, prompt)

        return jsonify({
            "reponse": response,
        })
    else:
        return jsonify({"error": "Unsupported method"}), 400
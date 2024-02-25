from app.main import bp
from app.utils.query import query, chat
from flask import Flask, jsonify, request


@bp.route('/prompt', methods=["POST"])
def prompt():
    if request.method == "POST":

        data = request.get_json()
        prompt = data["prompt"]
        response = query("Computer Networking - A Top Down Approach", prompt)
        # response = query("Computer Organization and Design", prompt)

        return jsonify({
            "reponse": response,
        })
    else:
        return jsonify({"error": "Unsupported method"}), 400


@bp.route('/textbooks', methods=["GET", "POST"])
def textbooks():

    if request.method == "GET":

        data = request.get_json()
        prompt = data["?"]
        response = query("bookname", prompt)

        return jsonify({
            "reponse": response,
            })

    elif request.method == 'POST':
        data = request.get_json()

        return jsonify({
            "prompt": data.get("prompt", "ERROR: No prompt provided"),
            })
    else:
        return jsonify({"error": "Unsupported method"}), 400



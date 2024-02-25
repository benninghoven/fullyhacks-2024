from app.main import bp
from app.utils.query import query, chat
from flask import Flask, jsonify, request
import os


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


@bp.route('/textbooks', methods=["GET", "POST"])
def textbooks():

    if request.method == "GET":

        data = request.get_json()
        bookName = data["textbook_name"]
        response = query(bookName, prompt)

        bookDirectoryPath = "/app/app/data"
        bookPath = os.path.join(bookDirectoryPath, bookName)

        if os.path.isdir(bookPath):
            response = f"Book '{bookName}' success"
        else:
            response = f"Book '{bookName}' not found"

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



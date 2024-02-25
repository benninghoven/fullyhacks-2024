from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    # register blueprints
    from app.main import bp as main_bp
    app.register_blueprint(main_bp)
    
    return app
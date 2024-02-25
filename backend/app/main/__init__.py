from flask import Blueprint

bp = Blueprint('api', __name__)

from app.main import routes
from app.main import test_routes
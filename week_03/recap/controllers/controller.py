from app import app
from flask import render_template
from models.book_list import books


@app.route("/books")
def index():
    return render_template("index.html", books=books)

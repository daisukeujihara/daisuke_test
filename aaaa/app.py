from flask import Flask,render_template,request,redirect,session
import sqlite3
import click
from flask.cli import with_appcontext
app = Flask(__name__)

@app.route("/")
def toukou_get():

    a = ["投稿する"]
    toukou_suru = a

    return render_template("aaa.html")












if __name__ == "__main__":

    app.run(debug=True)
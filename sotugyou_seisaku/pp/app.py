from flask import Flask,render_template,request,redirect,session
import sqlite3
import click
from flask.cli import with_appcontext
app = Flask(__name__)

@app.route("/ss")
def toukou_get():

    a = ["投稿する"]
    tt = a

    return render_template("home.html",toukou_suru = tt)

@app.route("/")
def a():
   return "うんこ"











if __name__ == "__main__":

    app.run(debug=True)
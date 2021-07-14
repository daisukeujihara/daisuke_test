# 必要機能のインポート
from re import A
from flask import Flask ,render_template
# 名前をつける
from flask.templating import render_template, render_template_string
from werkzeug.utils import append_slash_redirect

app = Flask(__name__)

@app.route("/")
def helloWold():
    return "Hello World"

@app.route("/<name>")
def greet(name):
    return name + "さん、ハロー！"

@app.route("/template")
def template():
    py_name = "sunabaco"
    return render_template("index.html",name = py_name)

import sqlite3

@app.route("/dbtest")
def dbtest():
    conn = sqlite3.connect("flask_test.db")
    c = conn.cursor()
    c.execute("SELECT name,age,address FROM staff WHERE id = 1")
    staff_info = c.fetchone()
    c.close()
    return render_template("db_test.html", staff_info = staff_info)
    
@app.route("/kamikiruka")
def kamikiruka():
    
    import random
    a = ["電車で帰る","歩いて帰る"] 
    
    kamikiruka1 = random.choice(a)
    print(kamikiruka1)

    return render_template("kamikiruka.html", unmei = kamikiruka1)
    
@app.route("/keisannki")
def keisannki():
    
    import random
    s = ["うんこ"]
    
    kotae = random.choice(s)
    print(kotae)

    return render_template("keisann.html", kotae = kotae)
    













if __name__ == "__main__":

    app.run(debug=True)
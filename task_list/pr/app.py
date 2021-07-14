from flask import Flask,render_template,request,redirect,session
import sqlite3
app = Flask(__name__)
app.secret_key = "sunabacoT"

@app.route('/task_list')
def task_list():
    if "user_id" in session:
        conn = sqlite3.connect('list_test.db')
        c = conn.cursor()
        c.execute("SELECT * from list_test")
        task_list_py = []
        for row in c.fetchall():
            task_list_py.append({"tpl_id":row[0],"tpl_task":row[1],"task_user_id":row[2]})
        c.close()
        return render_template('task.html',tpl_task_list=task_list_py)

# ゲット通信ーーーーーーーーーーーーーー
@app.route('/add')
def add_get():
    
    return render_template('add.html')
# ポスト通信〜〜〜〜〜ーーー〜〜〜〜〜〜ーーー
@app.route('/add',methods=['POST'])
def add_post():
    task = request.form.get("task")


    conn = sqlite3.connect('list_test.db')
    c = conn.cursor()
    c.execute("INSERT INTO list_test values(null,?,3)",(task,))
    conn.commit()
    c.close()
    return redirect("/task_list")
# ----------------編集---------------------
@app.route('/edit/<int:id>')
def edit(id):
    conn = sqlite3.connect('list_test.db')
    c = conn.cursor()
    c.execute("SELECT task FROM list_test WHERE id = ?",(id,))
    task = c.fetchone()
    c.close()
    task = task[0]
    item = {"dic_id":id,"dic_task":task}
    return render_template('edit.html', tpl_task = item )
# -----------------------------------------------
@app.route('/edit',methods=['POST'])
def update_task():
    item_id = request.form.get("task_id")
    item_id = int(item_id)
    task = request.form.get("task_input")

    conn = sqlite3.connect('list_test.db')
    c = conn.cursor()
    c.execute("UPDATE list_test SET task = ? WHERE id = ?",(task,item_id))
    conn.commit()
    c.close()
    return redirect("/task_list")

@app.route('/del/<int:id>')
def DERETE(id):
    conn = sqlite3.connect('list_test.db')
    c = conn.cursor()
    c.execute("DELETE FROM list_test WHERE id = ?",(id,))
    conn.commit()
    c.close()
    return redirect("/task_list")

@app.route('/regist')
def refist_get():
    return render_template('regist.html')

@app.route('/regist',methods=['POST'])
def regist_post():
    name = request.form.get("name")
    password = request.form.get("password")
    print(name)
    print(password)

    conn = sqlite3.connect('pic.db')
    c = conn.cursor()
    c.execute("INSERT INTO member VALUES(null,?,?)",(name,password))
    conn.commit()
    c.close()
    return "登録できた"

@app.route('/login')
def login_get():
    return render_template('login.html')

@app.route('/login',methods=['POST'])
def login_post():
    name = request.form.get("member_name")
    password = request.form.get("member_password")
    print(name)
    print(password)

    conn = sqlite3.connect('list_test.db')
    c = conn.cursor()
    c.execute("SELECT id FROM member WHERE name = ? AND password = ?",(name,password))
    user_id = c.fetchone()
    c.close()
    if user_id is None:
        return render_template("login.html")
    else:
         
    # session["user_id"] = user_id
        return redirect("task_list")
    










if __name__ == "__main__":

    app.run(debug=True)

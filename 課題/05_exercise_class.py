"""
Progate Python Ⅳ を終えている前提です。



input()メソッドを使い、
Humanクラスを作成し、nameとbirthdayというインスタンス変数に名前と誕生日を入力してください。
クラスのインスタンスへの変数代入はコンストラクタを利用してください。

インスタンスへ変数代入後、最後に名前と誕生日を出力してください。
出力するときは、インスタンス変数を用いて出力させましょう

you = Human(name=your_name, birthday=your_birthday) # Human クラスからインスタンス生成
you.information() # youはHumanクラスのインスタンス。youにインスタンスメソッドinformation()を用いて情報を出力

実行結果例は下にあります。

名前の入力は、ターミナル(コマンドプロンプト)から行ってください。
ターミナルから入力を行うにはinput()メソッドを使えばできます。
下記の２行を実行してみてください。

your_name = input('名前を入力してください：')
print("あなたの名前は", your_name)


まずは、下記の例１になるように実装してみましょう。

-------------実行結果：例１
あなたについて教えて下さい
名前を入力してください：◯◯◯◯
誕生日を入力してください。例 2003/07/09：◯◯◯◯/◯◯/◯◯

名前は ◯◯◯◯
誕生日は ◯◯◯◯/◯◯/◯◯
-------------実行結果：例１ 以上


下記の、例２は余裕があれば挑戦してみてください。
・名前の入力のときに、空白を入力したら再度入力を求める。
・誕生日の入力のときに「◯◯◯◯/◯◯/◯◯」以外のフォーマットで入力すると再度入力を求める
-------------実行結果：例２
あなたについて教えて下さい
名前を入力してください：
１文字以上の入力が必要です。
名前を入力してください：SUNABACO
誕生日を入力してください。例 2003/07/09：2003/7/9
フォーマットが違います
誕生日を入力してください。例 2003/07/09：2003/07/09

名前は SUNABACO
誕生日は 2003年07月09日

-------------実行結果：例２ 以上


"""

from datetime import datetime
import re # 正規表現 実行結果例２を実装するときに使用します。

# ここに Human クラスを作成





# Human クラスからインスタンス生成
you = Human(name=your_name, birthday=your_birthday)
# インスタンスメソッドinformation()を用いて情報を出力
you.information() 

from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    vip = request.form['vip']
    senha = request.form['senha']
    # Aqui você pode adicionar código Python para processar os dados do formulário

    return render_template('result.html', name=name, email=email)

if __name__ == '__main__':
    app.run()

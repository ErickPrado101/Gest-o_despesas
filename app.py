from flask import Flask, request, jsonify

app = Flask(__name__)

expenses = []

@app.route('/api/expenses', methods=['GET', 'POST'])
def manage_expenses():
    if request.method == 'GET':
        return jsonify(expenses)
    elif request.method == 'POST':
        data = request.json
        expenses.append(data)
        return jsonify({"message": "Despesa criada com sucesso!"})

if __name__ == '__main__':
    app.run(debug=True)

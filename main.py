from flask import Flask, render_template, jsonify, request
from AES import AESCipher

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.get_json()
    cipher = AESCipher(data.get('key'))
    encrypted = cipher.encrypt(data.get('message'))
    return jsonify(data=encrypted.decode())

@app.route('/decrypt', methods=['POST'])
def decrypt():
    data = request.get_json()
    cipher = AESCipher(data.get('key'))
    decrypted = cipher.decrypt(data.get('ciphertext'))
    return jsonify(data=decrypted.decode())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
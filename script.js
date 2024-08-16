function encryptMessage() {
  const message = document.getElementById("message").value;
  const key = document.getElementById("key").value;

  if (message && key) {
    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
    document.getElementById("output").value = encrypted;
  } else {
    alert("Please enter both a message and a key.");
  }
}

function decryptMessage() {
  const encryptedMessage = document.getElementById("message").value;
  const key = document.getElementById("key").value;

  if (encryptedMessage && key) {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key);
      const plaintext = decrypted.toString(CryptoJS.enc.Utf8);

      if (plaintext) {
        document.getElementById("output").value = plaintext;
      } else {
        alert("Incorrect key or invalid encrypted message.");
      }
    } catch (error) {
      alert("Decryption failed. Please check your input.");
    }
  } else {
    alert("Please enter both the encrypted message and the key.");
  }
}
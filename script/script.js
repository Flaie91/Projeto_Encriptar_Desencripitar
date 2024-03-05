function encryptText() {
  var originalText = document.getElementById("original_Text").value;
  var encryptedText = "";

  for (var i = 0; i < originalText.length; i++) {
      var char = originalText[i];
      switch (char) {
          case "e":
              encryptedText += "enter";
              break;
          case "i":
              encryptedText += "imes";
              break;
          case "a":
              encryptedText += "ai";
              break;
          case "o":
              encryptedText += "ober";
              break;
          case "u":
              encryptedText += "ufat";
              break;
          default:
              encryptedText += char;
              
      }
  }

  document.getElementById("decrypted_Text").value = encryptedText;
}

function decryptText() {
  var encryptedText = document.getElementById("decrypted_Text").value;
  var decryptedText = "";

  var i = 0;
  while (i < encryptedText.length) {
      var currentChar = encryptedText[i];
      switch (currentChar) {
          case "e":
              if (encryptedText.substring(i, i + 5) === "enter") {
                  decryptedText += "e";
                  i += 4;
              }
              break;
          case "i":
              if (encryptedText.substring(i, i + 4) === "imes") {
                  decryptedText += "i";
                  i += 3;
              }
              break;
          case "a":
              if (encryptedText.substring(i, i + 2) === "ai") {
                  decryptedText += "a";
                  i += 1;
              }
              break;
          case "o":
              if (encryptedText.substring(i, i + 4) === "ober") {
                  decryptedText += "o";
                  i += 3;
              }
              break;
          case "u":
              if (encryptedText.substring(i, i + 4) === "ufat") {
                  decryptedText += "u";
                  i += 3;
              }
              break;
          default:
              decryptedText += currentChar; // Mantém qualquer caractere que não corresponda às regras de decriptografia
      }
      i++;
  }

  document.getElementById("original_Text").value = decryptedText;
}


function copyText() {
    
    var textarea = document.getElementById("decrypted_Text");    
    var texto = textarea.value;

    navigator.clipboard.writeText(texto)
    .then(()=> {
        alert("Texto criptografado (codificado) copiado para a área de transferência!");
    }, function(err) {
        console.error('Falha ao copiar texto: ', err);
    });
  }
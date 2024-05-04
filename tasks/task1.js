function checkWords(e) {
    e.preventDefault();
    const textareaInput = document.getElementById('textareaInput');
    const textInput = document.getElementById('textInput');
    const textareaText = textareaInput.value.trim().toLowerCase(); 
    const textInputText = textInput.value.trim().toLowerCase(); 

    
    const textareaWords = textareaText.split(/\s+/);
    const textInputWords = textInputText.split(/\s+/);

    let found = false;


    for (let i = 0; i < textInputWords.length; i++) {
      if (textareaWords.includes(textInputWords[i])) {
        found = true;
      }
    }
    const resultElement = document.getElementById('result');
      if (found) {
        resultElement.textContent = 'Matnda input matnining so\'zi mavjud.';
      } else {
        resultElement.textContent = 'Matnda input matnining so\'zi mavjud emas.';
      }
    }
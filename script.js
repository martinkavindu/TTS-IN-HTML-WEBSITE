<script type="text/javascript">
    let isTTSActive = false; 

    const speakEL = document.getElementById('rightButton');
    const iconEL = speakEL.querySelector('i');

    speakEL.addEventListener('click', toggleTTS);
   

    function toggleTTS() {
        isTTSActive = !isTTSActive; 

        if (isTTSActive) {
            iconEL.classList.remove('fa-microphone');
            iconEL.classList.add('fa-microphone-slash');
            document.addEventListener('mouseup', speakSelectedText);
        } else {
            iconEL.classList.remove('fa-microphone-slash');
            iconEL.classList.add('fa-microphone');
            window.speechSynthesis.cancel(); 
            document.removeEventListener('mouseup', speakSelectedText);
        }
    }

    function speakSelectedText() {
        
        window.speechSynthesis.cancel();

        
        const selectedText = window.getSelection().toString();

      
        if (selectedText) {
            const utterance = new SpeechSynthesisUtterance(selectedText);
            window.speechSynthesis.speak(utterance);
        }
    }
</script>
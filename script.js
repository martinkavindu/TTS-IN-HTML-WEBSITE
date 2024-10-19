<script type="text/javascript">
    let isTTSActive = false; 

    const speakEL = document.getElementById('rightButton');
    const iconEL = speakEL.querySelector('i');

    speakEL.addEventListener('click', toggleTTS);

    function toggleTTS() {
        isTTSActive = !isTTSActive; 

        if (isTTSActive) {
            iconEL.classList.remove('fa-microphone-slash');
            iconEL.classList.add('fa-microphone');
            document.addEventListener('mouseup', speakSelectedText);
        } else {
            iconEL.classList.remove('fa-microphone');
            iconEL.classList.add('fa-microphone-slash');
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

//advanced script
<script type="text/javascript">
    let isTTSActive = false;
    const ttsTrigger = document.getElementById('ttsTrigger');
    const ttsPopup = document.getElementById('ttsPopup');
    const speakEL = document.getElementById('rightButton1');
    const iconEL = speakEL.querySelector('i');
    let speechUtterance;

   
    ttsTrigger.addEventListener('click', () => {
        ttsPopup.style.display = ttsPopup.style.display === 'none' ? 'block' : 'none';
    });

    
    speakEL.addEventListener('click', toggleTTS);

    function toggleTTS() {
        isTTSActive = !isTTSActive;

        if (isTTSActive) {
            iconEL.classList.remove('fa-microphone-slash');
            iconEL.classList.add('fa-microphone');
            document.addEventListener('mouseup', speakSelectedText);
            announceActivation();
            ttsPopup.style.display = 'none';
        } else {
            iconEL.classList.remove('fa-microphone');
            iconEL.classList.add('fa-microphone-slash');
            stopSpeech();  
            document.removeEventListener('mouseup', speakSelectedText);
            ttsPopup.style.display = 'none';
        }
    }

    function speakSelectedText() {
        stopSpeech(); 

        const selectedText = window.getSelection().toString();

        if (selectedText) {
            const utterance = new SpeechSynthesisUtterance(selectedText);
            window.speechSynthesis.speak(utterance);
        }
    }

    function announceActivation() {
        stopSpeech();  

        const announcement = new SpeechSynthesisUtterance("Text to Speech.");
        announcement.onend = () => {
            console.log('Activation message finished.');
            readFromTop();  
        };
        window.speechSynthesis.speak(announcement);
    }

    function readFromTop() {
        stopSpeech(); 

        const allText = document.body.innerText;  

        if (allText) {
            speechUtterance = new SpeechSynthesisUtterance(allText);
            window.speechSynthesis.speak(speechUtterance);
        }
    }

    function stopSpeech() {
        window.speechSynthesis.cancel();
    }
</script>



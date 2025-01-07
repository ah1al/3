import axios from 'axios';

    const token = 'df1d17b77aab0101c655ad17e8e7e22c';
    const authToken = 'your_auth_token'; // استبدل بالتوكن الخاص بك

    document.getElementById('smsForm').addEventListener('submit', async function(event) {
      event.preventDefault();
      const phoneNumber = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      try {
        const response = await axios.post(`https://api.twilio.com/2010-04-01/Accounts/${token}/Messages.json`, {
          To: phoneNumber,
          From: '+1234567890', // استبدل برقم Twilio الخاص بك
          Body: message
        }, {
          auth: {
            username: token,
            password: authToken
          }
        });

        document.getElementById('result').textContent = 'تم إرسال الرسالة بنجاح!';
      } catch (error) {
        console.error('حدث خطأ أثناء إرسال الرسالة:', error.message);
        document.getElementById('result').textContent = 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.';
      }
    });

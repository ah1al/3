import axios from 'axios';

    const token = '08e45cd8de7f7dd0fafe0a85b9d2c46a';
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

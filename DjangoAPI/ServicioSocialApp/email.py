from django.core.mail import message, send_mail, BadHeaderError
from django.conf import settings
from django.http import response


def send_email(obj):
    subject = obj['subject']
    message = obj['message']
    to_email = obj['toEmail']
    from_email = settings.EMAIL_HOST_USER
    if subject and message and from_email:
        try: 
            send_mail(subject,message,from_email,to_email)
        except BadHeaderError:
            return response('Send')
        else: 
            return response('Error')
        
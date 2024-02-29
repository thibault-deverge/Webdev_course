from django import forms

# not even use since class view
class ProfileForm(forms.Form):
    user_image = forms.ImageField()
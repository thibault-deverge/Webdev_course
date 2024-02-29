from django.shortcuts import render, redirect
from django.http import Http404, HttpResponseNotFound
from django.urls import reverse

monthly_challenges = {
    "january": "Eat no meat for the entire month",
    "february": "Walk for at least 20 minutes every day",
    "march": "Learn Django for at least 30 minutes every day",
    "april": "Eat no meat for the entire month",
    "may": "Walk for at least 20 minutes every day",
    "june": "Learn Django for at least 30 minutes every day",
    "july": "Eat no meat for the entire month",
    "august": "Walk for at least 20 minutes every day",
    "september": "Learn Django for at least 30 minutes every day",
    "october": "Walk for at least 20 minutes every day",
    "november": "Eat o meat for the entire month",
    "december": None
}

# Create your views here.
def index(request):
    months = list(monthly_challenges.keys())

    return render(request, "challenges/index.html", {
        "months": months
    })

def monthly_challenge_by_number(request, month):
    months = list(monthly_challenges.keys())
    if month > len(months):
        raise Http404()

    redirect_month = months[month - 1]
    return redirect("month-challenge", redirect_month)

def monthly_challenge(request, month):
    try:
        challenge_text = monthly_challenges[month]
        return render(request ,"challenges/challenge.html", {
            "month_name": month,
            "text": challenge_text
        })
    except:
        raise Http404()
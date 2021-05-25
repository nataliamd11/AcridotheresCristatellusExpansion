from django.urls import path
from ACExpansion.api.views import ListACRecordByCountry

urlpatterns = [
    path('records/<str:country>/', ListACRecordByCountry.as_view(), name="records")
]

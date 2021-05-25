from ACExpansion.api.views import ListACRecordByCountry
from django.urls import path


urlpatterns = [
    path('records/<str:country>/<int:year>/', 
          ListACRecordByCountry.as_view(), 
          name="records")
]

from ACExpansion.api.views import (ListACRecordByCountry, 
                                   ListYears,
                                   ListCountries)
from django.urls import path


urlpatterns = [

    path('records/countries/', 
          ListCountries.as_view(),
          name="poni"),
          
    path('records/<str:country>/', 
          ListACRecordByCountry.as_view(), 
          name="records"),

    path('records/<str:country>/years/', 
          ListYears.as_view(), 
          name="years"),

]

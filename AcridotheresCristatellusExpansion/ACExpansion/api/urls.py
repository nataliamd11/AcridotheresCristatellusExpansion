from ACExpansion.api.views import (ListACRecordByCountry, 
                                   ListYears,
                                   ListCountries,
                                   ListMapParameters)
from django.urls import path


urlpatterns = [

    path('records/countries/', 
          ListCountries.as_view(),
          name="countries"),
          
    path('records/<str:country>/', 
          ListACRecordByCountry.as_view(), 
          name="records"),

    path('records/<str:country>/years/', 
          ListYears.as_view(), 
          name="years"),

    path('map-parameters/', 
          ListMapParameters.as_view(),
          name="map"),

]

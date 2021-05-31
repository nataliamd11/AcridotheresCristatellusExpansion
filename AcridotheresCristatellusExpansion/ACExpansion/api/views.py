import json

from ACExpansion.api.serializers import ACRecordSerializer
from ACExpansion.models import ACRecord

from django.http import HttpResponse
from django.views.generic import View

from rest_framework.response import Response
from rest_framework.views import APIView


class ListACRecordByCountry(APIView):
    
    def get(self, request, country):
        model_instance = ACRecord.objects.filter(country=country)
        serializer = ACRecordSerializer(model_instance, many=True)
        return Response(serializer.data)


class ListYears(View):

    def get(self, request, country):
        AC_country = (ACRecord.objects.filter(country=country)
                              .order_by('year')
                              .values_list('year', flat=True)
                              .distinct())
        return HttpResponse(json.dumps(list(AC_country)),
                            content_type="application/json")

from ACExpansion.api.serializers import ACRecordSerializer
from ACExpansion.models import ACRecord
from rest_framework.response import Response
from rest_framework.views import APIView


class ListACRecordByCountry(APIView):
    
    def get(self, request, country):
        model_instance = ACRecord.objects.filter(country=country)
        serializer = ACRecordSerializer(model_instance, many=True)
        return Response(serializer.data)

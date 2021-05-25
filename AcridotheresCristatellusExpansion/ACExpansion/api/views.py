from rest_framework.views import APIView
from ACExpansion.models import ACRecord
from ACExpansion.api.serializers import ACRecordSerializer
from rest_framework.response import Response


class ListACRecordByCountry(APIView):
    
    def get(self, request, country):
        model_instance = ACRecord.objects.filter(country=country)
        serializer = ACRecordSerializer(model_instance, many=True)
        return Response(serializer.data)
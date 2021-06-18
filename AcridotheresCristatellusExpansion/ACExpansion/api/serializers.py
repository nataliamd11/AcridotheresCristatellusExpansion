from rest_framework import serializers
from ACExpansion.models import ACRecord, MapParameters


class ACRecordSerializer(serializers.ModelSerializer):

    class Meta():
        model = ACRecord
        exclude = ('state_code', 'state')


class MapSerializer(serializers.ModelSerializer):

    class Meta():
        model = MapParameters
        fields = '__all__'
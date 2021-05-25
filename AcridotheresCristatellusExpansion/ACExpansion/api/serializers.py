from rest_framework import serializers
from ACExpansion.models import ACRecord


class ACRecordSerializer(serializers.ModelSerializer):

    class Meta():
        model = ACRecord
        exclude = ('state_code', 'state')
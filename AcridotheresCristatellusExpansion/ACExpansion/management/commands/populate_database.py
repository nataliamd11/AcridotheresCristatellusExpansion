import os

from ACExpansion.api.views import ListCountries
from ACExpansion.models import ACRecord as Record
from ACExpansion.models import MapParameters as MapModel
from ACExpansion.utils.utils_get_map_parameters import MapParameters
from ACExpansion.utils.utils_populate_database import RecordsFromCsv
from django.core.management.base import BaseCommand, CommandError

directory = os.getcwd()

class Command(BaseCommand):

    help = "Populate ACRecord table with ebird cleaned data from csv"

    def create_ACRecord_objects(self):
        inst = RecordsFromCsv(directory)
        data = inst.get_rows_list()
        AC_objects = [Record(**row) for row in data]
        return AC_objects

    def create_MapParameters_objects(self):
        map_parameters = []
        countries = ListCountries().list_countries()
        for country in countries:
            inst = MapParameters(country)
            map_parameters.append(inst.getMapParameters())
        map_objects = [MapModel(**row) for row in map_parameters]
        return map_objects

    def handle(self, *args, **options):
        try:
            AC_objects = self.create_ACRecord_objects()
            Record.objects.bulk_create(AC_objects)
        except Record.DoesNotExist:
            raise CommandError('Record does not exist')
        try:
            map_objects = self.create_MapParameters_objects()
            MapModel.objects.bulk_create(map_objects)
        except MapModel.DoesNotExist:
            raise CommandError('Map Parameters does not exist')

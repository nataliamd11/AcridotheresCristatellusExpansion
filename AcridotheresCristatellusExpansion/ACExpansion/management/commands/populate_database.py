import os

from ACExpansion.models import ACRecord as Record
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

    def handle(self, *args, **options):
        try:
            AC_objects = self.create_ACRecord_objects()
            Record.objects.bulk_create(AC_objects)
        except Record.DoesNotExist:
            raise CommandError('Record does not exist')

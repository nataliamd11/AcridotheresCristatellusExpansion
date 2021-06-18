import uuid
from datetime import date

from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


def get_year(instance):
    return instance.observation_date.year


class ACRecord(models.Model):
    
    id = models.UUIDField(primary_key=True,
                          default=uuid.uuid4,
                          editable=False)
    observation_count = models.IntegerField(null=True)
    country = models.CharField(max_length=150)
    country_code = models.CharField(max_length=2)
    state = models.CharField(max_length=150)
    state_code = models.CharField(max_length=150)
    latitude = models.FloatField(validators=[MinValueValidator(-90), 
                                             MaxValueValidator(90)])
    longitude = models.FloatField(validators=[MinValueValidator(-180), 
                                              MaxValueValidator(180)])
    observation_date = models.DateField(null=False)
    year = models.IntegerField(default=get_year)

    class Meta:
        ordering = ['country', 'year']

    def __str__(self):
        return f'{self.country_code} _ {self.year}'


class MapParameters(models.Model):

    id = models.UUIDField(primary_key=True,
                          default=uuid.uuid4,
                          editable=False)
    country = models.CharField(max_length=150)
    lon_center = models.FloatField(validators=[MinValueValidator(-180), 
                                              MaxValueValidator(180)])
    lat_center = models.FloatField(validators=[MinValueValidator(-90), 
                                             MaxValueValidator(90)])
    lon_max = models.FloatField(validators=[MinValueValidator(-180), 
                                              MaxValueValidator(180)])
    lon_min = models.FloatField(validators=[MinValueValidator(-180), 
                                              MaxValueValidator(180)])
    lat_max = models.FloatField(validators=[MinValueValidator(-180), 
                                              MaxValueValidator(180)])
    lat_min = models.FloatField(validators=[MinValueValidator(-180), 
                                              MaxValueValidator(180)])
    zoom = models.IntegerField(default=6)

    def __str__(self):
        return f'Map parameters: {self.country}'
import math
import pandas as pd
import os


class BaseGeoCalculations():

    @staticmethod
    def __getLength(lon_max, lon_min):
        return lon_max - lon_min

    @staticmethod
    def __getWidth(lat_max, lat_min):
        return lat_max - lat_min

    @staticmethod
    # Returns a tuple with the side length and width in grades.
    def __getLengthWidth(lon_max, lon_min, lat_max, lat_min):
        side_length = BaseGeoCalculations.__getLength(lon_max, lon_min)
        side_width = BaseGeoCalculations.__getWidth(lat_max, lat_min)
        return (side_length, side_width)

    @staticmethod
    def getCenter(lon_max, lon_min, lat_max, lat_min):
        side_length, side_width = BaseGeoCalculations.__getLengthWidth(
            lon_max, lon_min, lat_max, lat_min)
        lon_center = side_length/2 + lon_min
        lat_center = side_length/2 + lat_min
        return {"lon_center": lon_center, "lat_center": lat_center}

    @staticmethod
    def addBuffer(lon_max, lon_min, lat_max, lat_min):
        # Calculates new vertices for the map adding a buffer of 1/5 of the length
        side_length, side_width = BaseGeoCalculations.__getLengthWidth(
            lon_max, lon_min, lat_max, lat_min)
        old_vertices = [lon_max, lon_min, lat_max, lat_min]
        buffer_x = side_length/5
        buffer_y = side_width/5
        new_lon_max = lon_max + buffer_x
        new_lon_min = lon_min - buffer_x
        new_lat_max = lat_max + buffer_y
        new_lat_min = lat_min - buffer_y
        return {"lon_max": new_lon_max, "lon_min": new_lon_min,
                "lat_max": new_lat_max, "lat_min": new_lat_min}
    



class MapParameters(BaseGeoCalculations):

    directory = os.getcwd()
    path_csv = os.path.join(directory, "ACExpansion", "utils", "AC_american_records_csv.csv")
    data = pd.read_csv(path_csv)

    def __init__(self, country):
        super().__init__()
        self.country = country
        self.data_country = self.filter_data_by_country()

    def filter_data_by_country(self):
        data_country = MapParameters.data[
            MapParameters.data.country==self.country]
        return data_country

    def getVertices(self):
        lon_max = self.data_country["longitude"].max()
        lon_min = self.data_country["longitude"].min()
        lat_max = self.data_country["latitude"].max()
        lat_min = self.data_country["latitude"].min()
        return {"lon_max":lon_max, "lon_min":lon_min, 
                "lat_max":lat_max, "lat_min":lat_min}    

    def getMapParameters(self):
        vertices = self.getVertices()
        buffer_coord = self.addBuffer(**vertices)
        map_center = self.getCenter(**buffer_coord)
        return {**map_center, **buffer_coord, "country": self.country}
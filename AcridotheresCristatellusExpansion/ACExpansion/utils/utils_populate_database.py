import os

import pandas as pd


class RecordsFromCsv():

    def __init__(self, directory):
        self.directory = directory
        self.path_csv = os.path.join(self.directory, "ACExpansion", "utils", "AC_american_records_csv.csv")

    def get_rows_list(self):
        AC_data = pd.read_csv(self.path_csv).to_dict(orient='index')
        AC_data_rows = [v for k,v in AC_data.items()]
        return AC_data_rows
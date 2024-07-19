import pandas as pd
import json
import os

dir_name = os.path.dirname(__file__)

excel_file_path = os.path.join(dir_name, 'assignment data.xlsx')
df = pd.read_excel(excel_file_path)

data = df.to_dict("records")

output_file_path = 'data.json'

with open(output_file_path, 'w') as json_file:
    json.dump(data, json_file)

print("Data extraction completed, json data stored in data.json")
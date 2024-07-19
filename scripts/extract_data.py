import pandas as pd
import json


df = pd.read_excel('./assignment data.xlsx')

data = df.to_dict("records")

output_file_path = 'data.json'

with open(output_file_path, 'w') as json_file:
    json.dump(data, json_file)

print("Data extraction completed, json data stored in data.json")
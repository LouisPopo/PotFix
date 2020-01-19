import os
import pandas as pd
import numpy as np
import json
import sys

directory = "Noisy_data"

json_directory = "json_files"

current_state = pd.DataFrame()

for i in range(0, 20):
    filename = str(i) + ".csv"
    df = pd.read_csv(directory + "/" + str(filename), index_col=[0])
    if (i == 0):
        current_state = df.copy(deep=True)
        # df.to_json(json_directory + "/" + str(i) + ".json", orient="index")
    else:
        current_state['weight'] = (current_state['weight']*i + df["weight"])/(i+1)

    current_state.to_json(json_directory + "/" + str(i) + ".json", orient="records")

states = []

for i in range(0, 20):
    filename= str(i) + ".json"
    with open(json_directory + "/" + filename, 'r') as file:
        states.append(file.read())
print(len(states))

string_to_write = "[" + ",".join(states) + "]"

with open('statistack_front/src/sample_data_2.json', 'w') as file:
    file.write(string_to_write)


# for i, filename in enumerate(os.listdir(directory)):
    
#     df = pd.read_csv(directory + "/" + str(filename))

#     print(filename)
#     if (i == 0):
#         states.append(df)
#     else:
#         df["az"] = (states[i - 1]["az"]*i  + df["az"]) / (i+1)
#         states.append(df) 


# df = pd.read_csv(directory + "/0.csv")
# print(df.head())
# df['weight'] = abs(df['noisy'])
# df.drop(columns=["az", "noisy"], inplace=True)
# df.to_json("SAMPLE_FINAL.json")
    
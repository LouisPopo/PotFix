import os
import pandas as pd
import numpy as np
import sys
from get_positions import getEquidistancePoints

args = sys.argv


directory = "Noisy_data"

# for i, filename in enumerate(os.listdir(directory)):
    
#     df = pd.read_csv(directory + "/" + str(filename))

#     print(filename)
#     if (i == 0):
#         states.append(df)
#     else:
#         df["az"] = (states[i - 1]["az"]*i  + df["az"]) / (i+1)
#         states.append(df) 

df = pd.read_csv(directory + "/0.csv")
print(df.head())
# df['weight'] = abs(df['noisy'])
# df.drop(columns=["az", "noisy"], inplace=True)
# df.to_json("SAMPLE_FINAL.json")
    
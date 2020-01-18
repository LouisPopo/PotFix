import os
import pandas as pd

directory = "test"

state = []

for i, filename in enumerate(os.listdir(directory)):
    
    df = pd.read_csv(directory + "/" + str(filename), usecols=["az"])

    if (i == 0):
        state = df["az"]

    print(df.head())
    
    print(i)

    
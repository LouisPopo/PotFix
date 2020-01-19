import sys
import numpy
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

def getEquidistancePoints(p1, p2, parts):
    return zip(numpy.linspace(p1[0], p2[0], parts+1),
               numpy.linspace(p1[1], p2[1], parts+1))

if __name__ == "__main__":
    args = sys.argv
    p1 = [float(args[1]), float(args[2])]
    p2 = [float(args[3]), float(args[4])]

    df = pd.read_csv(str(args[5]), usecols=["az"])

    nb = len(df.index)

    points = pd.DataFrame(list(getEquidistancePoints(p1, p2, nb)))
    df['lat'] = points[0]
    df['lng'] = points[1]

    for i in range(20):
        new_df = df.copy(deep=True)
        randomness = 40

    
        # if (i == 0 or i == 1 or i == 2):
        #     randomness = 5

        new_df["weight"] = abs(df["az"] + (np.array(np.random.randn(df.shape[0])))/randomness)

        if( i > 5):
            new_df.loc[1, 'weight'] = 0.8

        new_df.drop(columns=["az"], inplace=True)
        new_df.to_csv("Noisy_data/" + str(i) + ".csv", header=True)
    



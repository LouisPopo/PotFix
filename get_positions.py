import sys
import numpy
import pandas as pd
import numpy as np

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

    df['weight'] = abs(df['az'] + (np.array(np.random.randn(df.shape[0]))/40))

    df.drop(columns=["az"], inplace=True)

    print(df.head())

    filename = "Data/sample_data.json" 
    df.to_json(filename, orient="records")

    # for i in range(10):
    #     d = 
    #     df["noisy"] = df["az"] + (np.array(d))/40
    #     df.to_csv("Noisy_data/" + str(i) + ".csv", header=True)



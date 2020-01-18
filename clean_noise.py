import pandas as pd
import sys
import matplotlib.pyplot as plt

def reduce_noise(filename):
    df = pd.read_csv(filename, usecols=["time", "az"])
    df["az"] = abs(df["az"])
    df['MA'] = df.rolling(window=5).mean()
    return df

if __name__  == "__main__":
    filename = str(sys.argv[1])
    clean = reduce_noise(filename)

    clean.plot()
    plt.show()
    print(clean)
import sys
import numpy

def getEquidistancePoints(p1, p2, parts):
    return zip(numpy.linspace(p1[0], p2[0], parts+1),
               numpy.linspace(p1[1], p2[1], parts+1))

if __name__ == "__main__":
    args = sys.argv
    print(args)
    p1 = [ float(args[1]), float(args[2])]
    p2 = [ float(args[3]), float(args[4])]

    nb = float(args[5])

    points = list(getEquidistancePoints(p1, p2, nb))

    print(points)



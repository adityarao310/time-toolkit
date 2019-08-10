# https://www.youtube.com/watch?v=La6ZO8vu-1w&list=WL&index=14&t=0s
# When you iterate over a CSV file, each iteration of the loop produces a dictionary from strings to strings.

import csv
import json
import os
import random

csvFilePath = "test.csv"
jsonFilePath = "output.json"
folder = r"/Users/adityarao310/Documents/everyoneShouldCode/time-toolkit/images/profiles/"
string_path = "images/profiles/"
inputs = ["music", "author", "politician", "scientist", "sports", "misc"]


def generate_image_path(category_name_string, row_of_dicts):
    """In a row of dicts, checks if key, value // category, $$$$$ is $$$$$. Then gets path names"""
    for each_value in row_of_dicts:
        if each_value['category'] == category_name_string:
            subfolder = folder + category_name_string
            a = random.choice(os.listdir(subfolder))
            each_value['image'] = string_path + \
                str(each_value['category']) + "/" + str(a)


# read csv and add to dictionary
csv_rows = []
with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    title = csvReader.fieldnames
    # print(title)
    for row in csvReader:
        csv_rows.extend([{title[i]:row[title[i]] for i in range(len(title))}])
        for input in inputs:
            generate_image_path(input, csv_rows)


# write that data to json file
with open(jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(csv_rows, indent=4))

print("done writing data")

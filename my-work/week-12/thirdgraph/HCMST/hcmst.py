#!/usr/bin/env python3.7
"""
How Couples Meet and Stay Together

For more information, see [the website](https://data.stanford.edu/hcmst)

Download STATA data (.dta) and put in the same directory as this script.
"""
from pathlib import Path
import pandas as pd

for fpath in Path().glob("*.dta"):
    print(f"Reading {fpath}")
    df = pd.read_stata(fpath)
    out_fpath = fpath.with_suffix(".csv")
    print(f"Writing {out_fpath}")
    df.to_csv(fpath.with_suffix(".csv"))

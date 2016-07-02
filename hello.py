#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import os
import subprocess

# path to the script that must run under the virtualenv
script_file = "/Users/mklarmann/Documents/workspace/edblca/hello2.py" # + str(sys.argv)
env = "/Users/mklarmann/Documents/workspace/miniconda3/envs/bw2"

subprocess.call([os.path.join(env, 'bin/python'), script_file])

"""
Server package configuration

Backend for EECS 441 Starter App.
"""

from setuptools import setup

setup(
    name='server',
    version='0.1.0',
    packages=['server'],
    include_package_data=True,
    install_requires=[
        'arrow==0.13.0',
        'bs4==0.0.1',
        'Flask==1.0.2',
        'requests==2.21.0',
        'sh==1.12.14',
    ],
)

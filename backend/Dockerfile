
# Use an official Python runtime as the base image
FROM python:3.9-alpine

ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /django

# Copy the requirements.txt file to the container
COPY requirements.txt requirements.txt

# Install the Python dependencies
RUN pip3 install -r requirements.txt

# Copy the rest of the application code to the container
COPY . .

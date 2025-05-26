# To Run the server in Localhost:

## 1. Create a Conda Environment

open Anaconda prompt and enter this command:

`conda create --name <environment-name> python=3.10`

## 2. Run Conda Environment.

Go to the server directory from Anaconda Prompt and enter this command:

`conda activate <environment-name>`

## 3. Install Libraries

Enter below command to install libraries:

`pip install -r requirements.txt`

## 4. Run the Server

Run below command to run the server:

`uvicon app:app --reload`

## 5. Open the server.

server will start on port 8000.
You can do API testing through `localhost:8000`


# To Run the Frontend in Development Environment

open the terminal and go to /chat-ui directory.

Run `npm run dev`
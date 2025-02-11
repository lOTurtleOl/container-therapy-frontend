# **CBT Container Therapy Front End (WIP)**

Welcome to the CBT Container App! This application allows users to create, retrieve, update, and delete topics and their associated subtopics, functioning as a visual representation of the container method used in Cognitive Behavioral Therapy. This is the front-end of the application, which interfaces with a RESTful API provided by the back-end service.

## **Table of Contents**

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)

## **Introduction**

This application provides a simple and intuitive interface for managing objects of stress. It's designed to be a useful tool for containing and organizing subjects of personal struggle in an easily accessible space.

Features

Add Topics: Create new topics with ease.

Delete Topics: Remove unwanted topics.

Data Persistence: Connects to a RESTful API to persist data.

## **Technologies Used**

React

HTML

CSS

JavaScript

## **Setup and Installation**

Clone the repository:

git clone https://github.com/lOTurtleOl/container-therapy-frontend.git

Navigate to the project directory:

cd container-therapy-frontend

Install dependencies:

npm install

Start the application:

npm start

**back-end is currently being debugged**
Note: Ensure the back-end service is running to enable full functionality. You can find the back-end repository here.

## **Usage**

To create a new topic, enter the topic name in the input field and click "Add".

To delete a topic, click the "Delete" button next to the topic.

## **Code Structure**

src/components: Contains all the React components used in the app.

src/App.js: Main application file managing routes and state.

src/index.js: Entry point of the React application.

src/styles.css: The CSS file for styling the app.

## **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

## **Features to be added**

Add SubTopics: Add subtopics to existing topics.
 - To add a subtopic, enter the subtopic name and comment in the input fields and click "Add".

Delete SubTopics: Remove specific subtopics from a topic.
- To delete a subtopic, click the "Delete Sub topic" button next to the subtopic.

For the back-end repository, refer to its dedicated README for setup instructions, API documentation, and more.

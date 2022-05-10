---
sidebar_position: 2
slug: /camunda-7/
---


# Intro

This page contains various tasks to learn BPMN hands on.

## Getting Started

There is a ready to user docker image with which all tasks can be done.
To use email or twitter, you must first create an account (gmail is preconfigured as provider, but can be overridden via the corresponding env variables) and adjust the environment variables accordingly.

```shell
docker run -p 8080:8080 \
-e TWITTER_TOKEN='XXX' \
-e TWITTER_TOKENSECRET='XXX' \
-e TWITTER_APIKEY='XXX' \
-e TWITTER_APIKEYSECRET='XXX' \
-e SPRING_MAIL_PASSWORD='XXX' \
-e SPRING_MAIL_USERNAME='XXX' \
camundauniversity/exercise-application:latest
```

But you can also start the application without the twitter and email functionality:

```shell
docker run -p 8080:8080 camundauniversity/exercise-application:latest
```

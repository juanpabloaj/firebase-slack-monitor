# firebase-slack-monitor

Monitoring the firebase activity and send notifications to a slack channel.

You can use this package as a docker container. The container is available in

https://registry.hub.docker.com/u/juanpabloaj/firebase-slack-monitor/

## Environment variables

Set this environment variables to use

    export SLACK_TOKEN="abc-slack-token"
    export FIREBASE_URL="https://my-firebase-app.firebaseio.com/"
    export SLACK_CHANNEL="#slackChannel"
